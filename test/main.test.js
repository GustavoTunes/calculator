const calculator = require('./../scripts/main.js');

test('It adds 1 into operations array', () => {
    // Setup
    calculator.clear_operations();
    // Exercise
    calculator.add_operation('1');
    // Verify
    expect(calculator.operations).toStrictEqual(['1']);
});

test('It sum 2 with 2 and return 4', () => {
    // Setup 
    calculator.clear_operations();
    // Exercise
    calculator.add_operation('2');
    calculator.add_operation('+');
    calculator.add_operation('2');
    // Verify
    expect(calculator.calculate_operations()).toStrictEqual(4);
});

test('It sum 5 with 2 and after multiple by 2', () => {
    // Setup 
    calculator.clear_operations();
    // Exercise
    calculator.add_operation('5');
    calculator.add_operation('+');
    calculator.add_operation('2');
    calculator.add_operation('*');
    calculator.add_operation('2');
    // Verify
    expect(calculator.calculate_operations()).toStrictEqual(14);
});

test("It's able to calculate numbers with more than two decimal places", () => {
    // Setup 
    calculator.clear_operations();
    // Exercise
    calculator.add_operation('20');
    calculator.add_operation('+');
    calculator.add_operation('100');
    // Verify
    expect(calculator.calculate_operations()).toStrictEqual(120);
});

test("It's able to calculte decimal numbers", () => {
    // Setup 
    calculator.clear_operations();
    // Exercise
    calculator.add_operation('1.5');
    calculator.add_operation('+');
    calculator.add_operation('2');
    // Verify
    expect(calculator.calculate_operations()).toStrictEqual(3.5);
});