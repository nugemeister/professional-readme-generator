// TODO: Include packages needed for this application

// write file
const fs = require('fs');

// ask the user for data
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Please reply with a description of your project.",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Please enter the author name.",
        name: "author",
    },
    {
        type: "input",
        message: "Please enter your github username.",
        name: "userGithub",
    },
    {
        type: "input",
        message: "Please enter your email.",
        name: "userEmail",
    },
    {
        type: "input",
        message: "Please enter any usage instructions for using your project.",
        name: "userStory",
    },
    {
        type: "list",
        message: "Please enter licenses for your project.",
        name: "license",
        choices: [
            {
                name: 'Apache 2.0',
                value: 'Apache2.0'
            },
            {
                name: 'GPLv2',
                value: 'GPLv2'
            },
            {
                name: 'MIT',
                value: 'MIT'
            },
            {
                name: 'None',
                value: 'None'
            },
            {
                name: 'Other',
                value: 'Other'
            }
        ],
    },
    {
        type: "input",
        message: "Please enter your user story.",
        name: "userStory",
    },
    {
        type: "input",
        message: "Please enter your acceptance criteria.",
        name: "acceptanceCriteria",
    },
    {
        type: "input",
        message: "Please enter the link to your local repo.",
        name: "link",
    },
]
// ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writeToFile is running!");
    fs.writeToFile(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log('README is generated! You can locate the file in the output folder.'))
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README generator!');
    inquirer.prompt([
        {
            type: 'list',
            message: 'You are about to begin the README generator!',
            name: 'start'
            choices: ['Go', 'Leave'],
        }
    ])
        .then((response) => {
            if(response.start === "Go")
            inquirer.prompt(questions)
            
            .then((response)) => {
                const readme = generateMarkdown(response);
                
                writeToFile("README.md", readme);
            }
        });
}

// Function call to initialize app
init();

// PROCESS
// prompt user for their answers (data obj w/ answers)
// add text to the readme template (output)
// produce the README file output