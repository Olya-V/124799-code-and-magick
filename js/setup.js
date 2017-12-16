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
 * @description показывает блок .setup.
 */
var showSetup = function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');
};

/**
 * @description показывает блок .setup-similar
 */
var showSimilar = function () {
  var similar = document.querySelector('.setup-similar');
  similar.classList.remove('hidden');
};

/**
 * @description создает объект волшебник со свойствами имя, цвет мантии и цвет глаз.
 * @return {object} {{wizardName: string, coatColor: string, eyesColor: string}}
 */
var wizard = function () {
  var name = [names[randomNumber(0, names.length)], surnames[randomNumber(0, surnames.length)]].sort().join(' ');
  var coatColor = coatColors[randomNumber(0, coatColors.length - 1)];
  var eyesColor = eyesColors[randomNumber(0, eyesColors.length - 1)];
  return {
    'wizardName': name,
    'coatColor': coatColor,
    'eyesColor': eyesColor
  };
};

/**
 * @description создает заданное количество волшебников и помещает их во фрагемент.
 * @param {number} numberOfWizards сколько волшебников создать.
 * @return {DocumentFragment} фрагмент с волшбениками.
 */
var generateWizards = function (numberOfWizards) {
  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#similar-wizard-template');
  for (var i = 1; i <= numberOfWizards; i++) {
    /* найдем элементы в разметке*/
    var newWizard = template.content.cloneNode(true);
    var name = newWizard.querySelector('.setup-similar-label');
    var coatColor = newWizard.querySelector('.wizard-coat');
    var eyesColor = newWizard.querySelector('.wizard-eyes');
    /* создаем волшебника */
    var item = wizard();
    /* задаем свойства волшебнику */
    var newName = item.wizardName;
    var newCoat = 'fill: ' + item.coatColor;
    var newEyes = 'fill: ' + item.eyesColor;
    /* вставляем свойства в разметку шаблона волшебника */
    name.textContent = newName;
    coatColor.setAttribute('style', newCoat);
    eyesColor.setAttribute('style', newEyes);
    /* присоединяем волшебника во фрагмент похожих персонажей*/
    fragment.appendChild(newWizard);
  }
  return fragment;
};

/**
 * @description отображает созданных волшебников в списке похожих персонажей.
 * Для отрисовки персонажей со случайными свойствами вызывается функция @generateWizards.
 * @param {number} numberOfWizards
 */
var showWizards = function (numberOfWizards) {
  showSetup();
  var list = document.querySelector('.setup-similar-list');
  var fragment = generateWizards(numberOfWizards);
  list.appendChild(fragment);
  showSimilar();
};

showWizards(4);
