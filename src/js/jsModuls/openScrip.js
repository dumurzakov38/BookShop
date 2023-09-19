import { container, btnClose, btnOpen, imgOpen } from "./defaultAnimationScrip";

export function open() {
    container.classList.add('nav__containermenu--block');
    btnClose.classList.remove('dnone');
    btnOpen.classList.add('dnone');
    imgOpen.classList.add('dnone'); // Добавляем класс dnone к изображению с классом open
  }