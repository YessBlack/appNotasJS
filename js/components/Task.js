export const Task = (task) => {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('container-task')
    taskContainer.classList.add(`bg-${aleatorio()}`)
    taskContainer.innerHTML = `
                                <input type="radio" class="check" name="task">
                                <p class="text-task">${task}</p>
                                <ion-icon name="close-circle-outline" class="remove"></ion-icon>
                            `
    return taskContainer
            
}

const aleatorio = () => Math.floor((Math.random() * (4 - 1 + 1)) + 1)