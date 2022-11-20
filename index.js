const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkDown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Title",
        name: "title",
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "Motivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "Project",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "Solve",
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "Learn",
    },
    {
        type: "input",
        message: "What makes your project stand out?",
        name: "StandOut",
    },
    {
        type: "list",
        message: "What license does you application use?",
        name: "license",
        choices: ['The MIT License', 'GNU General Public License version 3', 'other']
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkDown(data), (err) =>
   err ? console.error(err) : console.log("You have successfully generated your file!")
    );
};
// TODO: Create a function to initialize app
function init() {
    const startQuestions = () => {
        return inquirer.prompt(questions);
    };
    startQuestions().then((response) => writeToFile("README.md", response))
};
// Function call to initialize app
init();