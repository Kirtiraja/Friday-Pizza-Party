//Business logic---------------------------------------------
function PizzaMaker(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;
  console.log(this.price);
}

PizzaMaker.prototype.getPrice = function() {
  this.toppings.forEach(function(topping){
    this.price += 1;
    if (this.size === "small") {
      this.price += 13;
    }else if (this.size === "medium") {
      this.price += 15;
    }else if (this.size === "large") {
      this.price += 17;
    } else {
      return this.price;
      console.log("hello");
    }
  })
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


  $("#viewOrder").text(yourPizza);

console.log(sizeInput);
console.log(sauceInput);
console.log(toppingsArray);
});
});
