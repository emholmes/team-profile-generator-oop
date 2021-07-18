const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/page-template");
const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

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
      message: "What is the team manager's office number?"
    }
  ])
  .then(({ name, id, email, officeNumber }) => {
    this.manager = new Manager(name, id, email, officeNumber);
    team.push(this.manager);
  })
}

const engineerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is your engineer's id?"
    }, 
    {
      type: "input", 
      name: "email",
      message: "What is your engineer's email address?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineer's GitHub username?"
    }
  ])
  .then(({ name, id, email, github }) => {
    this.engineer = new Engineer(name, id, email, github);
    team.push(this.engineer);
  })
  .then(addTeamMember);
}

const internQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your intern's name?`
    }, 
    {
      type: "input",
      name: "id",
      message: `What is your intern's id?`
    }, 
    {
      type: "input", 
      name: "email",
      message: `What is your intern's email address?`
    },
    {
      type: "input",
      name: "school",
      message: `What is the name of the intern's school?`
    }
  ])
  .then(({ name, id, email, school }) => {
    this.intern = new Intern(name, id, email, school);
    team.push(this.intern);
  })
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
    if (teamMember.role === "Engineer") {
      return engineerQuestions();
    } else if (teamMember.role === "Intern") {
      return internQuestions();
    } else {
      return team;
    }
  })
}

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;

    console.log("HTMl complete!");
  })
}

const copyFile = () => {
  fs.copyFile("./src/style.css", "./dist/style.css", err => {
    if (err) throw err;

    console.log("CSS copied!");
  })
}

managerQuestions()
  .then(addTeamMember)
  .then(teamArray => {
    const indexHtml = generateHtml(teamArray);
    writeToFile("./dist/index.html", indexHtml);
    copyFile();
  })
