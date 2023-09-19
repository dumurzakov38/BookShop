import { moreResultBtn } from './defaultScrip';
import { moreResul } from './moreResulScrip';
// Обработчики кликов
export function getClickMoreResul () {
  moreResultBtn.addEventListener('click', moreResul);
}