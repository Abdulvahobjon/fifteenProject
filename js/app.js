let btn  = document.querySelector('button')
let text  = document.querySelector('h1')
let input  = document.querySelector('input')

let textChange = 'salom11212'

btn.addEventListener('click' , function(){ 
    textChange = input.value
    localStorage.setItem('text' , textChange)
    text.textContent = localStorage.getItem('text')
    input.value = ''
})

text.textContent = localStorage.getItem('text')


// text.innerText = localStorage.getItem('text')
// 