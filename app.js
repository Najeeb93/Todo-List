

var list = document.getElementById("list");

function addTodo(){

    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var deltBtn = document.createElement("button")
    var delText = document.createTextNode("Delt")
    deltBtn.setAttribute("class","btn")
    deltBtn.setAttribute("onclick","deltItem()")
    deltBtn.appendChild(delText)

    li.appendChild(deltBtn)
    list.appendChild(li)
    
    todo_item.value = "";
}