class Engineer {
  constructor(name, id, email, role, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.github = github;
  }
}

const engineer = new Engineer("Erin", 1, "emholmes@email.com", "Engineer", "emholmes");

module.exports = Engineer;