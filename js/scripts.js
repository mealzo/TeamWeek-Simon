// COMPARE SIMON ARRAY AND USER ARRAY
// if (simonArray.toString() === userArray.toString()) {
//   alert "Your memory is impeccable!"
// };
//
// else if (simonArray.toString() != userArray.toString()) {
//   alert "Womp, womp. Try again!"
// };
//
// else {
//   alert "Oh, oh. You broke the game."
// };

// biz logic

//AMELIA'S BIZ
//continuous values for each button
var redButton = 1;
var blueButton = 2;
var greenButton = 3;
var yellowButton = 4;
 ///array of user presses
var userArray = [];
//function to clear userArray
var clear = function(){
 }
 //how many times each button is clicked
var redPress = 0;
var bluePress = 0;
var greenPress = 0;
var yellowPress = 0;

//RICHARD'S BIZ
function rndNumber() {
  return Math.floor(Math.random() * 4) + 1;
};

simonArray = [];

function rndArray() {
  for (var i = 0; i < array.length; i++) {
    simonArray.push(x);
  }
};

// user logic
$(document).ready(function() {
//AMELIA'S USER LOGIC
  $("#red").click(function(){
    userArray.push(redButton);
     redPress += 1;
     console.log(userArray);
     //console.log(redPress);
  });
  $("#blue").click(function(){
    userArray.push(blueButton);
     bluePress += 1;
     console.log(userArray);
     //console.log(bluePress);
  });
  $("#green").click(function(){
    userArray.push(greenButton);
     greenPress += 1;
     console.log(userArray);
     //console.log(greenPress);
  });
  $("#yellow").click(function(){
    userArray.push(yellowButton);
     yellowPress += 1;
     console.log(userArray);
   //console.log(yellowPress);
  });


//RICHARD'S USER LOGIC
  $("#test-button").click(function(event) {
    event.preventDefault();
    x = rndNumber();
    simonArray.push(x);
    console.log(simonArray);
  });

//AZUl'S USER LOGIC
  $("#compareBtn").click(function() {
    if (simonArray.toString() === userArray.toString()) {
      alert("Your memory is impeccable!")
    }

    else if (simonArray.toString() != userArray.toString()) {
      alert("Womp, womp. Try again!")
    }

    else {
      alert("Oh, oh. You broke the game.")
    };
});

});
