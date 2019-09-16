'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var COLOR_BLACK = '#000';


var renderCloud = function (ctx, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomShade = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', '16px PT Mono');

  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP * 1.5, CLOUD_Y + FONT_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP * 1.5, CLOUD_Y + (FONT_GAP * 2) + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var positionX = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;
    var playerNameY = CLOUD_HEIGHT - CLOUD_GAP / 2;
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(players[i], positionX, playerNameY);


    var columnY = ((CLOUD_Y + GAP * 1.7) + BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime));
    var columnHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var randomColor = 'hsl(240, 100%,' + getRandomShade(10, 90) + '%)';
    var columnColor = players[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = randomColor;
    ctx.fillRect(positionX, columnY, BAR_WIDTH, columnHeight);


    var timesY = ((CLOUD_Y + GAP * 1.7) + BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)) - CLOUD_GAP;
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(Math.floor(times[i]), positionX, timesY);
  }
};
