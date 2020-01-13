const link = document.querySelectorAll("a");

    for(let i = 0;i<link.length;i++){

        link[i].addEventListener("click", e => {
            if(e.target.id == "show"){
     

                document.getElementById("texte").style.display = "block";
            }else if(e.target.id == "hide"){
            
            
                document.getElementById("texte").style.display = "none";
            }
        });
    }


