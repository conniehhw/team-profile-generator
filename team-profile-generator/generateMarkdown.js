class MarkDown {

        static generateMarkdown(answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
        
    <section class="user-card">
        <h1>${answers.name}</h1>
        <h2>Manager</h2>
        <p>ID: ${answers.ID}</p>
        <p>Email: ${answers.email}</p>
        <p>Office Number: ${answers.office}</p>
    </section>
            `
        }

        static generateMarkdown1(answers1) {
                return ` 
                <section class="user-card">
                <h1>Engineer</h1>
                <h2>${answers1.name}</h2>
                <p>ID: ${answers1.ID}</p>
                <p>Email: ${answers1.email}</p>
                <p>Git Hub username: ${answers1.username}</p>
            </section>
                `
        }

        static generateMarkdown2(answers2) {
                    return `
               <section class="user-card">
                <h1>Intern</h1>
                <h2>${answers2.name}</h2>
                <p>ID: ${answers2.ID}</p>
                <p>Email: ${answers2.email}</p>
                <p>School: ${answers2.school}</p>
            </section>
    
    </body>
    </html>
    `
    }

}

module.exports = MarkDown;