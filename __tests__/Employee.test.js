const Employee = require('../lib/Employee');

test('checks for Employee methods', () => {
    const employee = new Employee ('Dave', '01', 'placeholder@email.com')

    expect(employee.getRole()).toBe('Employee');
    expect(employee.getName()).toBe('Dave');
    expect(employee.getId()).toBe('01');
    expect(employee.getEmail()).toBe('placeholder@email.com');
});