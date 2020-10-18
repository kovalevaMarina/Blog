let hand = document.querySelector('.like-hand');
let likesNumber = document.querySelector('.likes-number');
let commentForm = document.querySelector('.comment-add');
let commentList = document.querySelector('.comment-list');
let commentMessage = document.querySelector('.comment');
let submitButton = document.querySelector('.btn-comment');

/* Лайки */
hand.onclick = function () {
  if (hand.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  hand.classList.toggle('added');
};

/* Комментарии */
commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('.comment-user');
  newComment.textContent = commentMessage.value;
  commentMessage.value = '';
  commentList.append(newComment);
}

/* Отправка формы */
commentMessage.oninput = function () {
  if (commentMessage.value.length < 10 || commentMessage.value.length > 200) {
    commentMessage.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentMessage.classList.remove('warning');
    submitButton.disabled = false;
  };
};

