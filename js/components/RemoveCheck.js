export const remove = (el,$app) => {
    el.addEventListener('click', e => {
        e.stopImmediatePropagation()
        const taskContainer = el.closest('.container-task')
        if (taskContainer) {
            $app.removeChild(taskContainer)
        }
    })
}

export const ready = (el) => {
    el.addEventListener('click', e => {
        e.stopImmediatePropagation()
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.toggle("ready")
        }
    })
}
