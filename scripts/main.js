const calculator = {
    operation: [],

    add_operation(operation) {
      this.operation.push(operation)
    },

    remove_operation(operation) {
        this.operation.pop(operation)
      },

    clear_operation(operation){
        while(this.operation.length > 0){
            this.operation.pop();
        }
    },

    show_result(){
        result = eval(this.operation.join(" "));
        document.getElementById("result").innerHTML = result;
    },
};