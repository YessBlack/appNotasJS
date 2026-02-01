export const remove = (el) => {
    el.addEventListener('click', () => {
        const taskContainer = el.closest('.container-task')
        if (taskContainer) {
            taskContainer.remove()
        }
    })
}

export const ready = (el) => {
    el.addEventListener('click', () => {
        if (el.nextElementSibling) {
            el.nextElementSibling.classList.toggle("ready")
        }
    })
}
