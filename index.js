const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Provide team members name:"
  },
  {
    type: "input",
    name: "job",
    message: "What is the team members job title?"
  }, 
  {
    type: "input", 
    name: "email",
    message: "Provide the team members email address:"
  }
]