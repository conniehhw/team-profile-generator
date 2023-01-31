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


// function writeToFile() {
//     return inquirer.prompt(questions)
//         .then((answers)=> {
//             const mark = MarkDown.generateMarkdown(answers)
//             fs.writeFile('index.html', mark, function(err) {
//                 if(err) { 
//                     console.log('Could not generate file')
//                 } else {
//                     console.log('Success: new index.html generated inside the current folder')
//                 }
//             })
//         })
//         .catch((error)=> {
//             console.log(error)
//         })
// }

// writeToFile();
        
// const appendFile = async (filePath) => {
//     try {
//         const data = await fs.readFile('test.txt', 'utf8');
//         const contents = await fs.appendFile(filePath, data);
//         await fs.writeFile('newFile.txt', data); //create newfile with what is read from test.txt
//         console.log(contents);
//     } catch (err) {
//         console.error(err.message);
//     }
// }

// appendFile('log.txt'); //add what is read from test.txt
/////////////////

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
        console.log(contents);
        console.log(contents1);
    } catch (err) {
        console.error(err.message);
    }
}

appendFile('index.html'); //add what is read from test.txt

       