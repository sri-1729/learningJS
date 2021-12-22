//selectors
const activity = document.querySelector('.todo-input')
const addButton = document.querySelector('.todo-button')
const list = document.querySelector('.todo-list')

//event Listners
addButton.addEventListener('click', addActivity)
list.addEventListener('click', deletecheck);


//functions
function addActivity(event){
    event.preventDefault(); //prevent form from submitting
    //create the activity 
    const toDodiv = document.createElement("div");
    toDodiv.classList.add('todo');
    //create li
    const todoLi = document.createElement("li");
    todoLi.innerText = activity.value; //here we will grab the text from form
    todoLi.classList.add("todo-item");
    toDodiv.appendChild(todoLi);
    //check mark (basically completed) button
    const checkButton = document.createElement("button");
    checkButton.innerText = "Completed"
    checkButton.classList.add('complete-button');
    //appending button to div
    toDodiv.appendChild(checkButton);
     //Delete button
     const deleteButton = document.createElement("button");
     deleteButton.innerText = "Delete";
     deleteButton.classList.add('delete-button');
     //appending button to div
     toDodiv.appendChild(deleteButton);
    //appent to list
     list.appendChild(toDodiv)
    //clear input value
    activity.value = ''
}

function deletecheck(event){
    let areaClicked = event.target;
    if(areaClicked.classList[0] === 'delete-button'){
        areaClicked.parentNode.remove();
    }
}