// Select elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener for form submission
taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const taskText = taskInput.value.trim(); // Get input value
    if (taskText === '') return; // Do nothing for empty input

    // Create a new task element
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = ''; // Clear input
});
