=======
const taskInput = document.getElementById("atv-input");
const addTaskButton = document.getElementById("atv-add")
const searchInput = document.getElementById("atv-busca");
const taskList = document.getElementById('atv-lista');
const themeToggleButton = document.getElementById("troca-tema");
const body = document.body;

let tasks = []

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    body.classList.add(currentTheme)
}

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

const toggleTask = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

const searchAtv = () => {
    const filter = searchInput.ariaValueMax.trim();
    renderTasks(filter)
}

themeToggleButton.addEventListener('click', () =>{
    if (body.classList.contains("dark-theme")){
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme")
    }
})
addTaskButton.addEventListener('click', addTask)
searchInput.addEventListener('input', searchTasks)

