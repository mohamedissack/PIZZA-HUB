let price;
let crust_price;
let tooping_price;
let total = 0

function GetPizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
};