let menuState = 0;


// анимация ссылок
const links = document.querySelectorAll('.link');
const linkImgs = document.querySelectorAll('.link__img')


links.forEach((item,i) => {
    item.addEventListener('mouseover', ()=>{
        linkImgs[i].style['margin'] = '5px 10px 0 5px';
        item.style.color = '#fff';
    })

    item.addEventListener('mouseout', () => {
        linkImgs[i].style['margin'] = '5px 15px 0 0'
        item.style.color = '#BEBEBE';
    })
});

// main-slider
const main = document.querySelector('main');
if(main.classList.contains('main')){
    const sliderImg1 = document.querySelector('.slider__img1');
    const sliderImg2 = document.querySelector('.slider__img2');
    const sliderImg3 = document.querySelector('.slider__img3');
    const sliders = [sliderImg1,sliderImg2,sliderImg3]

    const slideBars = document.querySelectorAll('.slides__item');
    const slideLines = document.querySelectorAll('.slides__line');

    let i = 0;
    let currentSlide = 0
    function firstLaunch(){
        
        slideLines[0].style.opacity = '100%';
        slideLines[0].style.left = '-40px';
        
    };
    setTimeout(firstLaunch,0)
    i+=1;

    function sliderChange(){
        sliders[currentSlide].classList.remove('slider__img_active')
        sliders[(currentSlide + 1) % 3].classList.add('slider__img_active')
        currentSlide = (currentSlide + 1) % 3

        slideLines[(i-1)%3].style.opacity = '0';
        slideLines[(i-1)%3].style.left = '-80px'
        slideLines[i%3].style.opacity = '100%';
        slideLines[i%3].style.left = '-40px';
        i+=1
    }
    let sliderInterval = setInterval(sliderChange,3000);
}
// pagination

const paginationBtns = document.querySelectorAll('.pagination__button');

paginationBtns.forEach((e) =>{
    e.addEventListener('click',function(){
        paginationBtns.forEach((elem) =>{
            elem.classList.remove('pagination__button_active')
        })
        e.classList.add('pagination__button_active')
    })
})

// модалка входа/регистр

const body = document.querySelector('body');
const signUpBlock = document.querySelector('.sign-up');
const openModalLogin = document.querySelectorAll('.login-button');
const closeModalLogin = document.querySelector('#exit');

const signUpHeader = document.querySelector('.sign-up__header');
const signUpSwitcher = document.querySelector('.change-form');
const submitButton = document.querySelector('#sign-up__submit');

let signUpState = 1;

openModalLogin.forEach((e)=>{
    e.addEventListener('click',() =>{
        body.classList.add('modal-background');
        signUpBlock.style.transform = 'translate(-50%,20%)'
        body.style.overflow = 'hidden'
        menuContainer.style.display = 'none';
        openMenuSvg.style.display = 'block'
        closeMenuSvg.style.display = 'none'
        menuState = 0;
    })
})

closeModalLogin.addEventListener('click',()=>{
    body.classList.remove('modal-background');
    signUpBlock.style.transform = 'translate(-50%,-100%)'
    body.style.overflow = 'visible'
    
})

signUpSwitcher.addEventListener('click',() =>{
    if(signUpState === 1){
        signUpHeader.innerText = 'Регистрация';
        signUpSwitcher.innerHTML = '<span class="switcher-text">Уже есть аккаунт? </span>Войти';
        submitButton.value = 'Зарегистрироваться';
        signUpState = 2;
    } else{
        signUpHeader.innerText = 'Войти как покупатель';
        signUpSwitcher.innerHTML = 'Регистрация';
        submitButton.value = 'Войти';
        signUpState = 1;
    }
})

// модалка поиска

const openModalSearch = document.querySelector('.search-button');
const searchContainer = document.querySelector('.search');
let searchState = 0


openModalSearch.addEventListener('click',() => {
    searchContainer.style['transform'] = 'translate(-50%,0)';
    body.classList.add('modal-background');
    body.style.overflow = 'hidden';
    searchState = 1;
    menuContainer.style.display = 'none';
    openMenuSvg.style.display = 'block'
    closeMenuSvg.style.display = 'none'
    menuState = 0;
})

body.addEventListener('click',(event) =>{
    if(searchState === 1){
        if(event.target == body){
            searchContainer.style['transform'] = 'translate(-50%,-200%)';
            body.classList.remove('modal-background');
            body.style.overflow = 'visible';
            searchState = 0;
        }
    }
    
})

// адаптивное меню

const openMenuButton = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.header-menu');
const openMenuSvg = document.querySelector('.menu-button_open');
const closeMenuSvg = document.querySelector('.menu-button_close');






openMenuButton.addEventListener('click',() =>{
    if(menuState == 0){
        menuContainer.style.display = 'flex';
        body.style.overflow = 'hidden';
        openMenuSvg.style.display = 'none'
        closeMenuSvg.style.display = 'block'
        menuState = 1;
    } else {
        menuContainer.style.display = 'none';
        body.style.overflow = 'visible';
        openMenuSvg.style.display = 'block'
        closeMenuSvg.style.display = 'none'
        menuState = 0;
    }
})


// фильтры

const filtersOpen = document.querySelector('.mixers__btn_adapt');
const filtersClose = document.querySelector('.filters-close');
const filtersContainer = document.querySelector('.mixers__filters');

if(main.classList.contains('mixers-main')){
    filtersOpen.addEventListener('click',()=>{
        filtersContainer.style.display = 'block'
        body.style.overflow = 'hidden'
    })
    filtersClose.addEventListener('click',()=>{
        filtersContainer.style.display = 'none'
        body.style.overflow = 'visible'
    })
}

// для недоделок

const notif = document.querySelector('.error');
const notifTargets = document.querySelectorAll('.error-target');
let notifState = 0

notifTargets.forEach((e)=>{
    e.addEventListener('click',()=>{
        notif.style.transform = 'translatey(30%)';
        if(notifState == 0){
            let killNotif = setTimeout(function(){
                notifState = 1
                notif.style.display = 'none';
                notif.style.transform = 'translatey(-130%)';
                setTimeout(function(){
                    notif.style.display = 'block'
                },300)
                notifState = 0
            },2000)
            
        }


       
        
    })
})
function async(){
    
}