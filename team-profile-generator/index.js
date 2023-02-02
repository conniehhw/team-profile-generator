const inquirer = require('inquirer');
const fs = require('fs/promises');
const GenHtml = require('./generateHtml');

const questions = [ //questions for manager at app initiate
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
    {
        type: 'list',
        name: 'role',
        message: "Select the role you wish to add next or confirm you are finished building your team: (use arrow keys)",
        choices: ['Engineer', 'Intern', 'Finished']
    }
];

const questions1 = [ // questions for Engineer Profile

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
     {
        type: 'list',
        name: 'role',
        message: "Select the role you wish to add next or confirm you are finished building your team: (use arrow keys)",
        choices: ['Engineer', 'Intern', 'Finished']
    },
];


const questions2 = [ // questions for Intern Profile
 
    {   
        type: 'input',
        name: 'name',
        message: "Enter the Intern's name:",
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
    {
        type: 'list',
        name: 'role',
        message: "Select the role you wish to add next or confirm you are finished building your team: (use arrow keys)",
        choices: ['Engineer', 'Intern', 'Finished']

    }
];


// Use async await - inquirer to prompt questions --> generates HTML based on inputs, writeFile
// Subsequent appendFile allows new employee profiles to not be override original data inputted
// ** NOTE ** This is not an efficent way; should leverage Classes to call on getRole/Name/Id methods.
// Here using if else to determine if next set of questions pertain to Engineer/ Intern profile - not working correctly
const appendFile = async (filePath) => {
    try {
        const answers = await inquirer.prompt(questions); //ask the questions
        const gen = GenHtml.generateHtml(answers); // set variable to the answers + format
            await fs.writeFile('index.html', gen); // creates the file based on above

                if(answers.role == 'Engineer') {
                    const answers1 = await inquirer.prompt(questions1);     //ask next set of questions
                    const gen1 = GenHtml.generateHtml1(answers1); 
                    await fs.appendFile(filePath, gen1);


                } if(answers.role == 'Intern') {  
                    const answers2 = await inquirer.prompt(questions2);
                    const gen2 = GenHtml.generateHtml2(answers2);
                    await fs.appendFile(filePath, gen2);

                } else {
                    return console.log("Success, team profiles completed");
            }
     } catch (err) {
        console.error(err.message);
    }
    }   

                  
appendFile('index.html'); //add what is read from first index.html


// Testing: while(answers.role != 'Finished') {
    // if (answers.role == 'Engineer)
    // execute Engineer questions

// try / do if

// const appendFile = async (filePath) => {
//         try {
//             const answers = await inquirer.prompt(questions); //ask the questions
//             const mark = MarkDown.generateMarkdown(answers); // set variable to the answers + format
//                 await fs.writeFile('index.html', mark); // creates the file based on above
//                 // console.log(answers.role);
//             do{ 
//                 const answers1 = await inquirer.prompt(questions1);
//                 const mark1 = MarkDown.generateMarkdown1(answers1); //set variable to the answers + format
//                 await fs.appendFile(filePath, mark1); 

//             if(answers.role == 'Intern') {
//                 const answers2 = await inquirer.prompt(questions2);
//                 const mark2 = MarkDown.generateMarkdown2(answers2);
//                 await fs.appendFile(filePath, mark2);
//             }
//             }
//         while (answers.role != 'Finished');  
//         } catch (err) {
//                     console.error(err.message);
//                 }
//             }
    
