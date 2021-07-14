const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
}

Manager.prototype.getRole = function() {
  return "Manager";
}

module.exports = Manager;
    