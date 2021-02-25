
function showInputError(formElement, inputElement, errorMessage){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${validationSettings.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${validationSettings.errorClass}`);
};

function hideInputError(formElement, inputElement){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${validationSettings.inputErrorClass}`);
  errorElement.classList.remove(`${validationSettings.errorClass}`);
  errorElement.textContent="";
};

function isValid(formElement, inputElement){
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else{
    hideInputError(formElement, inputElement);
  }
};

function setEventListener(formElement){

  const inputList = Array.from(formElement.querySelectorAll(`${validationSettings.inputSelector}`));
  const buttonElement = formElement.querySelector(`${validationSettings.submitButtonSelector}`);
 toggleButtonState(inputList, buttonElement);
  inputList.forEach(function (inputElement){
    inputElement.addEventListener('input', function(){
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement)
    });
  });
};



function enableValidation(){
  const formList = Array.from(document.querySelectorAll(`${validationSettings.formSelector}`));
  formList.forEach(function(formElement){
    setEventListener(formElement);
  });
}

function hasInvalidInput(inputList){
  inputList.some(function(inputElement){
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
  const hasNotValidInput = inputList.some(findAtLeastOneNotValid);
  if (hasNotValidInput) {
    buttonElement.classList.add(`${validationSettings.inactiveButtonClass}`);

  } else {   
    buttonElement.classList.remove(`${validationSettings.inactiveButtonClass}`);
  }
};
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}; 


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}); 
