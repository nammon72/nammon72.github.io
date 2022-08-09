//define Variables
var calculator = document.querySelector("#display"),
  keys = document.querySelectorAll(".key"),
  value,
  first_number,
  second_number;

for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", clicked);
}

//define inputs from user
function clicked() {
  var key = this.innerText || this.textContent;
  keyPressed(key);
}

window.addEventListener("keydown", function (e) {
  e = e || window.event;
  keyPressed(e.key);
});

function keyPressed(key) {
  var val = display.value;
  console.log(display);

  if (isNaN(key)) {
    switch (key) {
      case "c":
      case "Backspace":
      case "Delete":
        resetDisplay();
        value = "";
        break;
      case "±":
        if (val.startsWith("-")) {
          display.value = val.substr(1, val.length);
        } else {
          display.value = "-" + val;
        }
        break;
      case ".":
        if (val === "" || val === "-") {
          display.value += "0.";
        } else {
          display.value += ".";
        }
        break;
      case "%":
        display.value = val / 100;
        break;
      case "+":
        operation("+");
        break;
      case "-":
        operation("-");
        break;
      case "×":
      case "X":
      case "*":
        operation("×");
        break;
      case "÷":
      case "/":
        operation("÷");
        break;
      case "Enter":
      case "=":
        equals();
        break;
    }
  } else {
    if (val.length < 9) {
      display.value += key;
    }
  }
}
//define calculation
function equals() {
  if (first_number !== undefined && value) {
    second_number = parseFloat(display.value);
    switch (value) {
      case "+":
        display.value =
          Math.round((first_number + second_number) * 10000) / 10000;
        break;
      case "-":
        display.value =
          Math.round((first_number - second_number) * 10000) / 10000;
        break;
      case "×":
        display.value =
          Math.round(first_number * second_number * 10000) / 10000;
        break;
      case "÷":
        if (second_number === 0) {
          display.value = "ERROR";
        } else {
          display.value =
            Math.round((first_number / second_number) * 10000) / 10000;
        }
        break;
    }
    value = "";
  }
}

function operation(type) {
  if (display.value === "") {
    display.value = 0;
  }
  if (value) {
    equals();
    first_number = parseFloat(display.value);
  } else {
    first_number = parseFloat(display.value);
  }
  value = type;
  display.value = "";
  display.placeholder = first_number + value;
}
//reset display
function resetDisplay() {
  display.value = "";
  display.placeholder = 0;
}


