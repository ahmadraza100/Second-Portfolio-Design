

document.getElementById("hemberg").addEventListener("click",function(){
   
    if(document.querySelector(".menu").style.visibility == "hidden")
    {
        document.querySelector(".menu").style.visibility ="visible";
        document.querySelector(".menu").style.opacity = "90%";

    }

    else
    {
        document.querySelector(".menu").style.visibility = "hidden"
    
    }

});