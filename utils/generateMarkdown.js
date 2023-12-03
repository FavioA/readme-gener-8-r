// Function to generate the README content
function generateMarkdown(data) {
    return `
  # ${data.title}
  
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
  // Add installation instructions here
  
  ## Usage
  // Add usage information here
  
  ## License
  // Add license badge and notice here
  
  ## Contributing
  // Add contribution guidelines here
  
  ## Tests
  // Add test instructions here
  
  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}
    `;
  }
  
  // Export the function for use in index.js
  module.exports = generateMarkdown;
  