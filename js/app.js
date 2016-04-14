// GLOBAL VARIABLES
//==============================================================================
var left = ["red"];
var middle = ["blue"];
var right = ["purple", "yellow", "green"];
var invisible = [];
var target = ["purple", "yellow", "green", "blue", "red"];


// FUNCTIONS
//==============================================================================
var endGame = function() {
  console.log("Thanks for playing Hanoi Tower");
}

var checkForWin = function() {

  var leftString = left.join(' ');
  var middleString = middle.join(' ');
  var rightString = right.join(' ');
  var targetString = target.join(' ');

  if (middleString == targetString || leftString == targetString || rightString == targetString) {
    console.log("you won");
  }
}


// MAIN PROCESS
//==============================================================================
$( '#button').click(function() {
  setTimeout(endGame, 1000 * 5);

})


$( '#left').click(function(){
  if(invisible.length == 0){
    invisible.push(left.pop());
    console.log(invisible);

  }else{
    left.push(invisible.pop());
    console.log(invisible);
    checkForWin();

  }
})

$( '#middle').click(function(){
  if(invisible.length == 0){
    invisible.push(middle.pop());
    console.log(invisible);

  }else{
    middle.push(invisible.pop());
    console.log(invisible);
    checkForWin();

  }
})

$( '#right').click(function(){
  if(invisible.length == 0){
    invisible.push(right.pop());
    console.log(invisible);

  }else{
    right.push(invisible.pop());
    console.log(invisible);
    checkForWin();

  }
})
