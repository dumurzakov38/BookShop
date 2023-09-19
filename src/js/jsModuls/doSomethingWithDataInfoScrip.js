export function doSomethingWithDataInfo(dataInfo) {
  dataInfo = dataInfo.replace(/\s/g, '');
  dataInfo = dataInfo.replace(/&/g, '');

  const allSpans = document.querySelectorAll('.book__katalog__categories__container ul li span');
  allSpans.forEach(span => {
    span.classList.remove('book__katalog__categories__h1__span--active');
  });

  const allHeadings = document.querySelectorAll('.book__katalog__categories__container ul li h1');
  allHeadings.forEach(heading => {
    heading.classList.remove('book__katalog__categories__h1--active');
  });

  const span = document.querySelector(`.${dataInfo}`);
  if (span) {
    span.classList.add('book__katalog__categories__h1__span--active');
  }

  const heading = document.querySelector(".h1__" + `${dataInfo}`);
  if (heading) {
    heading.classList.add('book__katalog__categories__h1--active');
  }
}
