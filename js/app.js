// GLOBAL VARIABLES
//==============================================================================
//clickable
var left = ["one", "two", "three", "four"];
var middle = ["five"];
var right = ["three", "one"];
var invisible = [];
//win game
var target = ["five", "four"];


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

  if (leftString || rightString || middleString == targetString ) {
  console.log("you won");
  }
}


// MAIN PROCESS
//==============================================================================
// start game button
$( '#button').click(function() {
  setTimeout(endGame, 1000 * 5);

})


$( '#left').click(function(){
  if(invisible.length == 0){
    // $('#invisible').html(left.pop());
    // console.log(left.pop());
    invisible.push(left.pop());
    console.log(invisible);
    // console.log(left);


  }else{
    left.push(invisible.pop());
    console.log(invisible);
    checkForWin();

  }
})

$( '#middle').click(function(){
  if(invisible.length == 0){
    // $('#invisible').html(left.pop());
    // console.log(left.pop());
    invisible.push(middle.pop());
    console.log(invisible);
    // console.log(left);


  }else{
    middle.push(invisible.pop());
    console.log(invisible);
    checkForWin();

  }
})

$( '#right').click(function(){
  if(invisible.length == 0){
    // $('#invisible').html(left.pop());
    // console.log(left.pop());
    invisible.push(right.pop());
    console.log(invisible);
    // console.log(left);


  }else{
    right.push(invisible.pop());
    console.log(invisible);
    checkForWin();

  }
})


// $( '#invisible').click(function(){
//   // alert("yo");
// })
