import $header from './components/Header.js'

const $app = document.getElementById('app')

window.addEventListener('DOMContentLoaded', e => {
    $app.appendChild($header)
})