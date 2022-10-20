const Manager = require('../lib/Manager');

test('checks for Manager methods', () => {
    const manager = new Manager ('Dave', '01', 'placeholder@email.com', '(123)-456-7890')

    expect(manager.getRole()).toBe('Manager');
    expect(manager.getName()).toBe('Dave');
    expect(manager.getId()).toBe('01');
    expect(manager.getEmail()).toBe('placeholder@email.com');
    expect(manager.getNumber()).toBe('(123)-456-7890')
});