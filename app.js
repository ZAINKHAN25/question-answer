var signone = document.querySelector('#signone')
var signtwo = document.querySelector('#signtwo')
var signthree = document.querySelector('#signthree')
var answerone = document.querySelector('#answerone')
var answertwo = document.querySelector('#answertwo')
var answerthree = document.querySelector('#answerthree')
var answer = document.querySelectorAll('.answer')
var none = document.querySelector('.none')

signone.addEventListener('click', ()=>{
    answerthree.classList.add('none')
    answertwo.classList.add('none')
    answerone.classList.toggle('none')
    signone.setAttribute('class','fa-solid plussign fa-minus')
    signtwo.setAttribute('class','fa-solid plussign fa-plus')
    signthree.setAttribute('class','fa-solid plussign fa-plus')
})
signtwo.addEventListener('click', ()=>{
    answerthree.classList.add('none')
    answerone.classList.add('none')
    answertwo.classList.toggle('none')
    signtwo.setAttribute('class','fa-solid plussign fa-minus')
    signthree.setAttribute('class','fa-solid plussign fa-plus')
    signone.setAttribute('class','fa-solid plussign fa-plus')
})
signthree.addEventListener('click', ()=>{
    answerone.classList.add('none')
    answertwo.classList.add('none')
    answerthree.classList.toggle('none')
    signthree.setAttribute('class','fa-solid plussign fa-minus')
    signtwo.setAttribute('class','fa-solid plussign fa-plus')
    signone.setAttribute('class','fa-solid plussign fa-plus')
})