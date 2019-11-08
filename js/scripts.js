//Business logic---------------------------------------------
function PizzaMaker(size,toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

PizzaMaker.getPrice = function() {
  this.toppings.forEach(function(topping){
    this.price += 1 ;
  })
      if (this.size === "small") {
        this.price += 13;
      }else if (this.size === "medium") {
        this.price += 15;
      }else if (this.size === "large") {
        this.price += 17;
      }
      return this.price;
}














//User interface logic------------------------------------------
$(document).ready(function(){
  let newOrder = new PizzaMaker();
  $("form#userOrder").submit(function(event) {
    let userToppings = [];
    console.log("hello");
    let sizeInput = $("#sizePizza option:selected").val();
    let toppingsInputs = $("#userToppings").val();

console.log(this.size);
event.preventDefault();

  })
})


  // $("#viewOrder").click(function(event) {
  //   event.preventDefault();
