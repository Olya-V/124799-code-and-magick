'use strict';
window.renderStatistics = function (context, names, times) {
  var cloudPoints = [[220, 10], [220, 20], [230, 20], [230, 30], [240, 30], [240, 40], [260, 40], [260, 30], [280, 30], [280, 20], [290, 20],
    [290, 10], [300, 10], [300, 0], [320, 0], [320, 10], [330, 10], [330, 20], [340, 20], [340, 10], [350, 10], [350, 20],
    [360, 20], [360, 30], [380, 30], [380, 20], [390, 20], [390, 10], [400, 10], [400, 0], [430, 0], [430, 10], [460, 10],
    [460, 0], [480, 0], [480, 10], [500, 10], [500, 20], [510, 20], [510, 30], [520, 30], [520, 250], [510, 250], [510, 260],
    [500, 260], [500, 270], [120, 270], [120, 260], [110, 260], [110, 250], [100, 250], [100, 60], [100, 60], [100, 40], [120, 30], [130, 30], [130, 20], [140, 20], [140, 10],
    [160, 10], [160, 0], [200, 0]];

  /**
   * @description соединяет все точки координат фигуры.
   * @param {array} arrayOfPoints  - массив с координатами фигуры [[x, y],[x, y], [x, y]].
   * @param {number} shift - число на которое сдвигаем координаты x и y из массива arrayOfPoints в каждой точке (подходит для создания тени аналогичной фигуре формы).
   * @param {object} ctx - контекст рисования canvas.
   * ничего не возвращает, @see drawShape, при вызове внутри drawShape отрисовывает фигуру.
   */
  var connectPoints = function (arrayOfPoints, shift, ctx) {
    arrayOfPoints = arrayOfPoints || [];
    shift = shift || 0;
    for (var i = 0; i <= arrayOfPoints.length - 1; i++) {
      ctx.lineTo(arrayOfPoints[i][0] + shift, arrayOfPoints[i][1] + shift);
    }
  };
  /**
   * @description отрисовывает одну фиругу из заданной точки, заливает ее цветом.
   * @param {string} color  цвет заливки фигуры, ex: '#000000', 'rgba(255, 0, 0, 1)'.
   * @param {array} startPoints массив из двух элементов - координаты [x, y] для начала рисования фигуры.
   * @param {array} arrayOfPoints  массив с координатами точек фигуры [[x, y],[x, y], [x, y]].
   * @param {number} shift - число на которое сдвигаем координаты x и y из массива arrayOfPoints в каждой точке (подходит для создания тени аналогичной фигуре формы).
   * @param {object} ctx - контекст рисования canvas.
   * ничего не возвращает, отрисовывает фигуру, залитую цветом.
   */
  var drawShape = function (color, startPoints, arrayOfPoints, shift, ctx) {
    ctx.fillStyle = color || '#000000';
    startPoints = startPoints || [];
    arrayOfPoints = arrayOfPoints || [];
    shift = shift || 0;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(startPoints[0], startPoints[1]);
    connectPoints(arrayOfPoints, shift, ctx);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };
  /**
   * @description выводит текст с заданным шрифтом и цветом в указанной точке координат.
   * @param {string} text
   * @param {number} startPointX начальная координата по Y.
   * @param {number} startPointY начальная координата по X.
   * @param {object} ctx контекст рисования canvas.
   * @param {string} color цвет текста, ex: '#000000', 'rgba(255, 0, 0, 1)'.
   * @param {string} font 'размер шрифта, семейство шрифта', ex: '16px PT Mono'.
   * @param {string} baseline выравнивание текста.
   */
  var writeText = function (text, startPointX, startPointY, ctx, color, font, baseline) {
    ctx.fillStyle = color || '#000000';
    ctx.font = font || '16px PT Mono';
    ctx.textBaseLine = baseline || 'hanging';
    ctx.fillText(text, startPointX, startPointY);
  };
  /**
   * @description выводит имена и время игроков для диаграммы.
   * @param {array} arrayOfNames массив с именами игроков.
   * @param {array} arrayOfTimes массив со временем игры игроков.
   * @param {object} ctx контекст рисования canvas.
   * @param {number} startPointX начальная координата по X для отображения имени и времени первого игрока, для последующих игроков пересчитывается @see positionX.
   * @param {number} startPointYRect начальная координата Y (нижняя граница) для отрисовки столбцов диаграммы, верняя точка столбца расчитывается @see positionYRect.
   * @param {number} startPointYName координата Y для отображения имени игрока.
   * @param {number} widthRect ширина столбцов диаграммы.
   * @param {number} spaceBetweenRect расстояние между столбцами диаграммы.
   * @param {number} heightRatio - соотношение времени к высоте, ex: каждая секунда = 10px.
   * ничего не возвращает, выводит имена и время игроков для диаграммы.
   */
  var writeTimeAndName = function (arrayOfNames, arrayOfTimes, ctx, startPointX, startPointYRect, startPointYName, widthRect, spaceBetweenRect, heightRatio) {
    arrayOfNames = arrayOfNames || [];
    arrayOfTimes = arrayOfTimes || [];
    startPointX = startPointX || 150;
    startPointYRect = startPointYRect || 230;
    startPointYName = startPointYName || 260;
    widthRect = widthRect || 40;
    spaceBetweenRect = spaceBetweenRect || 50;
    heightRatio = heightRatio || 10;

    for (var i = 0; i <= arrayOfNames.length - 1; i++) {
      var positionX = startPointX + (widthRect + spaceBetweenRect) * i;
      var timeInSek = arrayOfTimes[i] / 1000;
      var heightRect = timeInSek * heightRatio;
      var positionYRect = startPointYRect - heightRect;
      var positionYTime = positionYRect - 10;
      writeText(arrayOfNames[i], positionX, startPointYName, ctx);
      writeText(timeInSek.toFixed(2) + 'с', positionX, positionYTime, ctx);
    }
  };
  /**
   * @description отрисовывает столбца диаграммы со временем игры участников
   * @param {array} arrayOfNames массив с именами игроков.
   * @param {array} arrayOfTimes массив со временем игры игроков.
   * @param {object} ctx контекст рисования canvas.
   * @param {number} startPointX начальная координата по X для отображения имени и времени первого игрока, для последующих игроков пересчитывается @see positionX.
   * @param {number} startPointYRect начальная координата Y (нижняя граница) для отрисовки столбцов диаграммы, верняя точка столбца расчитывается @see positionYRect.
   * @param {number} widthRect ширина столбцов диаграммы.
   * @param {number} spaceBetweenRect расстояние между столбцами диаграммы.
   * @param {number} heightRatio - соотношение времени к высоте, ex: каждая секунда = 10px.
   * ничего не возвращает, выводит имена и время игроков для диаграммы.
   */
  var drawRect = function (arrayOfNames, arrayOfTimes, ctx, startPointX, startPointYRect, widthRect, spaceBetweenRect, heightRatio) {
    arrayOfNames = arrayOfNames || [];
    arrayOfTimes = arrayOfTimes || [];
    startPointX = startPointX || 150;
    startPointYRect = startPointYRect || 230;
    widthRect = widthRect || 40;
    spaceBetweenRect = spaceBetweenRect || 50;
    heightRatio = heightRatio || 10;

    for (var i = 0; i <= arrayOfNames.length - 1; i++) {
      var positionX = startPointX + (widthRect + spaceBetweenRect) * i;
      var timeInSek = arrayOfTimes[i] / 1000;
      var heightRect = timeInSek * heightRatio;
      var positionYRect = startPointYRect - heightRect;
      var opacity = Math.random().toFixed(1);
      ctx.fillStyle = 'rgba(0, 0, 255,' + opacity + ' )';
      if (arrayOfNames[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(positionX, (positionYRect), widthRect, heightRect);
    }
  };
  /**
   * @description отрисовывает диаграмму времени игроков и подписывает имена игроков и время игры
   * @param {array} arrayOfNames массив с именами игроков.
   * @param {array} arrayOfTimes массив со временем игры игроков.
   * @param {object} ctx контекст рисования canvas.
   */
  var drawHistogram = function (arrayOfNames, arrayOfTimes, ctx) {
    writeTimeAndName(arrayOfNames, arrayOfTimes, ctx);
    drawRect(arrayOfNames, arrayOfTimes, ctx);
  };

  drawShape('rgba(0, 0, 0, 0.7)', [200, 10], cloudPoints, 10, context);
  drawShape('#d7ecfd', [200, 10], cloudPoints, 0, context);
  writeText('Ура вы победили!', 120, 70, context);
  writeText('Список результатов:', 120, 95, context);
  drawHistogram(names, times, context);
};
