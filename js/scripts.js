//Business logic---------------------------------------------
function PizzaMaker(size, sauce, toppings,) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;


}

PizzaMaker.prototype.toppingsPrice = function(){
  this.price +=(this.toppings).length *2;
}

PizzaMaker.prototype.sizePrice = function() {
    if (this.size === "Small") {
      this.price += 13;
    } else if (this.size === "Medium") {
      this.price += 15;
    } else if (this.size === "Large") {
      this.price += 17;
    }if (this.sauce === "Marinara") {
      this.price += 1;
    }else if (this.sauce === "Pesto"){
      this.price += 2;
    }else {
      this.price+= 3;
    }
}



//User interface logic------------------------------------------
$(document).ready(function(){
  $("#userOrder").submit(function(event){
    event.preventDefault();

    let toppingsArray = [];
    let sizeInput = $("#sizePizza option:selected").val();
    let sauceInput = $("#saucePizza option:selected").val();
    $(".userToppings input:checked").each(function(){
      toppingsArray.push($(this).val());
    });
    let yourPizza = new PizzaMaker(sizeInput, sauceInput, toppingsArray);
    yourPizza.toppingsPrice();
    yourPizza.sizePrice();

    $("#toppings").append(toppingsArray.join(", "));
    $("#size").text(yourPizza.size);
    $("#sauce").text(yourPizza.sauce);
    $("#yourTotal").text( "$" + yourPizza.price);
    $("#showOrder").slideToggle();

  });
});
