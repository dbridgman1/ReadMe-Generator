// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === null) return "";
    else{
       return `https://img.shields.io/badge/license-${license}-red`
    }
    
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return "https://choosealicense.com/"

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) =>
  `
#  ${answers.title}

## Description
  
${answers.description}

## Table of contents

 - [Description](#Description)
 - [Installation](#installation)
 - [Usage](#Usage)
 - [License](#License)
 - [Contributing](#Contributing)
 - [Test](#Test)
 - [Questions](#Questions)
 
## Installation
${answers.install}

## Usage
${answers.usage}

## License
${renderLicenseSection(answers.license)}

## Contributing
${answers.contribute}

## Test
${answers.tests}

## Questions
[Github Profile]("https://github.com/${answers.questions}")
I can be reached by email at ${answers.question}
  
`  

module.exports = generateMarkdown;
