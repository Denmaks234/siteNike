//Data

import anime from 'animejs/lib/anime.es.js';
const burgerBtn=document.querySelector('.burger__menu') 
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const sliderBlock = document.querySelector('.sliderBlock')
const findOut = document.querySelector('.findOut')
const bestSellers = document.querySelector('.best__sellers')
const sportTime = document.querySelector('.sport__time')
const modernShoes = document.querySelector('.modern__shoes')
const favourites = document.querySelector('.favourites')
const bestPeople = document.querySelector('.best__people')
const brends = document.querySelector('.brends')
const visionaries = document.querySelector('.visionaries')
const joinUs = document.querySelector('.join__us')
const advantages = document.querySelector('.advantages')
let firstClick=true;
let isShow=true
let isShowFind=true
let isShowFindText=true
let isShowBest=true
let isShowTime=true
let isShowModern = true
let isShowFavourite = true
let isShowBrends = true
let isShowBestPeople = true
let isShowVisionaries = true
let isShowJoinUs = true
let isShowAdvantages = true


// functions Animations
function animeTranslateY(block,number,number2,duration){
   anime({
	targets: block,
	translateY: [number,number2],
    easing: 'easeInOutExpo',
    duration:duration
});
}
function animeOpacity(block,duration){
   anime({
	targets: block,
	opacity: [0,1],
    easing: 'easeInOutExpo',
    duration:duration
});
}
function animeTranslateX(block,number,number2,duration){
   anime({
	targets: block,
	translateX: [number,number2],
    easing: 'easeInOutExpo',
    duration:duration
});
}
function animeTranslateXAndOpacity(block,number,number2,duration){
    anime({
     targets: block,
     translateX: [number,number2],
     opacity:[0,1],
     easing: 'easeInOutExpo',
     duration:duration
 });
 }
function animeDelay(block,number,number2,delayNumber=200){
   anime({
	targets: block,
	translateX: [number,number2],
    delay: function(el, i, l) {
        return i * delayNumber;
    },
    easing: 'easeInOutExpo',
});
}
function animeDelayY(block,number,number2,delayNumber=200){
    anime({
     targets: block,
     translateY: [number,number2],
     delay: function(el, i, l) {
         return i * delayNumber;
     },
     easing: 'easeInOutExpo',
 });
 }  

//Code

document.addEventListener('DOMContentLoaded',()=>{
    animeOpacity('.logo',1000)
    animeOpacity('.block__sneakers',1000)
    animeTranslateY('.block__sneakers-imgSneak',1000,0,2000)
    animeTranslateX('.block__sneakers-title',1000,0,1000)
    animeTranslateX('.block__sneakers-info',1000,0,2000)
    animeTranslateX('.details__btn',1000,0,3000)
    animeOpacity('.block__sneakers-plus',3000)

if(window.innerWidth>840){
    animeDelay('.burger__menu .el',-250,0)
}
else{
    animeDelay('.burger__menu .el',250,0)
}

document.addEventListener('scroll',()=>{
     
    const scrollPercentSlider = window.pageYOffset-sliderBlock.offsetTop+500
    if(scrollPercentSlider>0&&isShow){
        animeTranslateXAndOpacity('.sliderBlock',1200,0,1000)
        animeTranslateXAndOpacity('.swiper',1200,0,1000)
        animeTranslateXAndOpacity('.swiper__btns',-400,0,1000)
        animeOpacity('.flash',2000)
        isShow=false;
    }
    const scrollPercentFindOut = window.pageYOffset-findOut.offsetTop+500
    if( isShowFind&&scrollPercentFindOut>0){
        animeOpacity('.findOut',1000)
        animeTranslateX('.findOut__header',-2000,0,1000)
        isShowFind=false;
        }
    if(isShowFindText&&scrollPercentFindOut>300){
        animeTranslateXAndOpacity('.findOut__btn',-2000,0,1000)
        animeTranslateXAndOpacity('.findOut__subtitle',-2000,0,1000)
        animeOpacity('.findOutPhoto',2000)
        isShowFindText=false;
    }
    const scrollPercentBestSellers = window.pageYOffset-bestSellers.offsetTop+500
    if(window.innerWidth<600){
        if( isShowBest&&scrollPercentBestSellers>0){
           animeOpacity('.best__sellers-inner',1000)
           animeDelay('.best__sellers-item',-2000,0,1500) 
           isShowBest=false
        }
    }
    else{
        if( isShowBest&&scrollPercentBestSellers>0){
            animeOpacity('.best__sellers-inner',1000)
            animeDelay('.best__sellers-item',2000,0,1000) 
            isShowBest=false
         }
    }
    
    
    const scrollPercentSportTime = window.pageYOffset-sportTime.offsetTop+300

    if( isShowTime&&scrollPercentSportTime>0){
        animeOpacity('.sport__time',0)
        animeOpacity('.sport__time-img',1000)
        animeTranslateX('.sport__time-block1',-2000,0,2000)
        animeTranslateX('.sport__time-block2',2000,0,2000)
        isShowTime=false
    }

    const scrollPercentModern = window.pageYOffset - modernShoes.offsetTop+500
    console.log(scrollPercentModern)

    if(isShowModern && scrollPercentModern>0){
        animeOpacity('.modern__shoes', 1000)
        animeOpacity('.shoes__img', 2000)
        animeTranslateX('.modern__shoes-right',2000,0,2000)
        
        isShowModern=false
    }

    const scrollPercentFavourite = window.pageYOffset - favourites.offsetTop+400
    
    if(isShowFavourite && scrollPercentFavourite>0){
        if(window.innerWidth<800){
            animeOpacity('.favourites', 1000)
            animeOpacity('.favourites__title', 1200)
            animeOpacity('.favourites__items', 1700)
            isShowFavourite=false
            return;
        }
        animeOpacity('.favourites', 1000)
        animeTranslateX('.favourites__title', -2000 , 0 ,  2000)
        animeTranslateX('.favourites__items', 2000 , 0 ,  2000)
        isShowFavourite=false
    }

    const scrollPercentBrends = window.pageYOffset - brends.offsetTop+700

    if(isShowBrends && scrollPercentBrends>0){
        if(window.innerWidth<800){
            animeOpacity('.brends', 0)
            animeOpacity('.brends__img', 1000)
            isShowBrends=false
            return;
        }
        animeOpacity('.brends', 0)
        animeDelay('.brends__img', 2000 , 0 ,  200)
        isShowBrends=false
    }
    const scrollPercentBestPeople = window.pageYOffset - bestPeople.offsetTop+500
   
    if(isShowBestPeople && scrollPercentBestPeople>0){
        if(window.innerWidth<800){
            animeOpacity('.best__people', 0)
            animeOpacity('.best__people-left', 1000)
        animeOpacity('.img1',  1000)
        animeOpacity('.img2',  2000)
        animeOpacity('.img3',  3000)
        isShowBestPeople=false
            return;
        }
        animeOpacity('.best__people', 0)
        animeTranslateX('.best__people-left', -2000 , 0 ,  2000)
        animeOpacity('.img1',  1000)
        animeOpacity('.img2',  2000)
        animeOpacity('.img3',  3000)
        isShowBestPeople=false
    }

    const scrollPercentVisionaries = window.pageYOffset - visionaries.offsetTop+500
   
    if(isShowVisionaries && scrollPercentVisionaries>0){
        animeOpacity('.visionaries', 0)
        animeOpacity('.visionaries__img', 1000)
        animeTranslateX('.visionaries__title', 2000 , 0 ,  1000)
        animeTranslateX('.visionaries__subtitle', 2000 , 0 ,  1500)
        animeTranslateX('.visionaries__subtitle2', 2000 , 0 ,  2000)
        animeTranslateX('.visionaries__subtitle3', 2000 , 0 ,  2500)
        animeTranslateX('.visionaries__subtitle4', 2000 , 0 ,  3000)
        isShowVisionaries=false
    }
    const scrollPercentJoinUs = window.pageYOffset - joinUs.offsetTop+500
   
    if(isShowJoinUs && scrollPercentJoinUs>0){
        animeOpacity('.join__us', 2000)
       
        isShowJoinUs=false
    }
    const scrollPercentAdvantages = window.pageYOffset - advantages.offsetTop+700
    console.log(scrollPercentAdvantages)
    if(isShowAdvantages && scrollPercentAdvantages>0){
        animeOpacity('.advantages',0)
        animeDelay('.advantages__item', 2000,0,200)
       
        isShowAdvantages=false
    }
})

if(window.innerWidth>1200){
    animeTranslateY('.menu__item',-250,0,2000)
}
    anime({
        targets: '.header__right-img',
        translateY: [-400,0],
        delay: anime.stagger(100, {start: 500}), // delay starts at 500ms then increase by 100ms for each elements.
        easing: 'easeInOutExpo',
    });
   
})


burgerBtn.addEventListener('click',()=>{
    if(window.pageXOffset>1200){
        if(firstClick){
            animeDelayY('.menu__item',0,-250,100)
            
        }
        else{
            animeDelayY('.menu__item',-250,0,100)
        }  
    }
    else if(window.pageXOffset<1200 && window.innerWidth>840 ){
        if(firstClick){
            animeDelay('.menu__item',0,-400,200)
            
        }
        else{
            animeDelay('.menu__item',-400,0,100)
        }  
    }
    console.log(window.innerWidth)
    if(window.innerWidth<840){
        console.log(1)
            menu.style.top='0px'
            animeDelayY('.menu__item',-400,0,100)
    }
     firstClick=!firstClick;
})


closeBtn.addEventListener('click',()=>{
    menu.style.top='-400px'
})