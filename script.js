let title = document.getElementsByTagName('h1')
let inp1 = document.getElementById('one')
let inp2 = document.getElementById('two')
let btn = document.getElementById('switch')

let values;

function change () {
    values = inp1.value
    inp1.value = inp2.value
    inp2.value = values
}

btn.addEventListener('click', () => {
    change()
})