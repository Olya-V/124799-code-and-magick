'use strict';
var showSetup = function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');
};

showSetup();

var wizard = {
  'name': function () {
    var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var randomNumber = function (min, max) {
      return Math.floor(min + Math.random() * (max - min));
    };
    return names[randomNumber(0, names.length)] + ' ' + surnames[randomNumber(0, surnames.length)];
  },
  'coatColor': function () {
    var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var randomNumber = function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };
    return colors[randomNumber(0, colors.length - 1)];
  },
  'eyesColor': function () {
    var colors = ['black', 'red', 'blue', 'yellow', 'green'];
    var randomNumber = function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };
    return colors[randomNumber(0, colors.length - 1)];
  }
};

var createWizzards = function (numberOfWizards, wizardObject) {
  var template = document.querySelector('#similar-wizard-template');
  var fragment = document.createDocumentFragment();
  var list = document.querySelector('.setup-similar-list');
  var similar = document.querySelector('.setup-similar');
  for (var i = 1; i <= numberOfWizards; i++) {
    var newWizard = template.content.cloneNode(true);
    var name = newWizard.querySelector('.setup-similar-label');
    var coatColor = newWizard.querySelector('.wizard-coat');
    var eyesColor = newWizard.querySelector('.wizard-eyes');
    var newName = wizardObject.name();
    var newCoat = wizardObject.coatColor();
    var newYeys = wizardObject.eyesColor();
    name.textContent = newName;
    coatColor.setAttribute('style', 'fill: newCoat');
    eyesColor.setAttribute('style', 'fill: newYeys');
    fragment.appendChild(newWizard);
  }
  list.appendChild(fragment);
  similar.classList.remove('hidden');
};

createWizzards(4, wizard);
