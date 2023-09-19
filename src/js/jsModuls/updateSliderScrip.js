import { images, num, spans } from "./defaultSliderScrip";

export function updateSlider() {
    images.forEach(image => {
      image.classList.remove('bannerActive'); // Удаляем класс у всех изображений
    });

    images[num].classList.add('bannerActive'); // Добавляем класс только выбранному изображению

    const spanList = Array.from(spans.children); // Преобразуем HTMLCollection в массив
    spanList.forEach(span => {
      span.classList.remove('banners__coorusel-span--active');
    });

    spanList[num].classList.add('banners__coorusel-span--active');
  }