const calculator = {
    operations: [],

    add_operation(operation) {
      this.operations.push(operation);
    },

    remove_operation() {
        this.operations.pop();
      },

    clear_operations() {
        this.operations = [];
    },

    show_result() {
        result = eval(this.operations.join(" "));
        document.getElementById("result").innerHTML = result;
    },
};

module.exports = calculator;