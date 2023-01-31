class MarkDown {

    static generateMarkdown(answers) {
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Document</title>
    </head>
    <body>

    
<h1>My Team</h1>
    <div class="main">
        
    <div class="card">
        <div class="header">
            <h2>${answers.name}</h2>
         </div>
         <div class="container">
            <h3>Manager</h3>
            <p>ID: ${answers.ID}</p>
            <p>
            <a a href="mailto:insertemalhere@xyz.com" target="_blank">Email:${answers.email}</a></p>
            <p>Office Number: ${answers.office}</p>
        </div>
    </div>
            `
        }

    static generateMarkdown1(answers1) {
        return ` 
    <div class="card">
        <div class="header">
        <h2>${answers1.name}</h2>
        </div>
        <div class="container">
            <h3>Engineer</h3>    
            <p>ID: ${answers1.ID}</p>
            <p>
            <a a href="mailto:insertemalhere@xyz.com" target="_blank">Email:${answers1.email}</a></p>
            <p>
            <a href="https://github.com/${answers1.username}">Git Hub username: ${answers1.username}</a></p>
    </div>
    </div>
                `
        }

    static generateMarkdown2(answers2) {
            return `
    <div class="card">
        <div class="header">
        <h2>${answers2.name}</h2>
        </div>
        <div class="container">
            <h3>Intern</h3>
            <p>ID: ${answers2.ID}</p>
            <p>
            <a a href="mailto:insertemalhere@xyz.com" target="_blank">Email:${answers2.email}</a></p>
            <p>School: ${answers2.school}</p>
        </div> 
    </div>`
    }

    static generateMarkdown3(answers3) {
        return `
    <div class="card">
        <div class="header">
        <h2>${answers3.name}</h2>
        </div>
        <div class="container">
            <h3>Intern</h3>
            <p>ID: ${answers3.ID}</p>
            <p>
            <a a href="mailto:insertemalhere@xyz.com" target="_blank">Email:${answers3.email}</a></p>
            <p>School: ${answers3.school}</p>
    </div>
</div>

</div>
    
</body>
</html>
    `
    }

}

module.exports = MarkDown;