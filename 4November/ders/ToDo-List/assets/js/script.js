const addList=document.getElementById("new-task")
const btn=document.querySelector(".addBtn")
const ul=document.getElementById("incomplete-tasks")
btn.addEventListener("click",function () {
    const list=document.createElement("li")
    list.textContent=addList.value
    ul.append(list)
    addList.value=""
})