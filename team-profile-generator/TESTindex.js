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
];

const questions1 = [
    {   
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
    },
    {   
        type: 'input',
        name: 'ID',
        message: "Enter the employee's ID:", 
    },
    {
        type: 'input',
        name: "email",
        message: "Enter the gitHub username",
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
        const mark1 = MarkDown.generateMarkdown(answers1);
        const contents = await fs.appendFile(filePath, mark1);
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}

appendFile('index.html'); //add what is read from test.txt

       