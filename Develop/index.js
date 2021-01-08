// packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user input

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to name the application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the application.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What is the installation process of this application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage for this application',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license if any does this application hold?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can someone contribute to this application?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How does someone test this application?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'question',
            message: 'What is your email address?',
        }

    ]);



// function to initialize app
const init = async () => {
    try {
        const answers = await promptUser();
        const html = generateMarkdown(answers);
        await writeFileAsync('index.html', html)
        console.log('successful')
    } catch (error) {
        console.log(error)
    }
    
}

// Function call to initialize app
init();
