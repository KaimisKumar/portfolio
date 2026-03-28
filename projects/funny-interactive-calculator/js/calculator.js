 let display = document.getElementById("screen");
        let errorCounter=0;
        let keypad = document.getElementsByClassName("keypad")[0];
        let reaction = document.getElementsByClassName("reaction")[0];
        let acting = document.getElementById("action");
        let image = document.getElementById("img");
        let userguide = document.getElementById("userguide");
        function showInstrut(){
            userguide.style.transform="translateY(0%)";
        }
        function hideInstruct(){
            userguide.style.transform="translateY(-200%)";
        }
        function calculate(){
            try{
            display.value = eval(display.value);
            }
            catch(e){
                errorCounter++;
                switch(errorCounter){
                    case 1:
                        image.src ="images/1.gif"
                        image.alt ="Funny calculator reacting to invalid input with warning message";
                        keypad.style.display="none";
                        reaction.style.display = "grid";
                        acting.innerHTML="No! No! No!... This is not a valid mathematical expression. Please use the correct format. This is your first mistake, and I can only allow up to 3 mistakes.";
                        break;
                    case 2: 
                        image.src ="images/2.gif"
                        image.alt=" Funny calculator humorously getting frustrated with repeated mistakes";
                        keypad.style.display="none";
                        reaction.style.display = "grid";
                        acting.innerHTML="I have already told you to use the calculator for proper calculations. Please do not repeat this again — my mind is starting to hang!";
                        break;
                    case 3:
                        image.src ="images/3.gif"
                        image.alt="Funny calculator giving final warning before breakdown";
                        keypad.style.display="none";
                        reaction.style.display = "grid";
                        acting.innerHTML="Oh my God!... Why are you not taking my warnings seriously? Every mistake is driving me crazy. This is your last warning — please use the correct calculation format, or my mind will shut down!";
                        break;
                    case 4:
                        image.src ="images/4.gif"
                        image.alt="Funny calculator shutting down dramatically after too many errors";
                        keypad.style.display="none";
                        reaction.style.display = "grid";
                        acting.innerHTML="Oh God, please save me from this human...Hey great human, you have crossed all limits! My mind has now shut down. The only option left is to refresh the page.";
                        document.getElementById("tryagain").style.display = "none";
                        break;

                }
            }
        }
      function displaykeypad(){
                keypad.style.display="grid";
                reaction.style.display = "none";
      }