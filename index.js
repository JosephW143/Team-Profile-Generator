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

const generateHeader = () => {
    const htmlStart =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <title>My Team</title>
    </head>
    <header class="p-6 text-center text-white bg-danger">
        <h1 class="display-4 p-5">My Team</h1>
    </header>
    <main class="container d-flex col justify-content-center">
        <div class="row">`
    fs.writeFile('./dist/myteam.html', pageStart, (err) => err ? console.log(err) : '')
    inquirer.createPromptModule(managerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.phone)
        generateManager(manager);
        newMember();
    })
}

const generateManager = (manager) => {
    const managerHtml =
    `<section class="card p-3 m-3 shadow bg-white">
        <div class="card-header bg-primary text-white">
            <h2>John Doe</h2>
            <h3>${manager.getName()}</h3>
        </div>
        <ul class="card-body list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Phone Number: ${manager.getPhone()}</li>
        </ul>
    </section>`
    fs.appendFile('./dist/myteam.html', managerHtml, (err) => err ? console.log(err) : '')
}

const generateEngineer = (engineer) => {
    const engineerHtml =
    `<section class="card p-3 m-3 shadow bg-white">
        <div class="card-header bg-primary text-white">
            <h2>Jane Doe</h2>
            <h3>${engineer.getName()}</h3>
        </div>
        <ul class="card-body list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Vist employee GitHub<a href="${engineer.getGitHub()}">here</a></li>
        </ul>
    </section>`
    fs.appendFile('./dist/myteam.html', engineerHtml, (err) => err ? console.log(err) : '')
}

const generateIntern = (intern) => {
    const internHtml =
    `<section class="card p-3 m-3 shadow bg-white">
        <div class="card-header bg-primary text-white">
            <h2>John Doe</h2>
            <h3>${intern.getName()}</h3>
        </div>
        <ul class="card-body list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </section>`
    fs.appendFile('./dist/myteam.html', internHtml, (err) => err ? console.log(err) : '')
}

const addMember = () => {
    inquirer.prompt(teamMemberQuestions).then((answers) => {
        if (answers.role === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            generateEngineer(engineer);
        } else {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            generateIntern(intern);
        }
        newMember();
    })
}

const newMember = () => {
    inquirer.createPromptModule([{
        type: 'confirm',
        name: 'newMember',
        message: "Would you like to add a new team member?",
        default: true
    }]).then((answer) => {
        if (answer.newMember) {
            addMember();
        } else {
            console.log("Your team's profile has been generated!");
            const htmlEnd =
            `   </div>
    
            </main>
            </html>`
            fs.appendFile('./dist/myteam.html', htmlEnd, (err) => err ? console.log(err) : '')
        }
    })
}

generateHeader();