const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateHTML = require('./generateHTML');

// TODO: Create an array of questions for user input
    let allEmployees = [
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
        // {
        //     type: 'list',
        //     name: 'role',
        //     message: "Select a role to enter next:",
        //     // choices: ['Engineer', 'Intern'],
        // },
        {   
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name:"
        },
        {   
            type: 'input',
            name: 'ID',
            message: "Enter the engineer's ID:", 
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the email address:",
        },   
        {
            type: 'input',
            name: 'github',
            message: "Enter the GitHub username:",
        }
    ] 
    //     // {
    //     //     type: 'list',
    //     //     name: 'role',
    //     //     message: "Select a role to enter next:",
    //     //     // choices: ['Engineer', 'Intern'],
    //     // },

    //     {                                               
    //         type: 'input',
    //         name: 'name',
    //         message: "Enter the intern's name:",
    //     },
    //     {   
    //         type: 'input',
    //         name: 'ID',
    //         message: "Enter the intern's ID:", 
    //     },
    //     {
    //         type: 'input',
    //         name: 'email',
    //         message: "Enter the email address:",
    //     },   
    //     {
    //         type: 'input',
    //         name: 'school',
    //         message: "Enter the name of the School:"
    //     },  
    //     // {
    //     //     type: 'list',
    //     //     name: 'role',
    //     //     message: "Select a role to enter next:",
    //     //     // choices: ['Engineer', 'Intern'],
    //     // }
    // ];

const appendFile = async (filePath) => {
    try {
        const data = await fs.readFile('test.txt', 'utf8');
        const contents = await fs.appendFile(filePath, data);
        await fs.writeFile('newFile.txt', data);
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}
    

    // function writeToFile() {
    // inquirer.prompt(allEmployees)
    // .then((answers) => {
    // fs.writeFile('index.html', generateHTML(answers), function (err) {
    //     if (err) throw err;
    //     console.log('Saved');
    //     })
    //     })
    // }


    // writeToFile();


    // allEmployees.map(function(element, index, array){ // array name - 3 arguments (name of the element, current index#, array itself) last 2 optional
    //     console.log(array[index + 1]);
    // });

    //function --> callback function, is an argument insdie the map method as well 
    //

    // allEmployees.map(function(element, index, array) {
    //     console.log(this);
    // }, "hellow world"); // ,this - we will give it a value of 80)
    
    // allEmployees.map(function(element, index, array) {
    //     console.log(element);
    //     console.log(index);
    //     console.log(array);
    //     console.log(this);
    // }, "hello world"); // ,this - we will give it a value of 80)

//Example: 
//allEmployees.map(function(element, index, array){}.this);
//



// function writeToFile() {
//     return inquirer.prompt(allEmployees)
//         .then((employees => {
//         fs.writeFileSync('index.html', generateHTML(allEmployees), function(err) {
//             if(err) {
//                 console.log('Could not generate team profile')
//             } else {
//                 console.log('Success: new team profile created')
//                 }
//             })
//          })
//         .catch((error) => {
//             console.log(error)
//         }))
//  }

//  writeToFile();
  
    // .then((data) => {
    //     const filename = `${data.name}.json`;
    
    //     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
    //       err ? console.log(err) : console.log("Success!")
    //     );
    //   });

        // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}