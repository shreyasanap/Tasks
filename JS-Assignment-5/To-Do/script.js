document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.todo-button');
    const inputField = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');

    addButton.addEventListener('click', function () {
        const taskName = inputField.value.trim();
        if (taskName === '') return; // Don't add empty tasks
        addToDoItem(taskName);
        inputField.value = ''; // Clear the input field after adding task
    });

    function addToDoItem(taskName) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        
        const taskText = document.createElement('span');
        taskText.textContent = taskName;

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.textContent = 'Complete';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('trash-btn');
        deleteButton.textContent = 'Delete';

        todoItem.appendChild(taskText);
        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        completeButton.addEventListener('click', function () {
            taskText.classList.toggle('strike');
        });

        deleteButton.addEventListener('click', function () {
            todoItem.remove();
        });
    }
});
