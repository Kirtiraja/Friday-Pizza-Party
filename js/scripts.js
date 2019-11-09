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
  $("#userOrder").submit(function(event){
    event.preventDefault();
    let toppingsArray = [];
    let toppingsInputs = $("#userToppings:checkbox:checked").val();
    let sizeInput = $("#sizePizza option:selected").val();
    // toppingsInputs.forEach(function(toppingInput){
    //   toppingsArray.push(toppingsInputs.val());
    // })
    // let newOrder = new PizzaMaker();

console.log(sizeInput);
console.log(toppingsInputs);
});
});


  // $("#viewOrder").click(function(event) {
  //   event.preventDefault();
