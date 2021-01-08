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
const generateMarkdown = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./readme generatpr.css">
      <title>Document</title>
  </head>
  <body>
      <div class="container">
          <div class="row justify-content-center header">
              <h1 id="header">${answers.title}</h1>
          </div>
          <div class="row">
              <h2 id="description">Description</h2>
          </div><hr>
          <div class="row">
              <p>${answers.description}</p>
          </div>
          <div class="row">
              <h2>Table of contents</h2>
          </div><hr>
          <div class="row">
              <ul>
                  <a href="#description"><li>Description</li></a>    
                  <a href="#install"><li>Installation</li></a>
                  <a href="#usage"><li>Usage</li></a>
                  <a href="#license"><li>License</li></a>
                  <a href="#contrib"><li>Contributing</li></a>
                  <a href="#test"><li>Test</li></a>
                  <a href="#question"><li>Questions</li></a>
              </ul>
          </div>
          <div class="row">
              <h2 id="install">Installation</h2>
          </div><hr>
          <div class="row">
              <p>${answers.install}</p>
          </div>
          <div class="row">
              <h2 id="usage">Usage</h2>
          </div><hr>
          <div class="row">
              <p>${answers.usage}</p>
          </div>
          <div class="row">
              <h2 id="license">License</h2>
          </div><hr>
          <div class="row">
              <p>${answers.license}</p>
          </div>
          <div class="row">
              <h2 id="contrib">Contributing</h2>
          </div><hr>
          <div class="row">
              <p>${answers.contribute}</p>
          </div>
          <div class="row">
              <h2 id="test">Test</h2>
          </div><hr>
          <div class="row">
              <p>${answers.tests}</p>
          </div>
          <div class="row">
              <h2 id="question">Questions</h2>
          </div><hr>
          <div class="row">
              <a href="https://github.com/${answers.questions}">Link to github profile</a>
          </div>
          <div class="row">
              <p>I can be reach by email at ${answers.question}></p>
          </div>
      </div>
  </body>
  </html>
`;


module.exports = generateMarkdown;
