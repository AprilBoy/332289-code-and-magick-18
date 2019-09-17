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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandomShade = function (hue, saturation, min, max) {
  var lightness = (Math.random() * (max - min) + min) + '%';
  var randomShade = 'hsl(' + hue + ',' + saturation + ',' + lightness + ')';
  return randomShade;
};

var createColumn = function (ctx, currentPlayer, currentTime, item, maxTimeFunc) {

  var positionX = CLOUD_X + GAP + (GAP + BAR_WIDTH) * item;
  var playerNameY = CLOUD_HEIGHT - CLOUD_GAP / 2;
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText(currentPlayer, positionX, playerNameY);

  var columnHeight = (BAR_HEIGHT * currentTime) / maxTimeFunc;
  var columnY = (CLOUD_Y + GAP * 1.7) + BAR_HEIGHT - columnHeight;
  ctx.fillStyle = currentPlayer === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomShade('240', '100%', 10, 90);
  ctx.fillRect(positionX, columnY, BAR_WIDTH, columnHeight);

  var timesY = columnY - CLOUD_GAP;
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText(Math.floor(currentTime), positionX, timesY);
};


window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = COLOR_BLACK;
  var headingX = CLOUD_X + FONT_GAP * 1.5;
  var headingY = CLOUD_Y + FONT_GAP * 2;
  ctx.fillText('Ура вы победили!', headingX, headingY);
  ctx.fillText('Список результатов:', headingX, headingY + TEXT_HEIGHT);


  for (var i = 0; i < players.length; i++) {
    createColumn(ctx, players[i], times[i], i, getMaxElement(times));
  }
};
