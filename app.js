

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



var project1 = setInterval(counter1 , 140);
var project2 = setInterval(counter2 , 140);
var project3 = setInterval(counter3 , 140);
 var totalProject1  = 1; 
 var totalProject2  = 1; 
 var totalProject3 = 1; 

  function counter1(){

      totalProject1++;
      document.querySelector("#total").innerText = totalProject1;
      

      if(totalProject1==30){
        clearInterval(project1);
      }
  
  }
   
  function counter2(){

    totalProject2++;
    document.querySelector("#total2").innerText = totalProject2;
    

    if(totalProject2==20){
      clearInterval(project2);
    }

}


function counter3(){

    totalProject3++;
    document.querySelector("#total3").innerText = totalProject3;
    

    if(totalProject3==65){
      clearInterval(project3);
    }

}

