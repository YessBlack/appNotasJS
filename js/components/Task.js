export const Task = (task) => {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('container-task')
    taskContainer.classList.add(`bg-${aleatorio()}`)

    // Use checkbox instead of radio for better semantics in a task list
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.classList.add('check')

    const p = document.createElement('p')
    p.classList.add('text-task')
    p.textContent = task // Use textContent to prevent XSS

    const button = document.createElement('button')
    button.classList.add('remove')
    button.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>'

    taskContainer.appendChild(input)
    taskContainer.appendChild(p)
    taskContainer.appendChild(button)

    return taskContainer
}

const aleatorio = () => Math.floor((Math.random() * (4 - 1 + 1)) + 1)
