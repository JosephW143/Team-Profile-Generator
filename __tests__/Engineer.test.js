const Engineer = require('../lib/Engineer');

test('checks for Engineer methods', () => {
    const engineer = new Engineer ('Dave', '01', 'placeholder@email.com', 'facebook')

    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getName()).toBe('Dave');
    expect(engineer.getId()).toBe('01');
    expect(engineer.getEmail()).toBe('placeholder@email.com');
    expect(engineer.getGitHub()).toBe('facebook')
});