const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// const teamProfiles = [
//     {

//     }
// ]

inquirer
    .createPromptModule([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:", 
        },
        {   type: "input",
            id: "ID",
            message: "Enter the employee ID:",
        },
        {
            type: "input",
            email: "email address",
            message: "Enter the email address:"
        },  
        {
            type: "input",
            number: "offce number",
            message: "Enter the office number:"
        },

        {
            type: "list",
            message: "Select a role to enter next:",
            name: "role",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            name: "name",
            message: "Enter the employee's name:", 
        },
        {   type: "input",
            id: "ID",
            message: "Enter the employee's ID:",
        },
        {
            type: "input",
            email: "email address",
            message: "Enter the email address:"
        },
        {   
            type: "input",
            id: "ID",
            message: "Enter the GitHub username:"
        },
        {
            type: "input",
            name: "name",
            message: "Enter the employee's name:", 
        },
        {   type: "input",
            id: "ID",
            message: "Enter the employee's ID:",
        },
        {
            type: "input",
            email: "email address",
            message: "Enter the email address:"
        },
        {   
            type: "input",
            id: "ID",
            message: "Enter the school name:"
        },

        {
            type: "list",
            message: "Select a role to enter next:",
            name: "role",
            choices: ["Engineer", "Intern", "Team Profiles Completed."],
        },

    ])

    .then((data) => {
        const filename = `${data.name}.json`;
    
        fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
          err ? console.log(err) : console.log("Success!")
        );
      });

        // TODO: Create a function to write README file
    function writeToFile(fileName, data) {}