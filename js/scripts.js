// biz logic
function rndNumber() {
  return Math.floor(Math.random() * 4) + 1;
};

simonArray = [];

function rndArray() {
  for (var i = 0; i < array.length; i++) {
    simonArray.push(x);
  }
}

// user logic
$(document).ready(function() {
  $("#test-button").click(function(event) {
    event.preventDefault();
    x = rndNumber();
    simonArray.push(x);
    console.log(simonArray);
  });
});

x = rndNumber();
