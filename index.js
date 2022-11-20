const inquirer = require('inquirer');
const fs = require("fs")
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown');

function readmeTemplate(answers) {
    return `
## ${answers.projectName}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)



${renderLicenseLink(answers.license)}


## Description
    ${answers.description}

## Installation
    ${answers.installation}

${renderLicenseSection(answers.license)}
${renderLicenseBadge(answers.license)}

## questions
Here is a link to my GitHub Profile if you want to see more of my work: [${answers.github}](https://github.com/${answers.github})

`
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'What is your project name?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a brief description of your application.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'How can users install your application?'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select a license',
                choices: ['MIT', 'Apache', 'BSD', 'None']
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your GitHub username'
            },
        ])
        .then(answers => {
            console.info('Answer:', answers);
            fs.writeFile('readme.md', readmeTemplate(answers), (err) =>
                err ? console.log(err) : console.log('Successfully created readme.md!')
            );

        });
}

init();