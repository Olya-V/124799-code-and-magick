window.renderStatistics = function(ctx, names, times) {
  var cloudPoints = [[220, 10], [220, 20], [230, 20], [230, 30], [240, 30], [240, 40], [260, 40], [260, 30], [280, 30], [280, 20], [290, 20],
                    [290, 10], [300, 10], [300, 0], [320, 0], [320, 10], [330, 10], [330, 20], [340, 20], [340, 10], [350, 10], [350, 20],
                    [360, 20], [360, 30], [380, 30], [380, 20], [390, 20], [390, 10], [400, 10], [400, 0], [430, 0], [430, 10], [460, 10],
                    [460, 0], [480, 0], [480, 10], [500, 10], [500, 20], [510, 20], [510, 30], [520, 30], [520, 250], [510, 250], [510, 260],
                    [500, 260], [500, 270], [120, 270], [120, 260], [110, 260], [110, 250], [100, 250], [100, 60], [100, 60], [100, 40], [120, 30], [130, 30], [130, 20], [140, 20], [140, 10],
                    [160, 10], [160, 0], [200, 0]];

  var connectPoints = function(arrayOfPoints, shift) {
    for(var i = 0; i <= arrayOfPoints.length - 1; i++) {
      ctx.lineTo(arrayOfPoints[i][0] + shift, arrayOfPoints[i][1] + shift);
    };
  };

  var drawShape = function (color, startPoints, arrayOfPoints, shift) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(startPoints[0], startPoints[1]);
    connectPoints(arrayOfPoints, shift);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  var writeText = function (text, startPointX, startPointY, color, font, baseline) {
    ctx.fillStyle = color || '#000000';
    ctx.font = font || '16px PT Mono';
    ctx.textBaseLine = baseline || 'hanging';
    ctx.fillText(text, startPointX, startPointY);
  };

  var maxHeightRect = 150;
  var widthRect = 40;
  var minHeight = 0;
  var heightRatio = 10;
  var spaceBetweenRect = 50;
  var startPointX = 150;
  var startPointY = 230;

  var writeTimeAndName = function (arrayOfNames, arrayOfTimes) {
    for (var i = 0;  i <= arrayOfNames.length - 1; i++) {
      var positionX = startPointX + (widthRect + spaceBetweenRect) * i;
      var timeInSek = arrayOfTimes[i] / 1000;
      var heightRect = timeInSek * heightRatio;
      var positionYRect = startPointY - heightRect;
      var positionYTime = positionYRect - 10;
      ctx.fillText(arrayOfNames[i], positionX, 260);
      ctx.fillText(timeInSek.toFixed(2) + 'с', positionX, positionYTime);
    };
  };

  var drawRect = function (arrayOfNames, arrayOfTimes) {
    for (var i = 0;  i <= arrayOfNames.length - 1; i++) {
      var positionX = startPointX + (widthRect + spaceBetweenRect) * i;
      var timeInSek = arrayOfTimes[i] / 1000;
      var heightRect = timeInSek * heightRatio;
      var positionYRect = startPointY - heightRect;
      var positionYTime = positionYRect - 10;
      var opacity = Math.random().toFixed(1);
      ctx.fillStyle = 'rgba(0, 0, 255,' + opacity + ' )';
      if (arrayOfNames[i] == 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(positionX, (positionYRect), widthRect, heightRect);
    };
  };

  var drawHistogram = function (arrayOfNames, arrayOfTimes) {
    writeTimeAndName(arrayOfNames, arrayOfTimes);
    drawRect(arrayOfNames, arrayOfTimes);
  };

  drawShape('rgba(0, 0, 0, 0.7)', [200, 10], cloudPoints, 10);
  drawShape("#d7ecfd",[200, 10], cloudPoints, 0);
  writeText('Ура вы победили!', 120, 70);
  writeText('Список результатов:', 120, 95);
  drawHistogram(names, times);
};


