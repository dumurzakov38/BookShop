import { createSpan } from "./createSpanScrip";
import { updateSlider } from "./updateSliderScrip";
import { updateNum } from "./updateNumScrip";

export const images = document.querySelectorAll('.banner');
export const spans = document.querySelector('.banners__coorusel-spans');
export let num = 0;
console.log(num);

export function defaultSlider() {
  createSpan();

  spans.addEventListener('click', event => {
    const clickedSpan = event.target;
    if (clickedSpan.classList.contains('banners__coorusel-span')) {
      num = parseInt(clickedSpan.id, 10); // Преобразуем id спана в число
      updateSlider(); // Вызываем updateSlider после клика на спан
    }
  });

  setInterval(() => {
    num = (num + 1) % images.length;
    updateSlider();
    updateNum();
  }, 5000);
}