export function updateButtonState(button, isAdded) {
  if (isAdded) {
    button.textContent = "IN THE CART";
    button.title = "В корзине";
    button.classList.add('book__katalog__result__btn__btnadddellbasket-deactiv');
  } else {
    button.textContent = "buy now";
    button.title = "Добавить в корзину";
    button.classList.remove('book__katalog__result__btn__btnadddellbasket-deactiv');
  }
}