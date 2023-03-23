const calculator = {
    operations: [],
    result: 0,

    add_operation(operation) {  
        this.operations.push(operation);
    },

    remove_operation() {
        this.operations.pop();
    },

    clear_operations() {
        this.operations = [];
    },

    calculate_operations_reducer(expression, operation) {
        if (expression.length == 2) {
            return [eval(expression.concat([operation]).join(" "))];
        } else {
            return expression.concat([operation]);
        }
    },
        
    calculate_operations() {
        return this.operations.reduce(this.calculate_operations_reducer, []).pop();
    },

    show_result() {
        document.getElementById("result").innerHTML = this.calculate_operations();
    },
};

module.exports = calculator;