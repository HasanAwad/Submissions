const link = document.querySelectorAll("div");

    for(let i = 0;i<link.length;i++){

        link[i].addEventListener("click", e => {

            //alert(e.target.className)
            if(e.target.className == "color green"){
     


                document.querySelector("p").style.color = "green";
            }else if(e.target.className == "color red"){
            
            
                document.querySelector("p").style.color = "red";
            }
            else if(e.target.className == "color blue" ){


                document.querySelector("p").style.color = "blue";
            }
        });
    }
