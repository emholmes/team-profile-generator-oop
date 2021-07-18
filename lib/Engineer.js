const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    
    this.github = github;
    this.role = "Engineer";
  }
}

Engineer.prototype.getGitHub = function() {
  return this.github;
}

Engineer.prototype.getRole = function() {
  return this.role;
}

module.exports = Engineer;