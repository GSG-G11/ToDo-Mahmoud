const addButton = document.getElementById("add-todo")
const contentList = document.getElementById("input-text");
const addedToDo = document.querySelector(".result");
// const addedContent = document.querySelector("added-todo");
// const removeButton = document.querySelector("delete-icon");
// const checkButton = document.querySelector("check-icon");
// const editButton = document.querySelector("check-icon");

const addedList = [];

function createList() {
    if (contentList.value === "") {
        alert("No TODO found");
    } else {
        addedList.unshift(contentList.value);
        localStorage.setItem("tasks", JSON.stringify(addedList))
        while (addedToDo.firstChild) {
            addedToDo.removeChild(addedToDo.lastChild);
        }
        addedList.forEach((i) => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-list");
            addedToDo.appendChild(todoDiv);

            const listContent = document.createElement("p")
            listContent.classList.add("added-todo");
            listContent.innerText = i;
            todoDiv.appendChild(listContent);

            const btnDiv = document.createElement('div');
            btnDiv.classList.add("added-btn");
            todoDiv.appendChild(btnDiv);


            const editBtn = document.createElement('button');
            editBtn.classList.add("listed-icon");
            editBtn.classList.add("material-icons");
            editBtn.classList.add("edit-icon");
            editBtn.innerText = 'edit';
            // editBtn.addEventListener("click", function() {
            //     createTweet({ content: i.content });
            // });
            btnDiv.appendChild(editBtn);
            // todoDiv.appendChild(editBtn);

            const removeBtn = document.createElement('button');
            removeBtn.classList.add("listed-icon");
            removeBtn.classList.add("material-icons");
            removeBtn.classList.add("delete-icon");
            removeBtn.innerText = 'remove_circle';
            // removeBtn.addEventListener("click", function() {
            //     createTweet({ content: i.content });
            // });
            btnDiv.appendChild(removeBtn);

            const checkBtn = document.createElement('button');
            checkBtn.classList.add("listed-icon");
            checkBtn.classList.add("check");
            checkBtn.classList.add("material-icons");
            checkBtn.classList.add("check-icon");
            checkBtn.innerText = 'check_circle';
            // checkBtn.addEventListener("click", function() {
            //     createTweet({ content: i.content });
            // });
            btnDiv.appendChild(checkBtn);
        });
    }
}
addButton.addEventListener("click", createList);