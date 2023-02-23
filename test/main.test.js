const calculator = require('./../scripts/main.js');

test('adds 1 into operations array', () => {
    calculator.add_operation('1');
    expect(calculator.operations).toStrictEqual(['1']);
});