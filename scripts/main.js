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

    calculate_operations() {
        return eval(this.operations.join(" "));
    },

    show_result() {
        document.getElementById("result").innerHTML = this.calculate_operations();
    },
};

module.exports = calculator;