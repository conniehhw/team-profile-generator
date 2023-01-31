const inquirer = require('inquirer');
const fs = require('fs/promises');
const MarkDown = require('./generateMarkdown');

const questions = [
    {   
        type: 'input',
        name: 'name',
        message: "Enter the manager's name:",
    },
    {   
        type: 'input',
        name: 'ID',
        message: "Enter the employee's ID:", 
    },
    {
        type: 'input',
        name: "email",
        message: "Enter the email address:",
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter the office number:",
    },
];

const questions1 = [
    {
        type: 'list',
        name: 'role',
        message: "Select the role you wish to add next:(use arrow keys)",
        choices: ['Engineer', 'Intern']
    },
    {   
        type: 'input',
        name: 'name',
        message: "Enter the employee's name:",
    },
    {   
        type: 'input',
        name: 'ID',
        message: "Enter the employee's ID:", 
    },
    {
        type: 'input',
        name: "email",
        message: "Enter the email address:",
    },
    {
        type: 'input',
        name: "username",
        message: "Enter the gitHub username:",
    },
];

const questions2 = [
    {
        type: 'list',
        name: 'role',
        message: "Select the role you wish to add next:(use arrow keys)",
        choices: ['Engineer', 'Intern']
    },
    {   
        type: 'input',
        name: 'name',
        message: "Enter the employee's name:",
    },
    {   
        type: 'input',
        name: 'ID',
        message: "Enter the employee's ID:", 
    },
    {
        type: 'input',
        name: "email",
        message: "Enter the email address:",
    },
    {
        type: 'input',
        name: "school",
        message: "Enter the school name:",
    },
];

const questions3 = [
    {
        type: 'list',
        name: 'role',
        message: "Select the role you wish to add next:(use arrow keys)",
        choices: ['Engineer', 'Intern']
    },
    {   
        type: 'input',
        name: 'name',
        message: "Enter the employee's name:",
    },
    {   
        type: 'input',
        name: 'ID',
        message: "Enter the employee's ID:", 
    },
    {
        type: 'input',
        name: "email",
        message: "Enter the email address:",
    },
    {
        type: 'input',
        name: "school",
        message: "Enter the school name:",
    },
];



const appendFile = async (filePath) => {
    try {
        const answers = await inquirer.prompt(questions);
        const mark = MarkDown.generateMarkdown(answers);
            await fs.writeFile('index.html', mark);
        const answers1 = await inquirer.prompt(questions1);
        const mark1 = MarkDown.generateMarkdown1(answers1);
        const contents = await fs.appendFile(filePath, mark1);

        const answers2 = await inquirer.prompt(questions2);
        const mark2 = MarkDown.generateMarkdown2(answers2);
        const contents1 = await fs.appendFile(filePath, mark2);

        const answers3 = await inquirer.prompt(questions3);
        const mark3 = MarkDown.generateMarkdown2(answers3);
        const contents2 = await fs.appendFile(filePath, mark3);
        
        console.log(contents);
        console.log(contents1);
        console.log(contents2);
    } catch (err) {
        console.error(err.message);
    }
}

appendFile('index.html'); //add what is read from test.txt

       