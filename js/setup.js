'use strict';
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
/**
 * @description генерирует случайное число от min до max числа, включая max число.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
var randomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};
/**
 * @description объект волшебник состоит из свойств имя, цвет мантии и цвет глаз.
 * Свойство name:
 * Имя состоит из имени и фамилии.
 * Имя выводится из массива имен @see names,
 * идекс элемента с именем определяется рандомно функцией @randomNumber от 0 до длинны массива.
 * Фамилия выводится из массива фамилий @see surnames,
 * идекс элемента с фамилией определяется рандомно функцией @randomNumber от 0 до длинны массива.
 * Имя и фамилия выводятся в рандомном порядке через пробел.
 * Свойство coatColor:
 * цвет выводится из массива цветов @see coatColors,
 * идекс элемента с цветом определяется рандомно функцией @randomNumber от 0 до длинны массива.
 * Свойство eyesColor:
 * цвет выводится из массива цветов @see eyesColors,
 * идекс элемента с цветом определяется рандомно функцией @randomNumber от 0 до длинны массива.
 * @type {object}
 */
var wizard = {
  'name': function () {
    return [names[randomNumber(0, names.length)], surnames[randomNumber(0, surnames.length)]].sort().join(' ');
  },
  'coatColor': function () {
    return coatColors[randomNumber(0, coatColors.length - 1)];
  },
  'eyesColor': function () {
    return eyesColors[randomNumber(0, eyesColors.length - 1)];
  }
};
/**
 * @description показывает блок .setup.
 */
var showSetup = function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');
};
/**
 * @description на основе шаблона генерирует заданное число волшебников со свойствами переданного объекта.
 * @param {number} numberOfWizards число необходимых волшебников
 * @param {object} wizardObject объект волшебник со свовами name, coatColor, eyesColor.
 * @return {DocumentFragment} фрагмент заполненный сгенерированными волшебниками.
 */
var generateWizardAttributes = function (numberOfWizards, wizardObject) {
  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#similar-wizard-template');
  for (var i = 1; i <= numberOfWizards; i++) {
    var newWizard = template.content.cloneNode(true);
    var name = newWizard.querySelector('.setup-similar-label');
    var coatColor = newWizard.querySelector('.wizard-coat');
    var eyesColor = newWizard.querySelector('.wizard-eyes');
    var newName = wizardObject.name();
    var newCoat = 'fill: ' + wizardObject.coatColor();
    var newEyes = 'fill: ' + wizardObject.eyesColor();
    name.textContent = newName;
    coatColor.setAttribute('style', newCoat);
    eyesColor.setAttribute('style', newEyes);
    fragment.appendChild(newWizard);
  }
  return fragment;
};
/**
 * @description отображает созданных волшебников в списке похожих персонажей.
 * Для отрисовки персонажей со случайными свойствами вызывается функция @generateWizardAttributes,
 * для работы которой передаются параметры.
 * @param {number} numberOfWizards
 * @param {object} wizardObject
 */
var showWizards = function (numberOfWizards, wizardObject) {
  var list = document.querySelector('.setup-similar-list');
  var fragment = generateWizardAttributes(numberOfWizards, wizardObject);
  list.appendChild(fragment);
};
/**
 * @description показывает блок .setup-similar
 */
var showSimilar = function () {
  var similar = document.querySelector('.setup-similar');
  similar.classList.remove('hidden');
};
showSetup();
showWizards(4, wizard);
showSimilar();
