const btnControlFoot = document.querySelector('.footer__button');
const footWindow = document.querySelector('.footer__head');
const popup = document.querySelector('.popup');
const outLayer = document.querySelector('.out-layer');
const openModal = document.querySelector('.controls__item');
const modalClose = document.querySelector('.popup__cross');
const pagination = document.querySelectorAll('.pagination_round');

function closeModal(){
    outLayer.classList.add('hidden');
    popup.classList.add('hidden');
    popup.classList.remove('open');
}

function handler(element,event,method) {
element.addEventListener(event,method);
}

handler(btnControlFoot,'click',function () {
  footWindow.classList.toggle('close');
  btnControlFoot.classList.toggle('arrow_up');
});

handler(openModal,'click',function () {
    outLayer.classList.remove('hidden');
    popup.classList.remove('hidden');
    popup.classList.add('open');
});

handler(outLayer,'click',closeModal);

handler(modalClose,'click',closeModal);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
});
