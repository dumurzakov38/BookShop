import { updateIndex, updatedataInfo, index, dataInfo, btnArchitecture, containerResultBooks } from './defaultScrip';
import { doSomethingWithDataInfo } from './doSomethingWithDataInfoScrip';
import { requestBook } from './requestBookScrip';

export function getClickGetNameKategory () {
  btnArchitecture.forEach(li => {
    li.addEventListener('click', event => {
      updateIndex(0);
      while (containerResultBooks.firstChild) {
        containerResultBooks.removeChild(containerResultBooks.firstChild);
      }
      updatedataInfo(li.getAttribute('data-info'));
      doSomethingWithDataInfo(dataInfo);
      requestBook(dataInfo, index);
    });
  });
}