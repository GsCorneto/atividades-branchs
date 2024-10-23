const taskInput = document.getElementById("atv-input");
const addTaskButton = document.getElementById("atv-add")
const searchInput = document.getElementById("atv-busca");
const taskList = document.getElementById('atv-lista');

let tasks = []

const renderTasks = (filter = '') => {
    taskList.innerHTML = '';
    tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
          .forEach((task, index) =>{
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : " ";

            li.innerHTML = 
            `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button class ="delete" onclick="deleteTask(${index})">Excluir</button>
            `;

            taskList.appendChild(li);
          })
};

const addTask = () => {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText){
        tasks.push({ text: taskText, completed: false});
        taskInput.value = '';
        renderTasks();
    }
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

addTaskButton.addEventListener('click', addTask)

const searchAtv = () => {
    const filter = searchInput.ariaValueMax.trim();
    renderTasks(filter)
}
