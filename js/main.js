let input = document.getElementById('color')
let submit = document.getElementById('submit')
let p = document.getElementById('p')
let main = document.getElementsByClassName('main')
let font_number = document.getElementById('number')

font_number.addEventListener('change', () => {
    console.log(font_number.value);
    p.style.fontSize = `${font_number.value}px`
})

// bg_btn.addEventListener('click', ()=>{
//     let color = input.value
//     main[0].style.backgroundColor = color
// })

var timer;

let old_p = p.style.color

submit.addEventListener('click', (e) => {
    if (e.detail === 1) {
        timer = setTimeout(() => {
            let color = input.value
            p.style.color = color
        }, 200)
    }
})

submit.addEventListener('dblclick', (e) => {
    clearTimeout(timer)
    let color = input.value
    main[0].style.backgroundColor = color
})