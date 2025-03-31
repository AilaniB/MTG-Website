'use strict';

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

const carouselNavigation = document.querySelector('.carousel-navigation');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));

const navigationItems = Array.from(document.querySelectorAll('.navigation-item'));

const CAROUSEL_LENGTH = carouselItems.length;

leftButton.addEventListener('click', swipe);
rightButton.addEventListener('click', swipe);

carouselNavigation.addEventListener('click', navigation);

function swipe(e){
  const currentCarouselItem = document.querySelector('.carousel-item.active');

  const currentIndex = carouselItems.indexOf(currentCarouselItem);

  let nextIndex;

  if(e.currentTarget.classList.contains('left')){
    if(currentIndex === 0) {
      nextIndex = CAROUSEL_LENGTH - 1;
    }else{
      nextIndex = currentIndex - 1;
    }
  }
  else{
    if(currentIndex === CAROUSEL_LENGTH - 1){
      nextIndex = 0;
    }else{
      nextIndex = currentIndex + 1;
    }
  }

  carouselItems[nextIndex].classList.add('active');
  navigationItems[nextIndex].classList.add('active');

  currentCarouselItem.classList.remove('active');
  navigationItems[currentIndex].classList.remove('active');
}

function navigation(e){
  if(e.target.classList.contains('active')){
    return
  }else{
    const currentNavigationItem = document.querySelector('.navigation-item.active');

    const currentIndex = navigationItems.indexOf(currentNavigationItem);

    const nextIndex = navigationItems.indexOf(e.target);

    currentNavigationItem.classList.remove('active');
    carouselItems[currentIndex].classList.remove('active');

    e.target.classList.add('active');
    carouselItems[nextIndex].classList.add('active');
  }
}