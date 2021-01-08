

document.getElementById("hemberg").addEventListener("click",function(){
   
    if(document.querySelector(".menu").style.visibility == "hidden")
    {
        document.querySelector(".menu").style.visibility ="visible";
        document.querySelector(".menu").style.opacity = "90%";

    }

    else
    {
        document.querySelector(".menu").style.visibility = "hidden";
    
    }

   
});

                    
const currentLocation = location.href;
const menuItems = document.querySelectorAll("a");
const menuLength = menuItems.length;

for (let i = 0; i < menuLength ; i++){

    if(menuItems[i].href ===currentLocation)
    {
        menuItems[i].className ="active";
      
    }
}
