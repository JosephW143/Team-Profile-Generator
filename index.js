const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the name of your team manager?",
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log("Please enter a name for the team manager!")
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee ID for the team manager?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the employee ID for the team manager!")
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email for your team manager?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the team manager's email!")
            }
        }
    },
    {
        type: 'input',
        name: 'phone',
        message: "What is the phone number of your team manager?",
        validate: phoneInput => {
            if (phoneInput) {
                return true;
            } else {
                console.log("Please enter the team manager's phone number!")
            }
        }
    }
]

const teamMemberQuestions = [
    {
        type: 'list',
        name: 'role',
        message: "Please select an employee role from the list",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the name of your team memeber?",
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log("Please enter the name of your team member!")
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee ID of your team memeber?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the employee ID of your team member!")
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email of your team memeber?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the email of your team member!")
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the GitHub of your engineer?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the GitHub of your engineer!")
            }
        },
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does your intern attend?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the school name of your intern!")
            }
        },
        when: (answers) => answers.role === 'Intern'
    }
]