'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COATCOLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYESCOLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var USER_DIALOG = document.querySelector('.setup');
var SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_ELEMENT = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomArrayElem = function (arr) {
  var min = 0;
  var max = Math.floor(arr.length - 1);
  return arr[Math.floor(Math.random() * (max - min + 1)) + min];
};

var getRandomWizards = function () {
  var MAX_VALUE = 4;
  var wizards = [];
  for (var i = 0; i < MAX_VALUE; i++) {
    wizards.push({
      name: getRandomArrayElem(NAMES) + ' ' + getRandomArrayElem(SURNAMES),
      coatColor: getRandomArrayElem(COATCOLOR),
      eyeColor: getRandomArrayElem(EYESCOLOR)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizards = getRandomWizards();
  var wizardElement = SIMILAR_WIZARD_ELEMENT.cloneNode(true);
  var fragment = document.createDocumentFragment();
  USER_DIALOG.classList.remove('hidden');
  USER_DIALOG.querySelector('.setup-similar').classList.remove('hidden');
  SIMILAR_LIST_ELEMENT.appendChild(fragment);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
};
