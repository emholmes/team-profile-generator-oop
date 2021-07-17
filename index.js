const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");

const managerQuestions = () => {
  console.log("Please build your team");
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's id?"
    }, 
    {
      type: "input", 
      name: "managerEmail",
      message: "What is the team manager's email address?"
    }, 
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team managers office number?"
    }
  ]);
}

const engineerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineers's name?"
    }, 
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineers's id?"
    }, 
    {
      type: "input", 
      name: "engineerEmail",
      message: "What is your engineers's eamil address?"
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "What is your engineers GitHub username?"
    }
  ])
  .then(addTeamMember)
}

const internQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?"
    }, 
    {
      type: "input",
      name: "internId",
      message: "What is your intern's id?"
    }, 
    {
      type: "input", 
      name: "internEmail",
      message: "What is your intern's eamil address?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the name of the intern's school?"
    }
  ])
  .then(addTeamMember)
}

const addTeamMember = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "chooseTM",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    }
  ])
  .then(teamInformation => {
    if (teamInformation.chooseTM[0] === "Engineer") {
      engineerQuestions();
    } 
    if (teamInformation.chooseTM[0] === "Intern") {
      internQuestions();
    } 
  })
}

managerQuestions()
  .then(managerData => {
    console.log(managerData);
  })
  .then(addTeamMember)

  
  