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
                document.getElementById("body").className="hell";
                document.getElementById("calculator").className="calcHell";
                // document.getElementsByTagName("td").className="disappear";
                // document.querySelectorAll("td").className="disappear";
                let tds= document.getElementsByClassName("td")
                console.log(tds);
                for(i=0; i<tds.length; i++){
                    tds[i].className="disappear"
                }
                // console.log(tds);
                let leftouts=document.getElementsByClassName("leftout")
                console.log(leftouts);
                for(i=0; i<leftouts.length; i++){
                    leftouts[i].className="disappear"
                }
                // dis=document.getElementsByClassName("disappear")
                // console.log(dis);
    
                let leftouts1=document.getElementsByClassName("leftout1")
                console.log(leftouts1);
                for(i=0; i<leftouts1.length; i++){
                    leftouts1[i].className="disappear"
                }
                let leftouts2=document.getElementsByClassName("leftout2")
                console.log(leftouts2);
                for(i=0; i<leftouts2.length; i++){
                    leftouts2[i].className="disappear"
                }
                let leftouts3=document.getElementsByClassName("leftout3")
                console.log(leftouts3);
                for(i=0; i<leftouts3.length; i++){
                    leftouts3[i].className="disappear"
                }
                document.getElementById("marquee").className="disappear"
                const music=new Audio("hell.mp3");
                music.play();
                music.loop=true;
                music.playbackRate=1.5; 
               
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
            let tds= document.getElementsByClassName("td")
            console.log(tds);
            for(i=0; i<tds.length; i++){
                tds[i].className="disappear"
            }
            // console.log(tds);
            let leftouts=document.getElementsByClassName("leftout")
            console.log(leftouts);
            for(i=0; i<leftouts.length; i++){
                leftouts[i].className="disappear"
            }
            // dis=document.getElementsByClassName("disappear")
            // console.log(dis);

            let leftouts1=document.getElementsByClassName("leftout1")
            console.log(leftouts1);
            for(i=0; i<leftouts1.length; i++){
                leftouts1[i].className="disappear"
            }
            let leftouts2=document.getElementsByClassName("leftout2")
            console.log(leftouts2);
            for(i=0; i<leftouts2.length; i++){
                leftouts2[i].className="disappear"
            }
            let leftouts3=document.getElementsByClassName("leftout3")
            console.log(leftouts3);
            for(i=0; i<leftouts3.length; i++){
                leftouts3[i].className="disappear"
            }
            document.getElementById("marquee").className="disappear"
            const music=new Audio("hell.mp3");
            music.play();
            music.loop=true;
            music.playbackRate=1.5; 

// tds.className("disappear")





        }
            
    });
}