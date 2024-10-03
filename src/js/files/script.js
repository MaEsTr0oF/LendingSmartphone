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

