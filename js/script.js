//Функция перехода с главной навигации на другую
let openNav = function(buttonNavOpen, navBlock, clasNavBlock) {
    buttonNavOpen.addEventListener('click', function(evt) {
        evt.preventDefault();
        navMain.classList.remove('header__mobile-nav__main-active')
        setTimeout(function () {
            navBlock.classList.add(clasNavBlock)           
        }, 300)  
    })
}
//Функция перехода с внутренй навигации на главную
let prevNav = function(prevButton, navRemove, classNavRemove) {
    prevButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        navRemove.classList.remove(classNavRemove)
        setTimeout(function () {
            navMain.classList.add('header__mobile-nav__main-active')         
        }, 300)  
    })
}
//Закрытие внутренего меню
let closeInternalNav = function(ButtonCloseBlock ,navCloseBlock, classNavCloseBlock) {
    ButtonCloseBlock.addEventListener('click', function(evt) {
        navCloseBlock.classList.remove(classNavCloseBlock)
        shadow.classList.remove('shadow-mode-active')
    })
}

let shadow = document.querySelector('.shadow-mode')
let bodys = document.querySelector('.relative')

// ОТКРЫТИЕ ГЛАВНОГО МЕНЮ  МОБАЙЛ
let butttonMain = document.querySelector('.main-button');
let navMain = document.querySelector('.header__mobile-nav__main');
butttonMain.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMain.classList.add('header__mobile-nav__main-active')
    shadow.classList.add('shadow-mode-active')
    bodys.classList.add('body-active')
})
//ЗАКРЫТЬ ГЛАВНОЕ МЕНЮ МОБАЙЛ
let butttonCloseMain = document.querySelector('.button-main-close');

butttonCloseMain.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMain.classList.remove('header__mobile-nav__main-active')
    shadow.classList.remove('shadow-mode-active')
    bodys.classList.remove('body-active')
})

//ОТКРЫТИЕ ПОИСКА ПО ГОРОДАМ
let buttonOpenCity = document.querySelector('.button-city-open');
let navCity = document.querySelector('.header__mobile-nav__search');
openNav(buttonOpenCity, navCity, 'header__mobile-nav__search-active');

//кнопка назад города
let prevNavCity = document.querySelector('.button-prev-city')
prevNav(prevNavCity, navCity, 'header__mobile-nav__search-active')

//кнопка закрыть city
let closeButtonCity = document.querySelector('.button-close-city')
closeInternalNav(closeButtonCity, navCity, 'header__mobile-nav__search-active')


//ОТКРЫТИЕ О КОМПАНИИ
let buttonOpenAbout = document.querySelector('.button-open-about')
let navAbout = document.querySelector('.header__mobile-nav__about')
openNav(buttonOpenAbout, navAbout, 'header__mobile-nav__about-active');

//кнопка назад о компании
let prevNavAbout = document.querySelector('.button-prev-about')
prevNav(prevNavAbout, navAbout, 'header__mobile-nav__about-active')

//кнопка закрыть о компании
let closeButtonAbout = document.querySelector('.button-close-about')
closeInternalNav(closeButtonAbout, navAbout, 'header__mobile-nav__about-active')

//ОТКРЫТИЕ ПОПУЛЯРНОЕ
let buttonOpenPopular = document.querySelector('.button-open-popular')
let navPopular = document.querySelector('.header__mobile-nav__popular')
openNav(buttonOpenPopular, navPopular, 'header__mobile-nav__popular-active');

//кнопка назад популярное
let prevNavPopular = document.querySelector('.button-prev-popular')
prevNav(prevNavPopular, navPopular, 'header__mobile-nav__popular-active')

//кнопка закрыть популярное
let closeButtonPopular = document.querySelector('.button-close-popular')
closeInternalNav(closeButtonPopular, navPopular, 'header__mobile-nav__popular-active')

//ОТКРЫТЬ НАВГИАЦИЮ ДЕСКТОП
let shadowsNav = document.querySelector('.shadow-modes')
let buttonOpenNavDesctop = document.querySelector('.main-button-desctop')
buttonOpenNavDesctop.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelector('.header__desctop-navigation').classList.toggle('header__desctop-navigation-action')
    shadowsNav.classList.toggle('shadow-mode-active-desctop-nav')
})  

shadowsNav.addEventListener('click', function() {
    document.querySelector('.header__desctop-navigation').classList.remove('header__desctop-navigation-action')
    shadowsNav.classList.remove('shadow-mode-active-desctop-nav')
})