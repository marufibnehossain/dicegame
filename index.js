var num1 = Math.floor(Math.random()*6)+1;
var src1 = "images/dice" + num1 +".png";
document.querySelectorAll("img")[0].setAttribute("src", src1);

var num2 = Math.floor(Math.random()*6)+1;
var src2 = "images/dice" + num2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", src2);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }