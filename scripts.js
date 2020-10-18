const btnControlFoot = document.querySelector('.arrows');
const footWindow = document.querySelector('.footer__head');


function handler(element,event,method) {
element.addEventListener(event,method);
}

handler(btnControlFoot,'click',function () {
    btnControlFoot.style.top = 'footWindow.style.top.value';
    $(".footer__head").slideToggle("slow")
});