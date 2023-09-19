import { images, num } from "./defaultSliderScrip";

export function updateNum() {
    if (num >= images.length) {
      num = 0;
    }
  }