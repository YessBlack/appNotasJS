export const remove = (btnRemoveList,$app) => {
    btnRemoveList.forEach(el => {
        el.addEventListener('click', e => {
            e.stopImmediatePropagation()
            $app.removeChild(e.path[4])
        })
    })
}

export const ready = (taskList) => {
    taskList.forEach(el => {
        el.addEventListener('click',e => {  
            e.stopImmediatePropagation()            
            e.target.nextElementSibling.classList.toggle("ready")
        })
    })
}