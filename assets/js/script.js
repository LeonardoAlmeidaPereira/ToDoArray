let tasks = []

function addTask() {
    const task = document.getElementById('task').value
    const objTask = {
        task: task,
        done: false
    }
    tasks.push(objTask)
    document.getElementById('task').value = ''
    renderTasks()
}

function renderTasks() {
    const list = document.getElementById('task-list')
    list.innerHTML = ''
    tasks.forEach((task, i) => {
        const li = document.createElement('li')
        li.classList.add('task-item')
        li.innerHTML = '<input type="checkbox" change="isDone(event)">' + task['task']
        li.addEventListener('click', () => removeTask(i))
        list.appendChild(li)
    })
}

function clearList(){
    tasks = []
    renderTasks()
}

function removeTask(li){
    tasks.splice(li, 1)
    renderTasks()
}

function orderList(){
    tasks.sort((a, b) => {
        if(a.task > b.task){
            return 1
        }else if(a.task < b.task){
            return -1
        }
        return 0
    })
    renderTasks()
}

function filterList(){
    const filteredTasks = tasks.filter(task => !task.done)
    tasks = filteredTasks
    renderTasks()
}

function isDone(event){
    const index = event.target.parentElement
    tasks[index].done = !tasks[index].done
}

document.getElementById('addTask').addEventListener('click', addTask)
document.getElementById('clearList').addEventListener('click', clearList)
document.getElementById('orderList').addEventListener('click', orderList)
document.getElementById('filterList').addEventListener('click', filterList)