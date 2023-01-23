let sheepString=document.getElementById("h1-sheep");
let count=0;
let sheepButton=document.getElementById("sheep-button");


function btn(){

    count+=1;
   sheepString.innerText=count+"count"

if(count%2==0)
 sheepButton.style.backgroundColor="#D7E9B9";
 else
 sheepButton.style.backgroundColor="#AACB73";

  
}
