import { displayResult } from './displayResultScrip';

export async function requestBook(info, index) {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${info}&key=AIzaSyDuBIEPKqZHXRToe7UuEqFy4V2yPlgXbVA&printType=books&startIndex=${index}&maxResults=6&langRestrict=en`);
    
    if (!response.ok) {
      console.log('Статус ответа:', response.status);
      return;
    }

    const data = await response.json();
    displayResult(data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}