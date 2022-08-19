// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache2.0") {
    return "License-Apache_2.0-blue.svg"
  } else if(license === "BSD-3-Clause") {
    return "License-BSD-3-Clause-blue.svg"
  } else if(license === "GPLv2") {
    return "License-GPLv2-blue.svg"
  } else if(license === "MIT") {
    return "License-MIT-yellow.svg"
  } else {
    return ""
  }
}

function renderLicenseLink(license) {
  if(license === "None") {
    return ""
  } else if(license === "Other") {
    return ""
  } else {
    return license
  }
}

function renderLicenseShortcut(license) {
  if(license === "None") {
    return "* [Contributing](#contributing)";
  } else 
  return `* [License](#license)
  * [Contributing](#contributing)`
}

function renderLicenseSection(license) {
  if(license === "None") {
    return "";
  } else if(license === "Other") {
    return "";
  } else return `
## License:
[![License](https://img.shields.io/badge/${renderLicenseBadge(license)})](https://opensource.org/licenses/${renderLicenseLink(license)})
  
---
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generateMarkdown is running!");
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseSection(data);
  return `
# ${data.projectTitle};

## Project Explained
  ${data.projectDescription}
---
## Table of Contents:
* [Success Criteria](#success)
* [Acceptance Criteria](#acceptanceCriteria)
* [Installation](#installation)
* [Tests](#tests)
* [Link to Deployed Application](#link)
* [Usage](#usageInstructions)
${renderLicenseShortcut(data.license)}
---
## Success Criteria

### User Stories
  ${data.userStory}

### Acceptance Criteria
  ${data.acceptanceCriteria}

## Installation:
To install the necessary dependancies for this application, please run the below:
\`\`\`
${data.installation}
\`\`\`

## Tests:
To run tests for this application, run the following command:
\`\`\`
${data.tests}
\`\`\`

## Link to Deployed Application
  ${data.link}

## Usage Instructions
  ${data.usageInstructions}
  ${renderLicenseSection(data.license)}
---
### Contributing
* ${data.author}
* ${data.userEmail}
<a href="https://github.com/${data.userGithub}" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
* ${data.contributing}
`; 
}

module.exports = generateMarkdown;
