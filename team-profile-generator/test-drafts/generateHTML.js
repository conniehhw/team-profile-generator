// TODO: Create a function to generate Team Profile html


function generateHTML(answers) {
    // return `# ${data.title}`
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
        
    <section class="user-card">
        <h1>${answers.name}</h1>
        <h2>Manager</h2>
        <p>ID: ${answers.id}</p>
        <p>Email: ${answers.email}</p>
        <p>Office Number: ${answers.id}</p>
    </section>
    </body>
    </html>
    `
    }

module.exports = generateHTML;
