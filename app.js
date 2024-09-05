
let btn = document.getElementById('barBtn');
let nav = document.getElementById('sideBar');
let icon = document.getElementById('icon');
let body = document.querySelector('body');
let header = document.querySelector('.header');
console.log(header);

window.addEventListener('scroll', () => {
  window.scrollY > 0 ? header.classList.add('active') : header.classList.remove('active');
})
btn.addEventListener('click', () => {
  nav.classList.toggle('show');
  if (icon) {
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  }
});
//close sidebar  menu  on click on body

body.addEventListener('click', (e) => {
  if (e.target.id !== 'barBtn' && e.target.id !== 'icon' && nav.classList.contains('show')) {
    nav.classList.remove('show');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
});


//form handling

let form = document.querySelector('form');
let email = document.getElementById('email');
let errorMessage = document.getElementById('error');
console.log(errorMessage);

console.log(email);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === '') {
    errorMessage.innerHTML = 'Please enter valid email address'
  }
  else {
    form.submit();
  }
})
// let sliderWrapper = document.getElementById('slider-wrapper');

// let sliderWrapper1 = document.getElementById('slider-wrapper2');

// console.log(sliderWrapper);


      //Use data attributes to easily control the position of the carousel. 


// document.body.addEventListener('click', (event) => {
//   if (event.target.classList.contains('radio')) {
//     const controlsContainer = event.target.closest('.control-btns');
//     const sliderNumber = controlsContainer.getAttribute('data-slider');
//     const sliderWrapper = document.querySelector(`.slider-wrappered[data-slider="${sliderNumber}"]`);

//     controlsContainer.querySelectorAll('.radio').forEach(item => {
//       item.classList.remove('active');
//     });

//     event.target.classList.add('active');

//     const sliderIndex = event.target.getAttribute('data-index');
//     const sliderValue = 33.3 * sliderIndex;

//     sliderWrapper.style.transform = `translateX(-${sliderValue}%)`;
//   }
// });


// Select all slider wrappers and radio controls




let controlBtns = document.querySelectorAll('.control-btns');
// console.log(controlBtns);

// let controls = document.querySelectorAll('.radio');
let sliderWrapper = document.querySelectorAll('.slider-wrappered');
// function autoSlider(){

controlBtns.forEach((controler) =>{
  let controls = controler.querySelectorAll('.radio');
  controls.forEach((control,i)=>{
    control.addEventListener('click', (event) => {
    controls.forEach((item) => {
      item.classList.remove('active');
    })
    event.target.classList.add('active');
    let controlerBtns = event.target.parentElement;
    
    console.log(controlerBtns);
    
    let sliderContainer = controlerBtns.parentElement;
    console.log(sliderContainer);
    
    let sliderWrapper = sliderContainer.querySelector('.slider-wrappered');
    let sliderItem = sliderWrapper.querySelectorAll('.slider-item');
    sliderValue = i * 100/sliderItem.length ;
    sliderWrapper.style.transform = `translateX(-${sliderValue}%)`;
    })
  })
})









let modal = document.querySelector('.message-container');
let modalBtn = document.querySelector('.down-btn');
let iconBox = document.querySelector('.icon-box1');
let modalIcon = document.getElementById('icon1');
let modalIcon1 = document.getElementById('icon2');
console.log(modalIcon);
console.log(modalIcon1);


// console.log(modalIcon);

let show = 'none';
modalBtn.addEventListener('click', () => {
  // show === 'none' ? show = 'block' : show = 'none';
  if (show === 'none') {
    // modal.style.height = '85vh';
    // modal.style.width = '400px';
    modal.style.transform = 'scale(1)';
    show = 'block';

    // modalIcon.classList.add('fa-angle-down');
    // modalIcon.classList.remove('fa-message');
    // iconBox.style.transform = 'rotate(-60deg)'
    modalIcon.classList.remove('active-message-icon');
    modalIcon1.classList.add('active-arrow-icon');
    modalIcon.style.opacity='0';
    modalIcon1.style.opacity='1'
    modalIcon1.style.transform = 'rotate(0deg)'
  }
  else {
    modal.style.transform = 'scale(0)';
    // modal.style.height = '0vh';
    // modal.style.width = '0px';
    show = 'none';
    modalIcon.classList.add('active-message-icon');
    modalIcon1.classList.remove('active-arrow-icon');
    modalIcon.style.opacity='1';
    modalIcon1.style.opacity='0'
    modalIcon1.style.transform = 'rotate(-90deg)';
  }
  console.log(show);

})






// }
// let autoSliderValue = 0;
// setInterval(()=>{
//     controls.forEach((item,i)=>{
//       item.classList.remove('active');
//     })
//     controls[autoSliderValue].classList.add('active');
//     sliderValue = 33.33 * autoSliderValue;
//     sliderWrapper.style.transform = `translateX(-${sliderValue}%)`;
//     sliderWrapper1.style.transform = `translateX(-${sliderValue}%)`;
//     autoSliderValue++;
//     autoSliderValue > 2? autoSliderValue = 0:'';
// },2000);


//find the factorial
// let user = prompt('Enter your number');
// if(user == ""){
//   confirm('enter your number');

// let check = prompt('enter 1 number');
// let start = 1;

// for(let i = 1;i<=user;i++){
// start =  start * i

// }
// console.log(start);

// }
// else{
//   prompt('you must be need enter number')
// }


// let user = prompt('Enter your number');
// if (user == '') {
//   if(confirm('If you want enter number ,so click OK otherwise cancle')){
//      user = prompt('Enter your number');
//   }
// }
// else {
//   let start = 1;
//   for (let i = 1; i <= user; i++) {
//     start = start * i

//   }
//   console.log(start);
// }


//make a program for check eligible for driving license or not

// let userAge = +prompt('Enter your age to check you are eligible for driving license');

// if(userAge >=18){
// alert('you are eligible')
// }
// else{
// alert('you are not eligible')
// }
// let result = userAge>=18 ? 'you are eligible':'you are not eligible';
// console.log(result);

