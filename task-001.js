import fortunes from "./fortunes.js";

const refs = {
  modalWindow: document.querySelector('.modal'),
  closeButton: document.querySelector('.closeBtn'),
  modalButton: document.querySelector('.modalButton'),
  wishText: document.querySelector('.wishTextContainer')
}

const state = {
  isModalOpen: false
}

function modalHandler() {
  refs.modalWindow.classList.toggle('show-modal');
  refs.wishText.textContent = createNewWish()
}
refs.modalButton.addEventListener('click', modalHandler)
refs.closeButton.addEventListener('click', modalHandler)
// const wishes = [];
function createNewWish() {
    const min = 0;
    const max = fortunes.length - 1;
  const i = Math.floor(Math.random() * (max - min + 1) + min);
  return fortunes[i]
};

console.log('someWish', createNewWish())
    
  

