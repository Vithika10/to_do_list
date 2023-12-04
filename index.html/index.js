// Get references to the input field and buttons
const userInput = document.getElementById('userinput');
const addButton = document.getElementById('add');
const removeALLButton = document.getElementById('removeALL');
const todoList = document.getElementById('todolist');

// Add event listener for adding a new todo item
addButton.addEventListener('click', function () {
    const inputValue = userInput.value.trim();
    if (inputValue !== '') {
        createTodoItem(inputValue);
        userInput.value = ''; // Clear the input field
    }
});

// Add event listener for pressing Enter key to add a new todo item
userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const inputValue = userInput.value.trim();
        if (inputValue !== '') {
            createTodoItem(inputValue);
            userInput.value = ''; // Clear the input field
        }
    }
});

// Add event listener for removing all todo items
removeALLButton.addEventListener('click', function () {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});

// Function to create a new todo item
function createTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span>${text}</span>
        <i class="bi bi-trash" onclick="removeTodoItem(this)"></i>
    `;
    todoList.appendChild(todoItem);
}

// Function to remove a todo item
function removeTodoItem(item) {
    todoList.removeChild(item.parentElement);
}
