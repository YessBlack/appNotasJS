import { Task } from "./Task.js"
import { ready,remove } from "./RemoveCheck.js"
import { inputEmpty } from "./inputEmpty.js"

export const $form = document.createElement('form')
$form.classList.add('form')
$form.innerHTML = `
                        <input type="text" placeholder="Añadir Tarea" class="input-task">
                        <button type="submit" class="btn-add-task" id='btn-add-task'><ion-icon name="add-circle-outline"></ion-icon></button>
                    `  

export const taskAdd = (btnAdd,$app) => {
    const $header = document.querySelector('.header')
    btnAdd.addEventListener('click', e => {
        e.preventDefault()
        const taskInput = document.querySelector('.input-task')
        const task = taskInput.value
        if(task === '' || task === ' '){
            inputEmpty($app,$header)
        }else {
            const newTask = Task(task)
            $app.appendChild(newTask)

            const checkBtn = newTask.querySelector('.check')
            const removeBtn = newTask.querySelector('.remove')

            ready(checkBtn)
            remove(removeBtn,$app)

            taskInput.value = ''
        }
    })   
}