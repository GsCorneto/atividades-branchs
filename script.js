const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
}
