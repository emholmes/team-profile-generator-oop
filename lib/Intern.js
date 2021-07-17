const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    
    this.school = school;
    this.role = "Intern";
  }
}

Intern.prototype.getSchool = function() {
  return this.school;
}

Intern.prototype.getRole = function() {
  return this;
}

module.exports = Intern;