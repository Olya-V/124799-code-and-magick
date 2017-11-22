/*window.renderStatistics = function(ctx, names, times) {
  var cloudPoints = [[220, 10], [220, 20], [230, 20], [230, 30], [240, 30], [240, 40], [260, 40], [260, 30], [280, 30], [280, 20], [290, 20],
                    [290, 10], [300, 10], [300, 0], [320, 0], [320, 10], [330, 10], [330, 20], [340, 20], [340, 10], [350, 10], [350, 20],
                    [360, 20], [360, 30], [380, 30], [380, 20], [390, 20], [390, 10], [400, 10], [400, 0], [430, 0], [430, 10], [460, 10],
                    [460, 0], [480, 0], [480, 10], [500, 10], [500, 20], [510, 20], [510, 30], [520, 30], [520, 210], [510, 210], [510, 220],
                    [490, 220], [490, 230], [470, 230], [470, 240], [460, 240], [460, 250], [440, 250], [440, 260], [420, 260], [420, 270],
                    [190, 270], [190, 260], [170, 260], [170, 250], [160, 250], [160, 240], [150, 240], [150, 230], [130, 230], [130, 220],
                    [110, 220], [110, 210], [100, 210], [100, 60], [100, 60], [100, 40], [120, 30], [130, 30], [130, 20], [140, 20], [140, 10],
                    [160, 10], [160, 0], [200, 0]];

  var draw = function(startPoints, arrayOfPoints) {
    ctx.beginPath();
    ctx.moveTo(startPoints[0], startPoints[1]);
    for(var i = 0; i >= arrayOfPoints - 1; i++) {
      ctx.lineTo(arrayOfPoints[i][0], arrayOfPoints[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  ctx.fillStyle = "#d7ecfd";
  ctx.strokeStyle = "#c1d4e3";
  draw([200, 10], cloudPoints);
};*/


window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = "#d7ecfd";
  ctx.strokeStyle = "#c1d4e3";
  ctx.beginPath();
  ctx.moveTo(200, 10);
  ctx.lineTo(220, 10);
  ctx.lineTo(220, 20);
  ctx.lineTo(230, 20);
  ctx.lineTo(230, 30);
  ctx.lineTo(240, 30);
  ctx.lineTo(240, 40);
  ctx.lineTo(260, 40);
  ctx.lineTo(260, 30);
  ctx.lineTo(280, 30);
  ctx.lineTo(280, 20);
  ctx.lineTo(290, 20);
  ctx.lineTo(290, 10);
  ctx.lineTo(300, 10);
  ctx.lineTo(300, 0);
  ctx.lineTo(320, 0);
  ctx.lineTo(320, 10);
  ctx.lineTo(330, 10);
  ctx.lineTo(330, 20);
  ctx.lineTo(340, 20);
  ctx.lineTo(340, 10);
  ctx.lineTo(350, 10);
  ctx.lineTo(350, 20);
  ctx.lineTo(360, 20);
  ctx.lineTo(360, 30);
  ctx.lineTo(380, 30);
  ctx.lineTo(380, 20);
  ctx.lineTo(390, 20);
  ctx.lineTo(390, 10);
  ctx.lineTo(400, 10);
  ctx.lineTo(400, 0);
  ctx.lineTo(430, 0);
  ctx.lineTo(430, 10);
  ctx.lineTo(460, 10);
  ctx.lineTo(460, 0);
  ctx.lineTo(480, 0);
  ctx.lineTo(480, 10);
  ctx.lineTo(500, 10);
  ctx.lineTo(500, 20);
  ctx.lineTo(510, 20);
  ctx.lineTo(510, 30);
  ctx.lineTo(520, 30);
  ctx.lineTo(520, 210);
  ctx.lineTo(510, 210);
  ctx.lineTo(510, 220);
  ctx.lineTo(490, 220);
  ctx.lineTo(490, 230);
  ctx.lineTo(470, 230);
  ctx.lineTo(470, 240);
  ctx.lineTo(460, 240);
  ctx.lineTo(460, 250);
  ctx.lineTo(440, 250);
  ctx.lineTo(440, 260);
  ctx.lineTo(420, 260);
  ctx.lineTo(420, 270);
  ctx.lineTo(190, 270);
  ctx.lineTo(190, 260);
  ctx.lineTo(170, 260);
  ctx.lineTo(170, 250);
  ctx.lineTo(160, 250);
  ctx.lineTo(160, 240);
  ctx.lineTo(150, 240);
  ctx.lineTo(150, 230);
  ctx.lineTo(130, 230);
  ctx.lineTo(130, 220);
  ctx.lineTo(110, 220);
  ctx.lineTo(110, 210);
  ctx.lineTo(100, 210);
  ctx.lineTo(100, 60);
  ctx.lineTo(100, 60);
  ctx.lineTo(100, 40);
  ctx.lineTo(120, 40);
  ctx.lineTo(120, 30);
  ctx.lineTo(130, 30);
  ctx.lineTo(130, 20);
  ctx.lineTo(140, 20);
  ctx.lineTo(140, 10);
  ctx.lineTo(160, 10);
  ctx.lineTo(160, 0);
  ctx.lineTo(200, 0);
  ctx.lineTo(200, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};
