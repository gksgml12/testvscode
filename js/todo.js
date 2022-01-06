const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY="todos";
let toDos=[];


function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
    // console.log(JSON.parse(localStorage.getItem("todos")));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id!== parseInt(li.id));
    li.remove();
    saveToDos()
}

function paintToDo(newTodoObj) {
    const li=document.createElement("li");
    li.id = newTodoObj.id
    const span = document.createElement("span");
    span.innerText=newTodoObj.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

// function sayHello(item){
//     console.log("hello",item)
// }

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}