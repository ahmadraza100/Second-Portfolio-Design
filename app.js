

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


 var totalproject  = 1; 
 
 document.addEventListener("click",project1);
 var project1 = setInterval(counter1 , 15);

  function counter1(){
      totalProject++;
      document.querySelector("#total").innerHTML = totalProject;
      totalProject;
  }