 //Function for Nav showing
        function shownav(){
            document.getElementById("headNav").className="mobile-head-nav";
            document.getElementById("header").classList.add("mobile-nav-active");
            document.getElementsByClassName("nav-button")[0].style.display="none";
            document.getElementById("closebtn").hidden=false;
        }
        function closenav(){
             document.getElementById("headNav").className="header-nav";
             document.getElementById("header").classList.remove("mobile-nav-active");
             document.getElementsByClassName("nav-button")[0].style.display="flex";
            document.getElementById("closebtn").hidden=true;
            }
         let link = document.querySelectorAll("#headNav a");
            for(let i = 0; i<link.length; i++){
               link[i].addEventListener('click',closenav);
            }

            
            function updateScrollPadding() {//ye function isliye hai ki jab hum project etc. par click kare to header ke andar na ghus jaaye
                const header = document.querySelector('header');
                    if (header) {
                        const headerHeight = header.offsetHeight;          // real computed height (px mein)
                        document.documentElement.style.scrollPaddingTop = headerHeight+"px";
                    }
                }

        // note ye event listene islye jaruri hai taaki inme se koi bhi event ho to wo phir se sahi height calculate kar sake
        window.addEventListener('load', updateScrollPadding);
        window.addEventListener('resize', updateScrollPadding);
        window.addEventListener('orientationchange', updateScrollPadding); // mobile rotate pe
        // ye neeche wala code windows ke scroll hone par header ko transparent bana dega
        
        window.addEventListener('scroll', ()=>{header.style.backgroundColor="rgba(0,0,126,.8)"; if(scrollY===0) header.style.backgroundColor="rgba(0,0,126,1)"});