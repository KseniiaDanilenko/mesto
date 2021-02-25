const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const closeButtonEdit = document.querySelector('.popup-edit__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formEdit = document.querySelector('.popup-edit__form');
const formEditName = document.querySelector('.popup-edit__item_type_name');
const formEditAbout = document.querySelector('.popup-edit__item_type_about');


const formEditButtonSubmit = document.querySelector('.popup-edit__button');

function handleEditButtonClick(){
  formEditName.value = profileName.textContent;
  formEditAbout.value = profileAbout.textContent;
  openPopup(popupEdit);
}
function handleEditSubmit(event){
  event.preventDefault();
  profileName.textContent = formEditName.value;
  profileAbout.textContent = formEditAbout.value;
  handleEditCloseButtonClick();  
}
function handleEditCloseButtonClick(){
  closePopup(popupEdit);
}

formEditButtonSubmit.addEventListener('click', handleEditSubmit);
editButton.addEventListener('click', handleEditButtonClick);
closeButtonEdit.addEventListener('click', handleEditCloseButtonClick);

/*пятая практическая работа*/
/*рендеринг карточек*/

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }];
  const popupImg = document.querySelector('.popup-img');

  function createCard(item){
    const card = elementTemplate.querySelector('.element').cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    const elementPhoto = card.querySelector('.element__photo');
    elementPhoto.src = item.link;
    elementPhoto.alt = item.name;
    card.querySelector('.element__delete').addEventListener('click', function(evt){
    const deleteButton = evt.target;
    card.remove();
  });
  card.querySelector('.element__like').addEventListener('click', function(evt) {
    const like = evt.target;
    like.classList.toggle('element__like_active');
  });
  elementPhoto.addEventListener('click',function(evt){
    const imgClick = evt.target;
    openPopup(popupImg);
    const imgOpened = document.querySelector('.popup-img__item');
    imgOpened.src = imgClick.src;
    imgOpened.alt = imgClick.alt;
  });
  return card;
};
/*разделение функции создания карточек на 2 части*/
function prependCard(item){
  elementsList.prepend(createCard(item));
};
/*рендеринг карточек*/

function renderCards() {
  initialCards.map(prependCard);
}
renderCards();

/*добавление карточки*/
const addButtonSubmit = document.querySelector('.popup-add__button');
const cardName = document.querySelector('.popup-add__item_type_name'); 
const cardSource = document.querySelector('.popup-add__item_type_source');
const addForm = document.querySelector('.popup-add__form');

function handleAddButtonSubmit(){
  event.preventDefault();
  const newCard ={};
  newCard.name = cardName.value;
  newCard.link = cardSource.value;
  prependCard(newCard);
  handleAddCloseButtonClick();
  addForm.reset();
};

addButtonSubmit.addEventListener('click', handleAddButtonSubmit);

/*открытие попапа*/
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');

function handleAddButtonClick(){
 openPopup(popupAdd);
};

addButton.addEventListener('click', handleAddButtonClick);


/*закрытие попапа*/
const closeButtonAdd = document.querySelector('.popup-add__close-button');

function handleAddCloseButtonClick(){
  closePopup(popupAdd);
};

closeButtonAdd.addEventListener('click', handleAddCloseButtonClick);

/*закрытие popup-img*/
const closeButtonImg = document.querySelector('.popup-img__close-button');

function handlecloseButtonImgClick(){
  closePopup(popupImg);
}
closeButtonImg.addEventListener('click',handlecloseButtonImgClick);


/*добавляем функцию reset*/
function resetForm(item){
  item.reset(evt);
}
/*очистка формы добавления карточки от ошибок при открытии*/

addButton.addEventListener('click', clearForm);
editButton.addEventListener('click', clearForm);

function clearForm (){
 const formVisible = document.querySelector('.popup_visible');

const inputErrorList = Array.from(formVisible.querySelectorAll('.popup__item'));
const spanErrorList = Array.from(formVisible.querySelectorAll('.popup__item-error'));
  inputErrorList.forEach(function(inputItem){
  inputItem.classList.remove('popup__item_type_error');
  })
  spanErrorList.forEach(function(spanItem){
    spanItem.classList.remove('popup__item-error_active');
  })
  if(formVisible.classList.contains('popup-add')){
    inputErrorList.forEach(function(inputItem){
      inputItem.value="";
      })
      addButtonSubmit.classList.add('popup__button_disabled');
  }
  if(formVisible.classList.contains('popup-edit')){
    formEditButtonSubmit.classList.remove('popup__button_disabled');
  }
}

/*закрытие по esc*/

function openPopup(item) {    
  item.classList.add('popup_visible');
  document.addEventListener('keyup', esc);
  document.addEventListener('mousedown', handleLayoutClick);
}
function closePopup(item) {
  item.classList.remove('popup_visible');
  document.removeEventListener('keyup', esc);
  document.removeEventListener('mousedown', handleLayoutClick);

}

function esc (evt){
  if (evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_visible');
closePopup(openedPopup);
     }   
    }

    function handleLayoutClick(evt){
if(evt.target.classList.contains('popup')){
  closePopup(evt.target);
}
    }
