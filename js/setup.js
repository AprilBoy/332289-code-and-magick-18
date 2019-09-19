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
var MAX_VALUE = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrayElem = function (arr) {
  var min = 0;
  var max = Math.floor(arr.length - 1);
  return arr[Math.floor(Math.random() * (max - min + 1)) + min];
};

var getRandomWizards = function () {
  for (i = 0; i < MAX_VALUE; i++) {
    wizards.push({
      name: getRandomArrayElem(NAMES) + ' ' + getRandomArrayElem(SURNAMES),
      coatColor: getRandomArrayElem(COATCOLOR),
      eyeColor: getRandomArrayElem(EYESCOLOR)
    });
  }
  return wizards;
};
getRandomWizards();


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
