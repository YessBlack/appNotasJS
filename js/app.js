import $header from './components/Header.js'
import $form from './components/FormAddTask.js'

const $app = document.getElementById('app')

window.addEventListener('DOMContentLoaded', e => {
    $app.appendChild($header)
    $app.appendChild($form)

    const btnAdd = document.getElementById('btn-add-task')
    
    btnAdd.addEventListener('click', e => {
        e.preventDefault()
        console.log(e)
    })
})