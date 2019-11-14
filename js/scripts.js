//Business logic---------------------------------------------
function PizzaMaker(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;
  console.log(this.toppings);
  console.log(this.sauce);
  console.log(this.size);

}

PizzaMaker.prototype.toppingsPrice = function(){
    return (this.toppings).length;
}

PizzaMaker.prototype.sizePrice = function() {
    if (this.size === "Small") {
      return 13;
    } else if (this.size === "Medium") {
      return 15;
    } else  {
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
    let toppingsPrice = yourPizza.toppingsPrice();
    let finalSizePrice = yourPizza.sizePrice();
    let finalSaucePrice = yourPizza.saucePrice();
    // let overallPrice = yourPizza.totalPrice();


    $("#toppings").append(toppingsArray.join(", "));
    $("#size").text(yourPizza.size);
    $("#sauce").text(yourPizza.sauce);
    $("#yourTotal").append();
    $("#showOrder").slideToggle();
console.log(toppingsPrice);
console.log(finalSaucePrice);
console.log(finalSizePrice);
console.log(overallPrice);
});
});
