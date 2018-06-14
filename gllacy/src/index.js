import './scss/style.scss';

const body = document.getElementsByTagName('body')[0];
const sliderCollection = document.getElementsByClassName('slider')[0].children;
const clickField = document.querySelectorAll('.slider-btns')[0];
const allLabels = clickField.querySelectorAll('label');
const inputs = clickField.querySelectorAll('input');
const loginBtn = document.querySelector('.login-form-btn');
const loginForm = document.querySelector('.login-form');

/*const openBtn = document.querySelectorAll('.btn');
openBtn.addEventListener('click', () => {

});
*/
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.popup-close');
closeBtn.addEventListener('click', () => {
    overlay.classList.add('visually-hidden');
});

body.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
        overlay.classList.remove('visually-hidden');
    }

    if(e.target.classList.contains('login')) {
        loginForm.classList.toggle('visually-hidden');
    }

    if(e.target.classList.contains('search-btn')) {
        document.querySelector('.search-wrapper').classList.toggle('visually-hidden');
    }
});

clickField.addEventListener('click', (e) => {
    if(e.target.htmlFor) {
        for(let i = 0; i < 3; i++) {
            if(e.target.htmlFor === allLabels[i].htmlFor) {
                sliderCollection[i].classList.remove('visually-hidden');
                if(e.target.htmlFor === 'btn-1') {
                    body.classList.add('slide-1-bg');
                    body.classList.remove('slide-2-bg');
                    body.classList.remove('slide-3-bg');
                } else if(e.target.htmlFor === 'btn-2') {
                    body.classList.add('slide-2-bg');
                    body.classList.remove('slide-3-bg');
                } else if(e.target.htmlFor === 'btn-3') {
                    body.classList.add('slide-3-bg');
                }
                continue;
            }
            sliderCollection[i].classList.add('visually-hidden');
        }
    }
});

let timer = 3;
setInterval(() => {
    timer++;
        if(sliderCollection[timer%3].classList.contains('visually-hidden')) {
            if(timer%3 === 0) {
                body.classList.add('slide-1-bg');
                body.classList.remove('slide-2-bg');
                body.classList.remove('slide-3-bg');
            } else if(timer%3 === 1) {
                body.classList.add('slide-2-bg');
                body.classList.remove('slide-3-bg');
            } else if(timer%3 === 2) {
                body.classList.add('slide-3-bg');
            }
            sliderCollection[(timer+1)%3].classList.add('visually-hidden');
            sliderCollection[(timer+2)%3].classList.add('visually-hidden');
            inputs[(timer+1)%3].checked = false;
            inputs[(timer+2)%3].checked = false;
        }
        sliderCollection[timer%3].classList.remove('visually-hidden');
        inputs[timer%3].checked = true;
}, 3000);


