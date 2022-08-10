// TODO: Include packages needed for this application

// write file
const fs = require('fs');

// ask the user for data
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// generate the HTML
const generateMd = require("./utils/generateMarkdown");

var fileName = "OUTPUT_README.md"

// TODO: Create an array of questions for user input
// const questions = [
//     // PLACEHOLDER
// ]

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {


};

// TODO: Create a function to initialize app
// function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of your project?",
                name: "projectName",
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
        ]);
        .then((answers) => {
            const readmeContent = generateMd(answers);

            fs.generateMarkdown('OUTPUT_README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README file!')
            );
        });
// };


// Function call to initialize app
// init();

// PROCESS
// prompt user for their answers (data obj w/ answers)
// add text to the readme template (output)
// produce the README file output