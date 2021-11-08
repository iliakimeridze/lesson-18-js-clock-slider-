// 1)clock
function autoTimeUpdate(){
    let dateTime = new Date ();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am_or_pm = document.getElementById('am_or_pm');
    if(hours >= 12){
        am_or_pm.innerHTML = "PM"
    } else{
        am_or_pm.innerHTML = "AM"
    }
    if(hours > 12){
        hours = hours - 12;
    }
    document.getElementById(`hours`).innerHTML = hours;
    document.getElementById(`minutes`).innerHTML = minutes;
    document.getElementById(`seconds`).innerHTML = seconds;
}
setInterval (autoTimeUpdate, 1000);       

// SLIDER
const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
  }

  renderSlider();
}

function prevSlide() {
  if(activeIndex === 0){
    activeIndex = slidesLength - 1;
  } else {
    activeIndex = activeIndex - 1;
  }

  renderSlider();
}

nextButton.addEventListener('click', (e) => {
  nextSlide();
});
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  if(e.code === 'ArrowRight'){
    nextSlide();
  }
  if(e.code === 'ArrowLeft'){
    prevSlide();
  }
});

// let intervalId = null;
// function startAutoSliding() {
// if(!intervalId){
//     intervalId = setInterval(() => {
//     nextSlide();
//     }, 1500);
// }
// startAutoSliding();
// }
// const mouseMove = document.querySelector(".slide-area");
// function stopAutoSliding (){
//     if (startAutoSliding) {
//         clearInterval(intervalId);
//         intervalId = null;
//     }
// }
// mouseMove.addEventListener('mouseleave', startAutoSliding);
// mouseMove.addEventListener('mouseenter', stopAutoSliding);








// let enterEventCount = 0;
// let leaveEventCount = 0;
// const slideItem = document.getElementsByClassName(`slide-item`);
// console.log(slideItem);


// slideItem.addEventListener('mouseenter', (e) => {
//     enterEventCount++;
//   });


