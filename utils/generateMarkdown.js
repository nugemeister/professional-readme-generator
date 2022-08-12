// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache2.0") {
    return "License-Apache_2.0-blue.svg"
  } else if(license === "GPLv2-blue.svg") {
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

function renderLicenseInfo(license) {
  if(license === "None") {
    return "";
  } else 
  return `* [License](#license)`
}

function renderLicenseInfo(license) {
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
  renderLicenseInfo(data);
  return `
# ${data.projectTitle};

## Project Explained
  ${data.projectDescription}

## Success Criteria

### User Stories
  ${data.userStory}

### Acceptance Criteria
  ${data.acceptanceCriteria}

## Link to Deployed Application
  ${data.link}

## Usage Instructions
  ${data.usageInstructions}
  ${renderLicenseInfo(data.license)}

### Authors
* ${data.author}
* ${data.userEmail}
* ${data.userGithub}

`; 
}

module.exports = generateMarkdown;
