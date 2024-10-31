// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menu =document.querySelector('#menu');
const navMenu=document.querySelector('#navMenu');
const spanInBurger =document.querySelector('#s');
const burger=document.querySelector('#burger');
const menuTitle=document.querySelector('#menuTitle');
menu.addEventListener("click",function(event){
  navMenu.classList.toggle('open__menu');
  spanInBurger.classList.toggle('on');
  burger.classList.toggle('on');
  menu.classList.toggle('on');
  menuTitle.classList.toggle('on');
});
['resize','DOMContentLoaded'].forEach( evt =>
  window.addEventListener(evt, (e) => {
    const width = document.documentElement.clientWidth;
    const firstSlide = document.querySelector(".firstSlide__container");
  
    if (!firstSlide) return; // Проверка на наличие элемента
  
    // Сохраняем начальный HTML при первом запуске
    if (!firstSlide.dataset.initialized) {
      firstSlide.dataset.initialHTML = firstSlide.innerHTML;
      firstSlide.dataset.initialized = true;
    }
  
    if (width < 950) {
      firstSlide.innerHTML = `
        <div class='mob__container'>
          <div class='mob__content'>
            <div class='mob__titleAndPointer'>
            <div class='mob__title'>Городские смартфоны: стильные решения для активной жизни</div>
            <div class='mob__pointer'><img src="../../img/mob_pointer.svg" alt="Image"></div>
            </div>
            <img class='mob__img1' src='../../img/phoneFirst.svg' alt='Image'>
            <img class='mob__img2' src='../../img/phoneSecond.svg' alt='Image'>

          </div>
          <div class='mob__texts'>
            <div class='mob__title'>Смартфоны для каждого: стиль, цвет и цена на любой вкус!</div>
            <div class='mob__subtext'>Более 1500 моделей смартфонов для любых задач и предпочтений!</div>
          </div>
          <div class='mob__button button'>
            <button class='button__mob'><span class='button__one'>Откройте каталог</span></button>
          </div>
        </div>`;
    } else {
      firstSlide.innerHTML = firstSlide.dataset.initialHTML;
    }
  })
);



