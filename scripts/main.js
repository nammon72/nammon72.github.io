var name = "Nguyễn Hoàng Nam";
var age = 30;
var sex = true;
if (sex == true ) {
    sex = "Male"
} else {
    sex = "Female"
}

function hireMe() {
    alert("Nguyễn Hoàng Nam, phone: 0981554491")
}

// Price freeShip
var price = 28.99;
var discount = 10;
var total = 
        price - (price * (discount / 100));

function freeShipping() {

}

if (total > 25) {
    freeShipping();
}

var count = 10;
while (count > 0) {
    juggle();
    count = count - 1;
}

var dog = {name: "Rover", weight: 35};
if (dog.weight > 30) {
    alert("WOOF WOOF");
} else {
    alert("woof woof");
}