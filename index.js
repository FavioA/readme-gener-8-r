// const inquirer = require('inquirer');
let inquirer;

// Use dynamic import to resolve the ES Module issue
try {
  inquirer = require('inquirer');
} catch (error) {
  console.error(
    'Error loading inquirer module. Try running "npm install inquirer" to install it.'
  );
  process.exit(1);
}

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// License options array
const licenseOptions = [
  'MIT License',
  'Apache License 2.0',
  'GNU GPLv3',
  // Add more license options as needed
];

// Questions for the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: licenseOptions,
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to initialize the application
async function init() {
  try {
    // Prompt the user with questions
    const userResponses = await inquirer.prompt(questions);

    // Generate the README content
    const markdown = generateMarkdown(userResponses);

    // Save the markdown content to a README.md file
    fs.writeFileSync('README.md', markdown);

    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Invoke the application
init();

