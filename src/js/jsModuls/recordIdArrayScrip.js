import { valueslocalStorage } from "./defaultScrip";
import { upgradeBtn } from "./upgradeBtnScrip";

export function recordIdArray() {
  const books = document.querySelectorAll('.book__katalog__result__aboutBook');
  const arrayElementId = [];
  for (let i = 0; i < books.length; i++) {
    const newObj2 = {id: books[i].attributes?.id.value};
    arrayElementId.push(newObj2);
  }
  const commonElement = valueslocalStorage.filter(item => {
    return arrayElementId.some(obj => obj.id === item.id);
  });
  upgradeBtn(commonElement);
  // this.recordIdArray = recordIdArray;
}
