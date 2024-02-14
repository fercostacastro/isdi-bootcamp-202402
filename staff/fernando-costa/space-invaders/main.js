var ship = document.getElementById("ship");
var alien = document.getElementById("alien");

var x = 46;
var y = 90;

ship.style.left = x + "vw";
ship.style.top = y + "vh";

document.onkeydown = function (event) {
  debugger
  if (event.key === "ArrowLeft" && x > 0) x = x - 1;
  else if (event.key === "ArrowRight" && x < 95) x = x + 1;

  if (event.key === "ArrowUp" && y > 0) y = y - 1;
  else if (event.key === "ArrowDown" && y < 90) y = y + 1;

  ship.style.left = x + "vw";
  ship.style.top = y + "vh";

  var shipRect = ship.getBoundingClientRect();
  var alienRect = alien.getBoundingClientRect();

  console.log(shipRect, alienRect);

  if (shipRect.x + shipRect.width > alienRect.x)
    console.log("collision detected");

};
