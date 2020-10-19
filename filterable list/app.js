const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const previourOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');


class Calculator{
    constructor(previourOperand, currentOperand) {
        this.previourOperand = previourOperand;
        this.currentOperand = currentOperand
        this.clear();
    }

    clear() {
        this.current = '';
        this.previous = '';
        this.operation = undefined;

    }

    delete() {
        this.current = this.current.toString().slice(0, -1);
    }

    appendNumber(number) {
        if(number ==='.' && this.current.includes('.')) return
        this.current =  this.current.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.current === '') return
        if(this.previous !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previous = this.current;
        this.current = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previous);
        const curr = parseFloat(this.current);
        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            default:
                return;
      
        }
    
        this.current = computation;
        this.operation = undefined;
        this.previous = '';

    }

    updateDisplay() {
        this.currentOperand.innerText = this.current;
        if(this.operation != null) {
            this.previourOperand.innerText = `${this.previous} ${this.operation}`;

        }
    }
}






//setting instantion 
const calc = new Calculator(previourOperand, currentOperand);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calc.appendNumber(button.innerText);
        calc.updateDisplay();
        
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calc.chooseOperation(button.innerText);
        calc.updateDisplay();
        
    })
})

allClearButton.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
})

equalsButton.addEventListener('click', button => {
    calc.compute();
    calc.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calc.delete();
    calc.updateDisplay();
})