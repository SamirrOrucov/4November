const left=document.querySelector(".fa-left-long")
const right=document.querySelector(".fa-right-long")
const imageContainer=document.querySelector(".image")

right.addEventListener("click",function(){
   let active =document.querySelector(".active");
   active.classList.remove("active")
   if (active.nextElementSibling!==null) {
       active.nextElementSibling.classList.add("active");
    
   }
   else{
    imageContainer.firstElementChild.classList.add("active");
   }
})
left.addEventListener("click",function(){
    let active =document.querySelector(".active");
    active.classList.remove("active")
    if (active.previousElementSibling!==null) {
        active.previousElementSibling.classList.add("active");
     
    }
    else{
        imageContainer.lastElementChild.classList.add("active");
    }
 })