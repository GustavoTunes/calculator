class Display {
    constructor() {
        this.display_value = '0.0';
    }

    add_value(value){
        if (this.display_value == '0.0') {
            this.display_value = value.toString();
        } else {
            this.display_value = this.display_value.concat(value);
        }
    }

    add_operation(calculator, operation){
        calculator.add_operation(this.display_value);
        calculator.add_operation(operation);
        this.display_value = '0.0'
    }

    show_result(calculator){
        calculator.add_operation(this.display_value);
        calculator.calculate_operations();
        calculator.show_result();
    }

    calculate_operations(calculator){
        calculator.add_operation(this.display_value);
        calculator.calculate_operations();
    }

}

module.exports = Display;