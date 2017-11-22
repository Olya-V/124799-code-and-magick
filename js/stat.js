window.renderStatistics = function(ctx, names, times) {
  var cloudPoints = [[220, 10], [220, 20], [230, 20], [230, 30], [240, 30], [240, 40], [260, 40], [260, 30], [280, 30], [280, 20], [290, 20],
                    [290, 10], [300, 10], [300, 0], [320, 0], [320, 10], [330, 10], [330, 20], [340, 20], [340, 10], [350, 10], [350, 20],
                    [360, 20], [360, 30], [380, 30], [380, 20], [390, 20], [390, 10], [400, 10], [400, 0], [430, 0], [430, 10], [460, 10],
                    [460, 0], [480, 0], [480, 10], [500, 10], [500, 20], [510, 20], [510, 30], [520, 30], [520, 250], [510, 250], [510, 260],
                    [500, 260], [500, 270], [120, 270], [120, 260], [110, 260], [110, 250], [100, 250], [100, 60], [100, 60], [100, 40], [120, 30], [130, 30], [130, 20], [140, 20], [140, 10],
                    [160, 10], [160, 0], [200, 0]];

  var draw = function (startPoints, arrayOfPoints, shift) {
    ctx.beginPath();
    ctx.moveTo(startPoints[0], startPoints[1]);

    for(var i = 0; i <= arrayOfPoints.length - 1; i++) {
      ctx.lineTo(arrayOfPoints[i][0] + shift, arrayOfPoints[i][1] + shift);
    }

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  draw([200, 10], cloudPoints, 10);

  ctx.fillStyle = "#d7ecfd";
  draw([200, 10], cloudPoints, 0);

  ctx.fillStyle = "#000000";
  ctx.font = '16px PT Mono';
  ctx.textBaseLine = 'hanging'
  ctx.fillText('Ура вы победили!', 120, 70);
  ctx.fillText('Список результатов:', 120, 100);

  var maxHeightRect = 150;
  var widthRect = 40;
  var minHeight = 0;
  var heightRatio = 10;
  var space = 50;
  var opacity =  function() {
    Math.random();
  };


  var histogram = function (arrayOfNames, arrayOfTimes) {
    var startPointX = 150;

    for (var i = 0;  i <= arrayOfNames.length - 1; i++) {
      var positionX = startPointX + (widthRect + space) * i;
      var timeInSek = arrayOfTimes[i] / 1000;
      var heightRect = timeInSek * heightRatio;
      var positionYRect = 230 - heightRect;
      var positionYTime = positionYRect - 10;

      ctx.fillText(arrayOfNames[i], positionX, 260);
      ctx.fillText(timeInSek.toFixed(2) + 'с', positionX, positionYTime);


      if (arrayOfNames[i] == 'Вы') {
         ctx.fillStyle = "rgba(255, 0, 0, 1)";
       } else {
        ctx.fillStyle = "rgba(0, 0, 255, Math.random();";
      }

      ctx.fillRect(positionX, (positionYRect), widthRect, heightRect);
    };


  };

  histogram(names, times);


};


