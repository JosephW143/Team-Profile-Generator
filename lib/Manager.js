const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, number){
        super(name, id, email)
        this.role = 'Manager';
        this.number = number;
    }
    getNumber() {
        return this.number;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;