$(document).ready(function(){
  let suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  let ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

  let deck = [];
  suits.forEach(function (suit){
    ranks.forEach(function(rank){
      deck.push(rank + ' of ' + suit);
    });
  });

  deck.forEach(function (card) {
    $("ul").append("<li>"+card+"</li>");
  });
});
