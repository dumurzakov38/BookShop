export const btnOpen = document.querySelector('.nav__containermenu__btniconopen__button');
export const btnClose = document.querySelector('.nav__containermenu__btniconclose__button');
export const container = document.querySelector('.nav__containermenu');
export const imgOpen = document.querySelector('.open');
export const imgClose = document.querySelector('.close');

import { open } from "./openScrip";
import { close } from "./closeScrip";

export function defaultAnimation() {
  btnOpen.addEventListener('click', open);
  btnClose.addEventListener('click', close);
}