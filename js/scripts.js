//Business logic---------------------------------------------
function PizzaMaker(size,toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

PizzaMaker.getPrice = function() {
  this.toppings.forEach(function(topping){
    this.price ++ 1 ;
  }
      if (this.size === "small") {
        this.price ++ 13;
      }else if (this.size === "medium") {
        this.price ++ 15;
      }else if (this.size === "large") {
        this.price ++ 17;
      }
      return this.price;
}














//User interface logic------------------------------------------
$(document).ready(function(){
  let newOrder = new PizzaMaker();
  $("form#userOrder").submit(function)(event) {
    event.preventDefault();
    let userToppings = [];
    let sizeInput = $("#size").val();
    let toppingsInputs = $("#")
    var player2 = new Player ()
  }



  $("#hold1").click(function(event) {
    event.preventDefault();
