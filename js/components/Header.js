const $header = document.createElement('header')
$header.classList.add('header')

//const nombre = prompt('Cual es tu Nombre: ')
let nombre = 'Angelica Garcia'

const diaSemana = (dia) => {
    const arr = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    return arr[dia]
}
const nombreMes = (mes) => {
    const arr = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    return arr[mes]
}
$header.innerHTML = `
                        <h1 class="title">Mis Notas</h1>
                        <p class='date'>${diaSemana(new Date().getDay())}, ${new Date().getDate()} de ${nombreMes(new Date().getMonth())}</p>
                        <p class='name'>Hola, ${nombre}</p>
                    `
export default $header