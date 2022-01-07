let screen = document.getElementById("screen")
let buttons = document.querySelectorAll("button")
let screenValue = ""
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerHTML;
        console.log(buttonText);

        if (buttonText == "x") {
            buttonText = "*"
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "C") {
            screenValue = "";
            screen.value=screenValue;          
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
            if(screen.value=="666"){
                document.getElementById("calculator").className="broken";
                document.getElementById("calculator").className="calcHell";
                // document.getElementsByClassName("td").className="disappear";
                // document.querySelectorAll("td").className="disappear";
                document.getElementById("body").className="hell";
            }
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

        if (screenValue == "666"){
            document.getElementById("calculator").className="broken";
            document.getElementById("body").className="hell";
            document.getElementById("calculator").className="calcHell";
            // document.getElementsByTagName("td").className="disappear";
            // document.querySelectorAll("td").className="disappear";






        }
            
    });
}