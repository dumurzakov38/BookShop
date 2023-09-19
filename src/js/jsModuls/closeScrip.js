import { container, btnClose, btnOpen, imgOpen } from "./defaultAnimationScrip";

export function close() {
    container.classList.remove('nav__containermenu--block');
    btnClose.classList.add('dnone');
    btnOpen.classList.remove('dnone');
    imgOpen.classList.remove('dnone'); // Удаляем класс dnone у изображения с классом open
  }