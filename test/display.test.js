const calculator = require('../scripts/calculator.js');
const display = require('../scripts/display.js');

test('It adds 10 to display value', () => {
    // Setup
    display.display_value = '0.0';
    // Exercise
    display.add_value('1');
    display.add_value('0');
    // Verify
    expect(display.display_value).toEqual('10');
});

test('It adds 5.50 to display value', () => {
    // Setup
    display.display_value = '0.0';
    // Exercise
    display.add_value('5');
    display.add_value('.');
    display.add_value('5');
    display.add_value('0');
    // Verify
    expect(display.display_value).toEqual('5.50');
});

test('It adds 10 and + to calculator operations', () => {
    // Setup
    display.display_value = '0.0';
    // Exercise
    display.add_value('1');
    display.add_value('0');
    display.add_operation(calculator,'+');
    // Verify
    expect(calculator.operations).toEqual(['10', '+']);
});


test('It calculate 10 + 10 and return the value to calculator', () => {
    // Setup
    display.display_value = '0.0';
    calculator.clear_operations();
    // Exercise
    display.add_value('1');
    display.add_value('0');
    display.add_operation(calculator,'+');
    display.add_value('1');
    display.add_value('0');
    display.show_result(calculator);
    // Verify
    expect(calculator.calculate_operations()).toEqual(20);
});