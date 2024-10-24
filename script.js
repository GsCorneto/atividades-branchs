const toggleTask = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
