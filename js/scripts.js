//continuous values for each button
var redButton = 1;
var blueButton = 2;
var greenButton = 3;
var yellowButton = 4;

///array of user presses
var userArray = [];


//player turn function
var playerTurn = function(){

}
//function to clear userArray
var clear = function(){
  userArray.splice(0, userArray.length);
}

//how many times each button is clicked
var redPress = 0;
var bluePress = 0;
var greenPress = 0;
var yellowPress = 0;


$(document).ready(function(){
  //red user click
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

});
