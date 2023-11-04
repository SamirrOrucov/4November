const button=document.querySelectorAll(".accordion")
const list=document.querySelectorAll(".panel")

// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click",function(){
//         list[i].classList.toggle("active")
//     })    
// }
button.forEach((element,i) => {
    element.addEventListener("click",function(){
        list[i].classList.toggle("active")
    })   
});