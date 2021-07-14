const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email);
    
    this.role = "Engineer";
    this.github = github;
  }
}

module.exports = Engineer;