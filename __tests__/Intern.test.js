const Intern = require('../lib/Intern');

test('checks for Engineer methods', () => {
    const intern = new Intern ('Dave', '01', 'placeholder@email.com', 'Placeholder Univercity')

    expect(intern.getRole()).toBe('Intern');
    expect(intern.getName()).toBe('Dave');
    expect(intern.getId()).toBe('01');
    expect(intern.getEmail()).toBe('placeholder@email.com');
    expect(intern.getSchool()).toBe('Placeholder Univercity')
});