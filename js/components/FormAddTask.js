import { Task } from "./Task.js"
import { ready,remove } from "./RemoveCheck.js"

export const $form = document.createElement('form')
$form.classList.add('form')
$form.innerHTML = `
                        <input type="text" placeholder="Añadir Tarea" class="input-task">
                        <button type="submit" class="btn-add-task" id='btn-add-task'><ion-icon name="add-circle-outline"></ion-icon></button>
                    `  

export const taskAdd = (btnAdd,$app) => {
    btnAdd.addEventListener('click', e => {
        e.preventDefault()
        const task = document.querySelector('.input-task').value
        $app.appendChild(Task(task))
        const taskList = document.querySelectorAll('.check')
        const btnRemoveList = document.querySelectorAll('.remove')
        ready(taskList)
        remove(btnRemoveList,$app)
    })   
}