import { dataInfo, index, updateIndex } from './defaultScrip';
import { recordIdArray } from './recordIdArrayScrip';
import { requestBook } from './requestBookScrip';

export async function moreResul() {
  updateIndex(index + 6);
  await requestBook(dataInfo, index);
  recordIdArray();
}