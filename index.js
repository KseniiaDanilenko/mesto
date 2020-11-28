/*открываем и закрываем попап*/
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', handleEditButtonClick);
function handleEditButtonClick(){
  popup.classList.add('popup_visible');
}
closeButton.addEventListener('click', handleCloseButtonClick);
function handleCloseButtonClick(){
  popup.classList.remove('popup_visible');
}
/*вносим изменения через попап*/
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about')
let form = document.querySelector('.form')
let formName = document.querySelector('.form__item_type-name');
let formAbout = document.querySelector('.form__item_type-about');

form.addEventListener('submit', handleSubmit);

function handleSubmit(){
  event.preventDefault();
  profileName.textContent = formName.value;
  profileAbout.textContent = formAbout.value;
  popup.classList.remove('popup_visible');
}