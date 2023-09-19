import { containerResultBooks } from "./defaultScrip";
import { requestBook } from "./requestBookScrip";

export function displayResult(apiData) {
    const apiDataLength = apiData.items.length;
    for (let i = 0; i < apiDataLength; i++) {
      const book = apiData.items[i];

            let bookId;
            if (book.id.length >= 2 && book.id[0] === book.id[1]) {
              bookId = book.id.substring(1);
              bookId = bookId.replace(/[\s?/.,-/_]/g, '').toUpperCase();
              book.id = bookId;
            } else {
              bookId = book.id.replace(/[\s?/.,-/_]/g, '').toUpperCase();
            }

            const bookKatalogResultAboutBook = document.createElement('div');
            bookKatalogResultAboutBook.className = 'book__katalog__result__aboutBook';
            bookKatalogResultAboutBook.id = bookId;


            // Создание дочернего элемента .book__katalog__result__aboutBook__img
            const imgDiv = document.createElement('div');
            imgDiv.className = 'book__katalog__result__aboutBook__img';

            const img = document.createElement('img');

            if (book.volumeInfo.imageLinks != null) {
              if (book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) {
                img.src = book.volumeInfo.imageLinks.smallThumbnail;
              } else {
                img.src = "../images/plaseholder.jpg";
              }
            } else {
              img.src = "../images/plaseholder.jpg";
            }

            img.alt = `Обложка Книги - ${book.volumeInfo.title}`;
            imgDiv.appendChild(img);

            // Создание дочернего элемента .book__katalog__result__aboutBook__info
            const infoDiv = document.createElement('div');
            infoDiv.className = 'book__katalog__result__aboutBook__info';

            const authorP = document.createElement('p');
            authorP.className = 'book__katalog__result__aboutBook__info__Author';
            if (book.volumeInfo.authors != null) {
              const authors = book.volumeInfo.authors;
              if (authors.length > 2) {
                // const dataAuthors = authors;
                const pAuthors = book.volumeInfo.authors[0] + "," + book.volumeInfo.authors[1] + "...";
                authorP.textContent = pAuthors;
                authorP.title = authors;
              } else {
                authorP.textContent = authors;
                authorP.title = authors;
              }
            } else {}
            infoDiv.appendChild(authorP);

            const nameH1 = document.createElement('h1');
            nameH1.className = 'book__katalog__result__aboutBook__info__Name';
            //console.log(book.volumeInfo.title.length);
            if (book.volumeInfo.title != null) {
              if (book.volumeInfo.title.length < 25) {
                nameH1.textContent = book.volumeInfo.title;
              } else {
                const dataTitle = book.volumeInfo.title;
                const h1Title = dataTitle.slice(0, 25) + "..."
                nameH1.textContent = h1Title;
                nameH1.title = dataTitle;
              }
            } else {

            }
            infoDiv.appendChild(nameH1);




            const ratingDiv = document.createElement('div');
            ratingDiv.className = 'book__katalog__result__aboutBook__info__Rating';
            const ratingContainer = document.createElement('div');
            const ratingP = document.createElement('p');
            ratingContainer.className = 'rating';
            if (book.volumeInfo.averageRating === undefined) {
              //const stars = [];
              //const maxRating = 5;
              //const ratingPercentage = book.volumeInfo.averageRating * 20;
              //for (let i = 1; i <= maxRating; i++) {
              //const star = document.createElement('span');
              //star.className = 'star';
              //star.innerHTML = '&#9733;';
              //stars.push(star);
              //ratingContainer.appendChild(star);
              //}
              //const fillStars = (percentage) => {
              //const activeStars = (percentage / 100) * maxRating;
              //for (let i = 0; i < maxRating; i++) {
              //  if (i < activeStars) {
              //    stars[i].classList.add('active');
              //  } else {
              //    stars[i].classList.remove('active');
              //  }
              //}
              //};
              //fillStars(ratingPercentage);
              //const ratingP = document.createElement('p');
              //ratingP.className = 'book__katalog__result__aboutBook__info__Rating__p';
              //ratingP.textContent = '252 review';
            } else {
                const stars = [];
                const maxRating = 5;
                const ratingPercentage = book.volumeInfo.averageRating * 20;
                for (let i = 1; i <= maxRating; i++) {
                  const star = document.createElement('span');
                  star.className = 'star';
                  star.innerHTML = '&#9733;';
                  stars.push(star);
                  ratingContainer.appendChild(star);
                }
                const fillStars = (percentage) => {
                const activeStars = (percentage / 100) * maxRating;
                for (let i = 0; i < maxRating; i++) {
                  if (i < activeStars) {
                    stars[i].classList.add('active');
                  } else {
                    stars[i].classList.remove('active');
                  }
                }

                if (book.volumeInfo.ratingsCount > 1000) {
                  let reduce = book.volumeInfo.ratingsCount;
                  reduce = (reduce / 1000).toString().slice(0, 3) + "M" + " review";
                  const ratingText = document.createElement('p');
                  ratingText.className = 'book__katalog__result__aboutBook__info__Rating__p';
                  ratingText.textContent = reduce;
                  ratingP.appendChild(ratingText);
                } else {
                  const ratingText = document.createElement('p');
                  ratingText.className = 'book__katalog__result__aboutBook__info__Rating__p';
                  ratingText.textContent = book.volumeInfo.ratingsCount + "review";
                  ratingP.appendChild(ratingText);
                }

            };
            fillStars(ratingPercentage);
            }
            

            ratingDiv.appendChild(ratingContainer);
            ratingDiv.appendChild(ratingP);

            infoDiv.appendChild(ratingDiv)





          const descriptionP = document.createElement('p');
          descriptionP.className = 'book__katalog__result__aboutBook__info__Description';
          if (book.volumeInfo.description != null) {
            if (book.volumeInfo.description.length < 75) {
              descriptionP.textContent = book.volumeInfo.description;
            } else {
              const pDescription = book.volumeInfo.description;
              const description = pDescription.slice(0, 76) + "...";
              descriptionP.textContent = description;
              descriptionP.title = pDescription
            }
          } else {

          }
          infoDiv.appendChild(descriptionP);

          const priceH1 = document.createElement('h1');
          if (book.saleInfo && book.saleInfo.retailPrice) {
            priceH1.textContent = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : '';
            if (book.saleInfo.retailPrice.currencyCode === "KZT") {
              priceH1.className = 'book__katalog__result__aboutBook__info__Price book__katalog__result__aboutBook__info__Price__kzt';
            } else if (book.saleInfo.retailPrice.currencyCode === "USD") {
              priceH1.className = 'book__katalog__result__aboutBook__info__Price book__katalog__result__aboutBook__info__Price__usd';
            } else if (book.saleInfo.retailPrice.currencyCode === "RUB") {
              priceH1.className = 'book__katalog__result__aboutBook__info__Price book__katalog__result__aboutBook__info__Price__rub';
            }
          }

          // const btnDiv = document.createElement('div');
          const buyButton = document.createElement('button');
          buyButton.className = `book__katalog__result__btn book__katalog__result__btn__btnadddellbasket id${bookId}`;
          buyButton.dataset.info = bookId;
          buyButton.title = 'Добавить в Корзину';
          buyButton.textContent = 'buy now';
          infoDiv.appendChild(buyButton);

          infoDiv.appendChild(ratingDiv);
          infoDiv.appendChild(descriptionP);
          infoDiv.appendChild(priceH1);
          infoDiv.appendChild(buyButton);

          // Добавление дочерних элементов в корневой элемент
          bookKatalogResultAboutBook.appendChild(imgDiv);
          bookKatalogResultAboutBook.appendChild(infoDiv);

          // Добавление корневого элемента в контейнер containerResultBooks
        containerResultBooks.appendChild(bookKatalogResultAboutBook);
    };
  }