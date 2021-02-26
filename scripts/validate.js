
function showInputError(formElement, inputElement, errorMessage, validationSettings){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.errorClass);
};

function hideInputError(formElement, inputElement, validationSettings){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorElement.classList.remove(validationSettings.errorClass);
  errorElement.textContent="";
};

function isValid(formElement, inputElement, validationSettings){
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else{
    hideInputError(formElement, inputElement, validationSettings);
  }
};
function setEventListener(formElement, validationSettings){

  const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
  const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
 toggleButtonState(inputList, buttonElement, validationSettings);
  inputList.forEach(function (inputElement){
    inputElement.addEventListener('input', function(){
      isValid(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings)
    });
  });
};



function enableValidation(validationSettings){
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach(function(formElement){
    setEventListener(formElement,validationSettings);
  });
}
const toggleButtonState = (inputList, buttonElement, validationSettings) => {
  const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
  const hasNotValidInput = inputList.some(findAtLeastOneNotValid);
  if (hasNotValidInput) {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);

  } else {   
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
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


enableValidation(validationSettings);