const arr=["seher tez dur","axsam tez yat"]

// localStorage.setItem("todo",JSON.stringify(arr))
// console.log(localStorage.getItem("todo"));
function setLocalItem(key,value) {
    localStorage.setItem(key,JSON.stringify(value))    
}
function getLocalItem(key) {
    return JSON.parse(localStorage.getItem(key))
    
}
setLocalItem("toom",arr)
console.log(getLocalItem("toom"));