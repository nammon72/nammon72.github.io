class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.displayText = "";

    this.currentOperand = "";
    // this.previousOperand = "";
    this.operation = "";
    this.previousOperation = "";
  }

  delete() {
    // this.currentOperand = this.currentOperand.toString().slice(0, -1);
    let newDisplayText = this.displayText.toString().slice(0, -1);
    console.log(newDisplayText);
    this.displayText = newDisplayText;
    this.currentOperandTextElement.innerText = newDisplayText;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    console.log(number);
    // this.currentOperand = this.currentOperand.toString() + number.toString();
    this.currentOperand = number.toString();
    this.operation = "";
    this.previousOperation = "";
  }

  chooseOperation(operation) {
    //if (this.currentOperand === "") return;
    // if (this.previousOperand === "=") {
    //   this.compute();
    // }
    if (!this.displayText) return;
    if (operation === "×") {
      operation = "*";
    }
    if (operation === "÷") {
      operation = "/";
    }
    this.operation = operation;
    if (operation === "") return;

    // this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    console.log(this.previousOperation);
    if (this.previousOperation) {
      let newDisplayText = this.displayText.toString().slice(0, -1);
      console.log(newDisplayText);
      this.displayText = newDisplayText;
      this.currentOperandTextElement.innerText = newDisplayText;
    }
    this.previousOperation = operation;
    console.log(operation);
    this.updateDisplay();
  }

  compute() {
    if (!this.displayText) return;
    if (this.operation) return;
    //let computation;
    // const prev = parseFloat(this.previousOperand);
    // const current = parseFloat(this.currentOperand);
    // if (isNaN(prev) || isNaN(current)) return;
    // switch (this.operation) {
    //   case "+":
    //     computation = prev + current;
    //     break;
    //   case "-":
    //     computation = prev - current;
    //     break;
    //   case "×":
    //     computation = prev * current;
    //     break;
    //   case "÷":
    //     computation = prev / current;
    //     break;
    //   default:
    //     return;
    // }
    this.previousOperandTextElement.innerText = this.displayText.toString();

    this.currentOperandTextElement.innerText = eval(
      this.displayText.toString()
    );

    //this.currentOperand = computation;
    this.operation = "";
    // this.previousOperand = "";
    this.displayText = "";
    this.previousOperation = "";
    this.currentOperand = "";
  }

  clearDisplay() {
    this.currentOperandTextElement.innerText = "";
    this.previousOperandTextElement.innerText = "";
    this.currentOperand = "";
    this.operation = "";
    this.previousOperation = "";
    // this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    //console.log(this.getDisplayNumber(this.currentOperand));
    // this.currentOperandTextElement.innerText = this.getDisplayNumber(
    //   this.currentOperand
    // );

    let displayTextBefore = `${this.displayText}${this.operation}${this.currentOperand}`;
    this.displayText = displayTextBefore;
    this.currentOperandTextElement.innerText = displayTextBefore;
    // if (this.operation != null) {
    //   this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
    //     this.previousOperand
    //   )} ${this.operation}`;
    // } else {
    //   this.previousOperandTextElement.innerText = "";
    // }
  }

  keyPressed(key) {
    let self = this;
    console.log(key);
    if (isNaN(key)) {
      switch (key) {
        // case "c":
        // case "Backspace":
        // case "Delete":
        //   resetDisplay();
        //   value = "";
        //   break;
        // case "±":
        //   if (val.startsWith("-")) {
        //     display.value = val.substr(1, val.length);
        //   } else {
        //     display.value = "-" + val;
        //   }
        //   break;
        // case ".":
        //   if (val === "" || val === "-") {
        //     display.value += "0.";
        //   } else {
        //     display.value += ".";
        //   }
        //   break;
        // case "%":
        //   display.value = val / 100;
        //   break;
        case "+":
          console.log(key);
          self.chooseOperation("+");
          break;
        case "-":
          self.chooseOperation("-");
          break;
        case "×":
        case "X":
        case "*":
          self.chooseOperation("×");
          break;
        case "÷":
        case "/":
          self.chooseOperation("÷");
          break;
        case "Enter":
          console.log("HELLO");
          //self.compute();
          break;
      }
    } else {
      console.log(key);
      self.chooseOperation("");
      self.appendNumber(Number(key));
      self.updateDisplay();
    }
  }
}

let keys = document.querySelectorAll(".key");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation("");
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    // calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  //calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.clearDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  // calculator.updateDisplay();
});
window.addEventListener("keydown", function (e) {
  e = e || window.event;
  calculator.keyPressed(e.key);
});
