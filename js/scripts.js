//Business logic---------------------------------------------
function PizzaMaker(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [];
  this.price = 0;
  console.log(this.size);
  console.log(this.sauce);
  console.log(this.toppings);
  console.log(this.price);
}

PizzaMaker.prototype.sizePrice = function() {
    if (this.size === "small") {
      return 13;
    } else if (this.size === "medium") {
      return 15;
    } else if (this.size === "large") {
      return 17;
    }
}


PizzaMaker.prototype.saucePrice = function() {
  if (this.sauce === "Marinara") {
    return 1;
  }else if (this.sauce === "Pesto"){
    return 2;
  }else { return 3;
  }
}

PizzaMaker.prototype.totalPrice = function(){
  this.price.push(this.size + this.sauce + this.toppings);
}










//User interface logic------------------------------------------
$(document).ready(function(){
  $("#userOrder").submit(function(event){
    event.preventDefault();

    let toppingsArray = [];
    let sizeInput = $("#sizePizza option:selected").val();
    let sauceInput = $("#saucePizza option:selected").val();
    $(".userToppings input:checked").each(function(topping){
      toppingsArray.push($(this).val());
    });
    let yourPizza = new PizzaMaker(sizeInput, sauceInput, toppingsArray);
    let toppingsPrice = toppingsArray.length * 2;
    yourPizza.sizePrice();
    yourPizza.saucePrice();


    $("#size").text(yourPizza.size);
    $("#sauce").text(yourPizza.sauce);
    $("#toppings").append(toppingsArray.join(", "));


});
});
