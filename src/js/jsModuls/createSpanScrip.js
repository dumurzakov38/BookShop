import { images, spans } from "./defaultSliderScrip";
import { updateSlider } from "./updateSliderScrip";

export function createSpan() {
    for (let i = 0; i < images.length; i++) {
      const span = document.createElement('span');
      span.className = 'banners__coorusel-span';
      span.id = i;
      spans.appendChild(span);
    }

    updateSlider(); // Вызываем updateSlider после создания спанов
  }