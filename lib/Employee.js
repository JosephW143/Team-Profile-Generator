class Employee {
    constructor(name, id, email){
        this.role = 'Employee';
        this.name  = name;
        this.id = id;
        this.email = email;
    };

    getRole(){
        return this.role;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
}

module.exports = Employee