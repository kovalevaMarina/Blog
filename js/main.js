let articles = document.querySelectorAll('.article-block');
let selectFilter = document.querySelector('.select-group');
let textMessage = document.querySelector('.message');
let textButton = document.querySelector('.btn-form');


selectFilter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== selectFilter.value && selectFilter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  };
};


textMessage.oninput = function () {
  if (textMessage.value.length < 10 || textMessage.value.length > 200) {
    textMessage.classList.add('warning');
    textButton.disabled = true;
  } else {
    textMessage.classList.remove('warning');
    textButton.disabled = false;
  };
};
