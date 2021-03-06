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

$(document).ready(function () {
    $("button.proceed").click(function (event) {

        let pName = $(".name option:selected").val();
        let pSize = $("#size option:selected").val();
        let pCrust = $("#crust option:selected").val();
        let pTopping = [];

        $.each($("input[name='toppings']:checked"), function () {
            pTopping.push($(this).val());
        })

        switch (pSize) {
            case "0":
                price = 0;
                break;
            case 'large':
                price = 1500;
                break;
            case "medium":
                price = 950;
                break;
            case "small":
                price = 700;
            default:
                console.log("error");
        }

        switch (pCrust) {
            case "0":
                c_price = 0;
                break;
            case "Crispy":
                c_price = 300;
                break;
            case "Stuffed":
                c_price = 200;
                break;
            case "Gluten-free":
                c_price = 250;
                break;
            case "Flatbread":
                c_price = 300;
            case "Focaccia":
                c_price = 200;
                break;
            default:
                console.log("error");
        }
        let topping_value = pTopping.length * 100;

        if ((pSize == "0") && (pCrust == "0")) {
            $("button.proceed").show();
            $("#infor   ").show();
            $("div.choice").hide();
            alert("Please select the Pizza size and crust");
        } else {

            $("button.proceed").hide();
            $("#infor").hide();
            $("div.choice").slideDown(1200);
        }

        total = price + c_price + topping_value;
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(pTopping.join(", "));
        $("#totals").html(total);
        $("button.addPizza").click(function () {
            let pName = $(".name option:selected").val();
            let pSize = $("#size option:selected").val();
            let pCrust = $("#crust option:selected").val();
            let pTopping = [];

            switch (pSize) {
                case "0":
                    price = 0;
                    break;
                case 'large':
                    price = 1500;
                    break;
                case "medium":
                    price = 950;
                    break;
                case "small":
                    price = 700;
                default:
                    console.log("error");
            }

            switch (pCrust) {
                case "0":
                    c_price = 0;
                    break;
                case "Crispy":
                    c_price = 300;
                    break;
                case "Stuffed":
                    c_price = 200;
                    break;
                case "Gluten-free":
                    c_price = 250;
                    break;
                case "Flatbread":
                    c_price = 300;
                case "Focaccia":
                    c_price = 200;
                    break;
                default:
                    console.log("error");
            }

            let topping_value = pTopping.length * 100;
            total = price + c_price + topping_value;


            checkoutTotal = checkoutTotal + total;


            newOrder = new GetPizza(pName, pSize, pCrust, pTopping, total);
            $("#ordersmade").append(`<tr><td id="pizzaname">` + newOrder.name + `</td><td id="pizzasize"> ` + newOrder.size + `</td><td id="pizzasize"> ` + newOrder.crust + `</td><td id="pizzasize"> ` + newOrder.topping + `</td><td id="pizzasize"> ` + newOrder.total + `</td></tr>`);
        })

        $("button#checkout").click(function () {
            $("button#checkout").hide();
            $("button.addPizza").hide();
            $("button#deliver").slideDown(1000);
            $("#pizzatotal").append("Your bill is ksh. " + checkoutTotal);
        })
        // home button
        $("button.deliver").click(function () {
            $(".pizzatable").hide();
            $(".choice h2").hide();
            $(".delivery").slideDown(1000);
            $("#addedprice").hide();
            $("button.deliver").hide();
            $("#pizzatotal").hide();

            let deliveryAmount = checkoutTotal + 150;
            $("#totalbill").append("Your bill plus delivery fee is: " + deliveryAmount);
        })

        $("button#final-order").click(function (event) {
            event.preventDefault();
            $("#pizzatotal").hide();
            $(".delivery").hide();
            $("button#final-order").hide();
            let deliceryAmount = checkoutTotal + 150;

            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();

            if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {
                $("#finallmessage").append(person + ", We have recieved your order and the delivery wil be made  at  " + location + ". Prepare ksh. " + deliceryAmount);
                $("#totalbill").hide();
                $("#finallmessage").slideDown(1200);
            } else {
                alert("Please fill in the deliver details");
                $(".delivery").show();
                $("button#final-order").show();
            }

        })
        event.preventDefault();
    })
})