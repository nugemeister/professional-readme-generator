// TODO: Include packages needed for this application

// write file
const fs = require('fs');

// ask the user for data
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');

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
        message: "Any notes for people that wish to contribute to this project?",
        name: "contribute",
    },
    {
        type: "input",
        message: "Please enter any usage instructions for using your project.",
        name: "usageInstructions",
    },
    {
        type: "input",
        message: "Please enter the commands needed to install your project.",
        name: "installation",
        default: 'npm i',
    },
    {
        type: "input",
        message: "Please enter which command should be used to run tests.",
        name: "tests",
        default: 'npm test',
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
                name: 'BSD 3',
                value: 'BSD-3-Clause'
            },
            {
                name: 'GPLv3',
                value: 'GPLv3'
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
    fs.writeFileSync(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log('README is generated! You can locate the file in the output folder.'))
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README generator!');
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to begin the README generator?',
            name: 'start',
            choices: ['Yes', 'No'],
        }
    ])
        .then((response) => {
            if(response.start === "Yes") {
            inquirer.prompt(questions)
            
            .then((response) => {
                const readme = generateMd(response);
                
                writeToFile("README.md", readme);
            })}
        });
}

// Function call to initialize app
init();

// PROCESS FLOW NOTES:
// prompt user for their answers (data obj w/ answers)
// add text to the readme template (output)
// produce the README file output