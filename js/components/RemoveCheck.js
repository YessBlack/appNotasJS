export const remove = (el) => {
    el.addEventListener('click', (e) => {
        const target = e.currentTarget
        const taskContainer = target.closest('.container-task')
        if (taskContainer) {
            taskContainer.remove()
        }
    })
}

export const ready = (el) => {
    el.addEventListener('click', (e) => {
        const target = e.currentTarget
        if (target.nextElementSibling) {
            target.nextElementSibling.classList.toggle("ready")
        }
    })
}
