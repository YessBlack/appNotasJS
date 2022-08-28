export const $form = document.createElement('form')
$form.classList.add('form')
$form.innerHTML = `
                        <input type="text" placeholder="Añadir Tarea" class="input-task">
                        <button type="submit" class="btn-add-task" id='btn-add-task'><ion-icon name="add-circle-outline"></ion-icon></button>
                    `  
