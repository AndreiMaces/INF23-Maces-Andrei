var canvas = document.createElement("canvas");
var currX;
var currY;
var angle = 30;
var size = 100;

let tn = document.createTextNode(
  "If you press the button a canvas will appear!"
);

document.getElementsByClassName("myapp")[0].appendChild(tn);

function goToOrigin() {
  currX = (window.innerWidth - 100) / 2;
  currY = (window.innerHeight - 100) / 2;
  size = 20;
}

function generateRandomString() {
  let randNum = Math.floor(Math.random() * 6 + 4);
  let str = "";
  goToOrigin();
  for (let i = 0; i < randNum; i++) {
    str += generateRandomChar();
  }
  console.log(str);
  return str;
}

function generateRandomChar() {
  let randNum = Math.floor(Math.random() * 5 + 1);
  switch (randNum) {
    case 1:
      return "d";
    case 2:
      return "r";
    case 3:
      return "u";
    case 4:
      return "l";
    case 5:
      return "s";
    default:
      return "d";
  }
}

function start() {
  canvas.width = window.innerWidth - 100;
  canvas.height = window.innerHeight - 100;
  document.getElementsByClassName("myapp")[0].appendChild(canvas);
  for (let j = 0; j < 50; j++) {
    goToOrigin();
    let s = generateRandomString();
    for (var i = 0; i < 20000; i++) {
      parseString(s);
    }
  }
}

function parseChar(x) {
  var ctx = canvas.getContext("2d");
  switch (x) {
    case "d":
      down();
      break;
    case "r":
      right();
      break;
    case "u":
      up();
      break;
    case "l":
      left();
      break;
    case "s":
      size /= 1.1;
    default:
      break;
  }
}

function parseString(x) {
  for (let c in x) parseChar(x[c]);
}

function left() {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(currX, currY);
  ctx.lineTo(currX - size, currY);
  currX = currX - size;
  ctx.stroke();
}

function right() {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(currX, currY);
  ctx.lineTo(currX + size, currY);
  currX = currX + size;
  ctx.stroke();
}

function down() {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(currX, currY);
  ctx.lineTo(currX, currY + size);
  currY = currY + size;
  ctx.stroke();
}

function up() {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(currX, currY);
  ctx.lineTo(currX, currY - size);
  currY = currY - size;
  ctx.stroke();
}

// function rotate() {
//   var ctx = canvas.getContext("2d");
//   ctx.beginPath();
//   ctx.moveTo(currX, currY);
//   ctx.lineTo(currX * Math.sin(angle), currY * Math.cos(angle));
//   currX = currX * Math.sin(angle);
//   currY = currY * Math.cos(angle);
//   ctx.stroke();
// }
