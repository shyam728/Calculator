
let string="";
let buttons = document.querySelectorAll('.button')
let screen=document.getElementById('inputBox')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',function(e){
      if(e.target.value=='='){
        string=eval(string);
        screen.innerHTML=string
      }
      else if(e.target.value=="AC"){
        string=" "
        screen.innerHTML=string
      }
     else{
        console.log(e.target);
        string+=e.target.value
       screen.innerHTML=string
     }




    
     
    })
})
