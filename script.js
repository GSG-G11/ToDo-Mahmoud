const addButton = document.getElementById("add-todo");
const contentList = document.getElementById("input-text");
const addedToDo = document.querySelector(".result");
const counter = document.querySelector(".list-number");

let addedList = JSON.parse(localStorage.getItem("tasks")) || [];
counter.innerText = addedList.length;

function createList() {
    if (contentList.value === "") {
        alert("No TODO found");
    } else {
        const item = { text: contentList.value, id: addedList.length, done: false };
        addedList.unshift(item);
        localStorage.setItem("tasks", JSON.stringify(addedList));
        counter.innerText = addedList.length;
        while (addedToDo.firstChild) {
            addedToDo.removeChild(addedToDo.lastChild);
        }
        addedList.forEach((i) => {
            addElement(i);
        });
    }
}

function showTasks() {
    const tasks = addedList;
    while (addedToDo.firstChild) {
        addedToDo.removeChild(addedToDo.lastChild);
    }
    counter.innerText = addedList.length;
    tasks.forEach((i) => {
        addElement(i);
    });
}
showTasks();



function addElement(i) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-list");
    addedToDo.appendChild(todoDiv);

    const listContent = document.createElement("p");
    listContent.classList.add("added-todo");
    listContent.innerText = i.text;
    todoDiv.appendChild(listContent);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("added-btn");
    todoDiv.appendChild(btnDiv);

    const editBtn = document.createElement("button");
    editBtn.classList.add("listed-icon");
    editBtn.classList.add("material-icons");
    editBtn.classList.add("edit-icon");
    editBtn.innerText = "edit";
    btnDiv.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("listed-icon");
    removeBtn.classList.add("material-icons");
    removeBtn.classList.add("delete-icon");
    removeBtn.innerText = "remove_circle";
    btnDiv.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => deleteItem(i.id));

    const checkBtn = document.createElement("button");
    if (i.done) { checkBtn.classList.add("checked"); }
    checkBtn.classList.add("listed-icon");
    checkBtn.classList.add("check");
    checkBtn.classList.add("material-icons");
    checkBtn.classList.add("check-icon");
    checkBtn.innerText = "check_circle";
    btnDiv.appendChild(checkBtn);
    checkBtn.addEventListener("click", () => {
        checkBtn.classList.add("checked");
        addedList = addedList.map(item => { if (item.id === i.id) { item.done = true } return item })
        localStorage.setItem("tasks", JSON.stringify(addedList))

    });
}

addButton.addEventListener("click", createList);

function deleteItem(id) {
    addedList = addedList.filter(i => i.id != id);
    localStorage.setItem("tasks", JSON.stringify(addedList))
    counter.innerText = addedList.length;
    showTasks();
}