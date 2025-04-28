const span = document.querySelector('.col')
const button = document.querySelector('#btn')
const container = document.querySelector('.container')

button.addEventListener('click', function () {
    console.log('btn clicked');
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    console.log(r,g,b);
    container.style.backgroundColor = `rgb(${r}, ${g},${b})`;
    span.textContent = `rgb(${r}, ${g},${b})`;
    
})




