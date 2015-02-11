var coinCounter = function(remainder, useQuarters, useDimes, useNickels) {

  var coins = [];
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;

  while (remainder - 25 >= 0 && useQuarters === true) {
    remainder -= 25;
    quarters += 1;
  }

  while (remainder - 10 >= 0 && useDimes === true) {
    remainder -= 10;
    dimes += 1;
  }

  while (remainder - 5 >= 0 && useNickels === true) {
    remainder -= 5;
    nickels += 1;
  }

  while (remainder - 1 >= 0) {
    remainder -= 1;
    pennies += 1;
  }



  coins.push(quarters);
  coins.push(dimes);
  coins.push(nickels);
  coins.push(pennies);
  return coins;
};

$(document).ready(function() {
  $("form#changeForm").submit(function(event) {

    var useQuarters = false;
    var useDimes = false;
    var useNickels = false;
    if ($("input#quarters").is(':checked')) {useQuarters = true;}
    if ($("input#dimes").is(':checked')) {useDimes = true;}
    if ($("input#nickels").is(':checked')) {useNickels = true;}

    var change = parseInt($("input#amount").val());

    if (change < 1 || change > 99) {
      alert("FAIL!");
      return false;
    }

    var result = coinCounter(change, useQuarters, useDimes, useNickels);

    $("#results").empty();

    for(var i=0; i<result[0]; i++) {
      $("#results").append("<img src='img/quarter.png'>");
    }

    for(var i=0; i<result[1]; i++) {
      $("#results").append("<img src='img/dime.png'>");
    }

    for(var i=0; i<result[2]; i++) {
      $("#results").append("<img src='img/nickle.png'>");
    }

    for(var i=0; i<result[3]; i++) {
      $("#results").append("<img src='img/penny.png'>");
    }

    event.preventDefault();
  });
});
