const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
// const Manager = require("./lib/manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const managerQuestions = () => {
  console.log("Please build your team");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's id?"
    }, 
    {
      type: "input", 
      name: "email",
      message: "What is the team manager's email address?"
    }, 
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team managers office number?"
    }
  ])
}

const teamMemberQuestions = (teamMember) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "nameEngineer",
      message: `What is your ${teamMember}'s name?`
    }, 
    {
      type: "input",
      name: "id",
      message: `What is your ${teamMember}'s id?`
    }, 
    {
      type: "input", 
      name: "email",
      message: `What is your ${teamMember}'s eamil address?`
    },
    {
      type: "input",
      name: "github",
      message: `What is your ${teamMember}'s username?`,
      when: (teamMember === "Engineer")
    },
    {
      type: "input",
      name: "school",
      message: `What is the name of the ${teamMember}'s school?`,
      when: (teamMember === "Intern")
    }
  ])
  .then(addTeamMember);
}

const addTeamMember = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    }
  ])
  .then(teamMember => {
    if (teamMember.role === "I don't want to add any more team members") {
      return false;
    } else {
      teamMemberQuestions(teamMember.role);
    }
  })
}

managerQuestions()
  .then(managerData => console.log(managerData))
  .then(addTeamMember)


  

  
  