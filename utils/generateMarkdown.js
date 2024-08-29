// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license || license === "None") {
      return '';
    }
  
    const badges = {
      MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    };
  
    return badges[license] || '';
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license || license === "None") {
      return '';
    }
  
    const links = {
      MIT: 'https://opensource.org/licenses/MIT',
      GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    };
  
    return links[license] || '';
  }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === "None") {
      return '';
    }
  
    return `## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
  `;
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
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
  
  ## License
  ${data.license !== 'None' ? `This project is licensed under the ${data.license} license.` : 'No license'}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please contact me via [GitHub](https://github.com/${data.github}) or [email](mailto:${data.email}).
  `;
  }