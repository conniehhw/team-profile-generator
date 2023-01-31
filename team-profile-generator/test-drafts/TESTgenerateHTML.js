const fs = require("fs");
// const inquirer = require("inquirer");

const allEmployees = [
    {
        name: "Bob Smith",
        email: "bob_123@gmail.com",
        id: 51,
        office: "(804)332-6631"
    },
    {
        name: "James Stevenson",
        email: "james112@gmail.com",
        id: 33,
        github: "www.github.com/james112"
    },
    {
        name: "Rob Stevenson",
        email: "rob@gmail.com",
        id: 333,
        github: "www.github.com/rob"
    },
    {
        name: "Bill Stevenson",
        email: "bills112@gmail.com",
        id: 111,
        github: "www.github.com/bill"
    },
    {
        name: "Tom Smith",
        email: "tom.tom21@gmail.com",
        id: 21,
        school: "UCLA"
    }
]

    
function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
    
    <div class="employees">
    ${employees.map(employee => {

       if(employee.office) {
        return `                                          
            <section class="user-card">
            <h1>Manager</h1>
            <h1>${employee.name}</h1>
            <p>Email: ${employee.email}</p>
            <p>ID: ${employee.id}</p>
            <p>Office Number: ${employee.office}</p>
        </section>`
       }

       if(employee.github) {
        return `
        <section class="user-card">
            <h1>Engineer</h1>
            <h1>${employee.name}</h1>
            <p>Email: ${employee.email}</p>
            <p>ID: ${employee.id}</p>
            <p>Github: ${employee.github}</p>
        </section>`
       }

       if(employee.school) {
        return `
        <section class="user-card">
            <h1>Intern</h1>
            <h1>${employee.name}</h1>
            <p>Email: ${employee.email}</p>
            <p>ID: ${employee.id}</p>
            <p>School: ${employee.school}</p>
        </section>`
       }
       
    }).join('')}
</div>

</body>
</html>`;
}


fs.writeFileSync("index.html", generateHTML(allEmployees));








