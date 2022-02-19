let input = document.getElementById('color')
let text_btn = document.getElementById('text')
let bg_btn = document.getElementById('bg')
let p = document.getElementById('p')
let main = document.getElementsByClassName('main')
let font_number = document.getElementById('number')

font_number.addEventListener('change', ()=>{
    console.log(font_number.value);
    p.style.fontSize = `${font_number.value}px`
})

bg_btn.addEventListener('click', ()=>{
    let color = input.value
    main[0].style.backgroundColor = color
})

text_btn.addEventListener('click', ()=>{
    let color = input.value
    p.style.color = color
})

