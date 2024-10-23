const taskInput = document.getElementById("atv-input");
const addTaskButton = document.getElementById("atv-add")
const taskList = document.getElementById("atv-lista");

let tasks = []

const addTask = () => {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText){
        tasks.push({ text: taskText, completed: false});
        taskInput.value = '';
        renderTasks();
    }
};

addTaskButton.addEventListener('click', addTask)