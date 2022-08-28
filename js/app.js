import $header from './components/Header.js'
import { $form,taskAdd } from './components/FormAddTask.js'


const $app = document.getElementById('app')

window.addEventListener('DOMContentLoaded', e => {
    $app.appendChild($header)
    $app.appendChild($form)

    const btnAdd = document.getElementById('btn-add-task')
    taskAdd(btnAdd,$app)
})

