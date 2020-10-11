let hand = document.querySelector('.like-hand');
let likesNumber = document.querySelector('.likes-number');
let commentForm = document.querySelector('.comment-add');
let commentList = document.querySelector('.comment-list');
let commentMessage = document.querySelector('.message');


hand.onclick = function () {
  if (hand.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  hand.classList.toggle('added');
};

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('.comment-user');
  newComment.textContent = commentMessage.value;
  commentMessage.value = '';
  commentList.append(newComment);
}

