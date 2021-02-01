let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let form = document.querySelector('.popup__form');
let formName = document.querySelector('.popup__item_type_name');
let formAbout = document.querySelector('.popup__item_type_about');


function handleEditButtonClick(){
  formName.value = profileName.textContent;
  formAbout.value = profileAbout.textContent;
  popup.classList.add('popup_visible');
}
function handleSubmit(event){
  event.preventDefault();
  profileName.textContent = formName.value;
  profileAbout.textContent = formAbout.value;
  handleCloseButtonClick();
}
function handleCloseButtonClick(){
  popup.classList.remove('popup_visible');
}

form.addEventListener('submit', handleSubmit);
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
