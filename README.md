# Mesto Russia.  
**Mesto Russia** - Одностраничный сайт. Написан с использованием HTML, CSS, JavaScript. Сделан по макету из Figma.  Реализована резиновая верстка и адаптивность - верстка под расширение от 320 до 1280px. С помощью JS реализована технология попапов - форма изменения имени и вида деятельности пользователя, форма создания новой карточки и увеличение изображения по клику. Попапы открываются по клику и закрываются при нажатии Esc, клике на оверлей, нажатии на кнопку закрытия и на кнопку submit. Прописана отмена действия по умолчанию для кнопки submit. 

Первоначальный рендеринг 6 карточек осуществляется скриптом. Данные карточек находятся в массиве, состоящем из объектов с свойствами name и link. Скрипт поочередно клонирует  template элемент с разметкой карточки и переносит из массива значения для src, title и alt элемента. Также сразу навешиваются слушатели для реализации функции лайка, удаления карточки и создания попапа с увеличенным изображением. После этого элемент добавляется в DOM. 

Создание новой карточки из формы добавления происходит схожим образом, однако название и изображение нового элемента берутся из формы добавления карточки. 

Осуществлена технология валидации форм - прописаны требования к длине вводимого значения и типу (для поля URL).  Отключена встроенная браузерная валидация форм, валидация производится JS с использованием стандартных браузерных текстов ошибок. Если хотя бы одно поле не проходит валидацию, кнопка "сохранить" становится неактивной.
**Ссылка на сайт** - https://kseniiadanilenko.github.io/mesto/index.html
