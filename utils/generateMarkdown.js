// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (!license || license === 'None') return '';
    let badge = '';
    switch (license) {
        case 'MIT':
            badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
            break;
        case 'Apache 2.0':
            badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
            break;
        case 'GPL 3.0':
            badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
            break;
        case 'BSD 3':
            badge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
            break;
        default:
            // Default case can be an empty string or a generic badge
            badge = '';
    }
    return badge;
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    if (!license || license === 'None') return '';
    let link = '';
    switch (license) {
        case 'MIT':
            link = 'https://opensource.org/licenses/MIT';
            break;
        case 'Apache 2.0':
            link = 'https://opensource.org/licenses/Apache-2.0';
            break;
        case 'GPL 3.0':
            link = 'https://www.gnu.org/licenses/gpl-3.0';
            break;
        case 'BSD 3':
            link = 'https://opensource.org/licenses/BSD-3-Clause';
            break;
        default:
            link = '';
    }
    return link;
  }
  
  // Function to return the license section of README
  function renderLicenseSection(license) {
    if (!license || license === 'None') return '';
    return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }

// Function to generate the README content
function generateMarkdown(data) {
    return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}
    `;
  }
  
  // Export the function for use in index.js
  module.exports = generateMarkdown;
  