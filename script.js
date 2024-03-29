const element= document.querySelector('aside');
const menu =document.querySelector('#menu_bar');
const  closeBtn =document.querySelector('#close_btn');
const toggler = document.querySelector('.theme_toggler');
menu.addEventListener('click',()=>{
    element.style.display = "block"
})

closeBtn.addEventListener('click',()=>{
    element.style.display="none"
})

toggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark_theme_variables')
    toggler.querySelector('span:nth-child(1)').classList.toggle('active')
    toggler.querySelector('span:nth-child(2)').classList.toggle('active')
})