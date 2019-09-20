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
var USER_DIALOG = document.querySelector('.setup');
var SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_ELEMENT = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomArrayElem = function (arr) {
  var startIndex = Math.floor(Math.random() * (arr.length - 1));
  var randomArrayElem = arr.splice(startIndex, 1);
  console.log(randomArrayElem);
  return randomArrayElem;
};

var getWizardsArray = function () {
  var wizards = [];
  for (var i = 0; i < MAX_VALUE; i++) {
    wizards.push({
      name: getRandomArrayElem(NAMES[0]) + ' ' + getRandomArrayElem(SURNAMES[0]),
      coatColor: getRandomArrayElem(COATCOLOR[0]),
      eyeColor: getRandomArrayElem(EYESCOLOR[0])
    });
  }
  return wizards;
};

var prepareWizardNode = function (currentWizard) {
  var wizardElement = SIMILAR_WIZARD_ELEMENT.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = currentWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = currentWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = currentWizard.eyeColor;

  return wizardElement;
};

var renderWizards = function () {
  var wizards = getWizardsArray();
  var fragment = document.createDocumentFragment();
  USER_DIALOG.classList.remove('hidden');
  USER_DIALOG.querySelector('.setup-similar').classList.remove('hidden');

  for (var i = 0; i < wizards.length; i++) {
    var wizard = prepareWizardNode(wizards[i]);
    fragment.appendChild(wizard);
  }

  SIMILAR_LIST_ELEMENT.appendChild(fragment);
};
renderWizards();
