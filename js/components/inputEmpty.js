export const inputEmpty = ($app,$header) => {
    const alertInputEmpty = document.createElement('div')
    alertInputEmpty.innerHTML = `
                                <div class="modal-input-empty">
                                    <p class="text-modal">El input esta vacio</p>
                                    <ion-icon name="close-outline" id="close"></ion-icon>
                                </div>
                            `
    $app.insertBefore(alertInputEmpty,$header)
    setInterval(() => {
        $app.removeChild(alertInputEmpty)
    },3000)      
}