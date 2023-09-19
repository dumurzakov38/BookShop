import { setValueslocalStorage, valueslocalStorage } from "./defaultScrip";
import { updateButtonState } from "./updateButtonStateScrip";
import { updateBasketDisplay } from "./updateBasketDisplayScrip";
import { recordIdArray } from "./recordIdArrayScrip";

export function getClickAddDel () {
  const containerResultBooks = document.querySelector('.book__katalog__result__books');
  containerResultBooks.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('book__katalog__result__btn__btnadddellbasket')) {
      const id = target.getAttribute('data-info');
      const isAdded = valueslocalStorage.some(item => item.id === id);
      if (isAdded) {
        setValueslocalStorage(valueslocalStorage.filter(item => item.id !== id));
        updateButtonState(target, false);
      } else {
        valueslocalStorage.push({ id });
        updateButtonState(target, true);
      }
      // Обновляем LocalStorage и отображение корзины
      localStorage.setItem('Basket', JSON.stringify(valueslocalStorage));
      updateBasketDisplay();
      recordIdArray();
    }
  });
}