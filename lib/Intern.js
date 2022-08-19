const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.role = 'Intern';
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;