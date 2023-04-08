export default class Display {
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

    clear_operations(calculator){
        this.display_value = '0.0';
        calculator.clear_operations();
    }

/*   print_result(e) {
    let result = document.getElementById("result");
    let obj = e.target;
    result.textContent = result.textContent + obj,textContent;
}

result = document.getElementById("result");

 num1 = document.getElementById("num1");
 num2 = document.getElementById("num2");
 num3 = document.getElementById("num3");
 num4 = document.getElementById("num4");
 num5 = document.getElementById("num5");
 num6 = document.getElementById("num6");
 num7 = document.getElementById("num7");
 num8 = document.getElementById("num8");
 num9 = document.getElementById("num9");
 num0 = document.getElementById("num0");

 point = document.getElementById("point");
 plus = document.getElementById("plus");
 subt = document.getElementById("subt");
 divi = document.getElementById("divi");
 mult = document.getElementById("mult");
 perc = document.getElementById("perc");
*/
}