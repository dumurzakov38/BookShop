import { valueslocalStorage, HtmlElementbasket, HtmlElementbasketTitle } from "./defaultScrip";

export function updateBasketDisplay() {
    if (valueslocalStorage.length > 0) {
      HtmlElementbasket.innerHTML = valueslocalStorage.length;
      HtmlElementbasket.classList.remove('nav__functional-basket__none');

      if (valueslocalStorage.length === 1) {
        HtmlElementbasketTitle.title = `в Корзине ${valueslocalStorage.length} товар`;
      } else if (valueslocalStorage.length > 1 && valueslocalStorage.length < 5) {
        HtmlElementbasketTitle.title = `в Корзине ${valueslocalStorage.length} товара`;
      } else {
        HtmlElementbasketTitle.title = `в Корзине ${valueslocalStorage.length} товаров`;
      }
    } else if (valueslocalStorage.length === 0) {
      HtmlElementbasket.classList.add('nav__functional-basket__none');
      HtmlElementbasketTitle.title = ``;
    }
}