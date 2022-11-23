
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.Motivation}
  ## table of content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](tests)
  * [Questions](#questions)
  ## Installation
  ${data.Project}
  ## Usage
  ${data.Solve}
  ## contributing
  ${data.Learn}
  ## test
  ${data.StandOut}
  ${data.license}
  ## Questions
  For Further Questions, Contact me at :
  * Github:[${data.github}](https://github.com/${data.github})
`;
}
module.exports = generateMarkdown;