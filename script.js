'use strict';

// Elements
const btnEl = document.querySelector('.btn--submit');
const ratingBoxSubmitted = document.querySelector('.rating-box--submitted');
const ratingBoxWrapper = document.querySelector('.rating-wrapper');
const ratingNumsContainer = document.querySelector('.rating-numbers');
const ratingNumber = document.querySelector('.rating-number');

// Setting background color on the clicked number and getting the rating value.
let ratingNum;
ratingNumsContainer.addEventListener('click', function (e) {
  const clicked = e.target;
  const siblings = clicked
    .closest('.rating--container')
    .querySelectorAll('.rating-num');

  if (clicked.classList.contains('rating-num')) {
    // Resetting background color and color on all siblings
    siblings.forEach((sibling) => {
      sibling.classList.remove('active');
    });

    // Reactivating on the clicked element
    clicked.classList.add('active');

    // Getting the rating num value
    ratingNum = clicked.dataset.num;
  }
});

btnEl.addEventListener('click', function (e) {
  // Validation
  if (!ratingNum) return alert('Please rate before submit');

  // Setting the rating num value on the text
  ratingNumber.textContent = `${ratingNum}`;

  // Changing content
  ratingBoxSubmitted.classList.toggle('hidden');
  ratingBoxSubmitted.style.transform = `translateX(0%)`;
  ratingBoxWrapper.classList.toggle('hidden');
});
