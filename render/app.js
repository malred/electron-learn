document.querySelector('#btn')
    .addEventListener('click', function () {
        window.myapi.handleSend()
    })
document.querySelector('#btn1')
    .addEventListener('click', function () {
        window.myapi.copy()
    })
document.querySelector('#btn2')
    .addEventListener('click', function () {
        window.myapi.read()
    })
document.querySelector('#btn3')
    .addEventListener('click', async () => {
        let result = await window.myapi.capture()
        document.getElementById('img1').src = result
    })
document.querySelector('#btn4')
    .addEventListener('click',() => {
        window.myapi.testNativeImage()
    })