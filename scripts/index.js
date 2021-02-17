const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const closeButtonEdit = document.querySelector('.popup-edit__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formEdit = document.querySelector('.popup-edit__form');
const formEditName = document.querySelector('.popup-edit__item_type_name');
const formEditAbout = document.querySelector('.popup-edit__item_type_about');


function handleEditButtonClick(){
  formEditName.value = profileName.textContent;
  formEditAbout.value = profileAbout.textContent;
  popupEdit.classList.add('popup_visible');
}
function handleEditSubmit(event){
  event.preventDefault();
  profileName.textContent = formEditName.value;
  profileAbout.textContent = formEditAbout.value;
  handleEditCloseButtonClick();
}
function handleEditCloseButtonClick(){
  popupEdit.classList.remove('popup_visible');
}

formEdit.addEventListener('submit', handleEditSubmit);
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
    card.querySelector('.element__photo').src = item.link;
    card.querySelector('.element__photo').alt = item.name;
    card.querySelector('.element__delete').addEventListener('click', function(evt){
    const deleteButton = evt.target;
    card.remove();
  });
  card.querySelector('.element__like').addEventListener('click', function(evt) {
    const like = evt.target;
    like.classList.toggle('element__like_active');
  });
  card.querySelector('.element__photo').addEventListener('click',function(evt){
    const imgClick = evt.target;
    popupImg.classList.add('popup_visible'); 
    const imgOpened = document.querySelector('.popup-img__item');
    imgOpened.src = imgClick.src;
    imgOpened.alt = imgClick.alt;
  });
  return card;
};
/*разделение функции создания карточек на 2 части*/
function prependCard(item){
  elementsList.prepend(item);
};
/*рендеринг карточек*/
function renderCards() {
  const cardsCreate = initialCards.map(createCard);
  const cardPrepend = cardsCreate.map(prependCard);
}
renderCards();

/*добавление карточки*/
const addButtonSubmit = document.querySelector('.popup-add__button');
const cardName = document.querySelector('.popup-add__item_type_name'); 
const cardSource = document.querySelector('.popup-add__item_type_source');

function handleAddButtonSubmit(){
  event.preventDefault(); 
  initialCards.push({});
  const newCard = initialCards[initialCards.length - 1];
  newCard.name = cardName.value;
  newCard.link = cardSource.value;
  prependCard(createCard(newCard));
  handleAddCloseButtonClick();
  cardName.value="";
  cardSource.value="";
};

addButtonSubmit.addEventListener('click', handleAddButtonSubmit);

/*открытие попапа*/
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');

function handleAddButtonClick(){
  popupAdd.classList.add('popup_visible')
};

addButton.addEventListener('click', handleAddButtonClick);

/*закрытие попапа*/
const closeButtonAdd = document.querySelector('.popup-add__close-button');

function handleAddCloseButtonClick(){
  popupAdd.classList.remove('popup_visible')
};

closeButtonAdd.addEventListener('click', handleAddCloseButtonClick);

/*закрытие popup-img*/
const closeButtonImg = document.querySelector('.popup-img__close-button');

function handlecloseButtonImgClick(){
  popupImg.classList.remove('popup_visible');
}
closeButtonImg.addEventListener('click',handlecloseButtonImgClick);