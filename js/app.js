$(document).ready(function() {

  $("#bankroll").click(function(event) {

      var bankroll = prompt("Thanks for playing BlackJack! How much would you like to buyin with?");
        console.log(bankroll);

    });

});


$("#deal").click(function(){
           var randNum = Math.floor(Math.random() * 13) + 1;
           var randSuit = Math.floor(Math.random() * 4) + 1;
           //the card
           console.log(randNum);
           console.log(randSuit);
         });


$("#bet").click(function() {
  console.log("this should allow a bet");
});

var card = function Card(n,s) {
          var number = n;
          var suit = s;
          //getters
          var getNumber = function(){
                  return this.number;
          };
          var getSuit = function(){
                  return this.suit;
          };
          var getValue = function() {
                if (number >= 11 && number <= 13) return 10
                    else if (number === 1) return 11
                        else return number;
  };


var card1 = deal();
var card2 = deal();

var hand = function Hand() {
      this.card1 = deal();
      this.card2 = deal();
      var score = card1 + card2;
  };
};
