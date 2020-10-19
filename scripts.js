const btnControlFoot = document.querySelector('.arrows');
const footWindow = document.querySelector('.footer__head');
const popup = document.querySelector('.popup');
const outLayer = document.querySelector('.out-layer');
const openModal = document.querySelector('.controls__item');



function handler(element,event,method) {
element.addEventListener(event,method);
}

handler(btnControlFoot,'click',function () {
    $(".footer__head").slideToggle("slow");
    outLayer.classList.remove('hidden');
});

handler(openModal,'click',function () {
    outLayer.classList.remove('hidden');
    popup.classList.remove('hidden');
    popup.classList.add('open');
});

handler(outLayer,'click',function () {
    outLayer.classList.add('hidden');
    popup.classList.add('hidden');
    popup.classList.remove('open');
});
