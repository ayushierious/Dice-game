// window.alert("working");

function changeimg1(randomNumber1){

  switch (randomNumber1) {
  case 1:
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    break;
  case 3:
     document.querySelector(".img1").setAttribute("src","images/dice3.png");
    break;
  case 4:
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    break;
}
}
function changeimg2(randomNumber2){

  switch (randomNumber2) {
  case 1:
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    break;
  case 3:
     document.querySelector(".img2").setAttribute("src","images/dice3.png");
    break;
  case 4:
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    break;
}
}
var randomNumber1=Math.floor(6*(Math.random())+1);
changeimg1(randomNumber1);
var randomNumber2=Math.floor(6*(Math.random())+1);
changeimg2(randomNumber2);
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="It's a Draw!";
}
