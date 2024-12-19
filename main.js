//select elements 
const container=document.querySelector('.sign-page')
const Registerbtn=document.getElementById('register')
const loginbtn=document.querySelector('#login')


Registerbtn.addEventListener('click' , () => {
    container.classList.add('active');
    console.log('yes clicked');
})

loginbtn.addEventListener('click' , () => {
    container.classList.remove('active');
    console.log('yes clicked');
})