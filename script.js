
let title = document.getElementsByTagName('h1')
let inp1 = document.getElementById('one')
let inp2 = document.getElementById('two')
let btn = document.getElementById('switch')

console.log(inp1);
console.log(inp2);
console.log(btn);
console.log(title[0]);

document.getElementById('switch').onclick = () => {
    [
        document.getElementById('one').value,
        document.getElementById('two').value
    ] = [
        document.getElementById('two').value,
        document.getElementById('one').value
    ]
}
