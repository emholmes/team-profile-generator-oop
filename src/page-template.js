const generateUniqueProp = (employee, role) => {
  if (role === "Manager") {
    return `<li>Office number: ${employee.getOfficeNumber().trim()}</li>`;
  }
  if (role === "Engineer") {
    return `<li>GitHub: <a href="https://github.com/${employee.getGitHub().trim()}" class="link">${employee.getGitHub().trim()}</a></li>`;
  }
  if (role === "Intern") {
    return `<li>School: ${employee.getSchool().trim()}</li>`
  }
}

const generateTeamCards = (teamArray) => {
  return `
    ${teamArray
      .map(employee => {
        let role = employee.getRole();
        return `
          <section class="card">
            <div class="card-header">
              <h2>${employee.getName().trim()}</h2>
              <p>${role}</p>
            </div>
            <ul class="card-body">
              <li>ID: ${employee.getId().trim()}</li>
              <li>Email: <a href="mailto:${employee.getEmail().trim()}" class="link">${employee.getEmail().trim()}</a></li>
              ${generateUniqueProp(employee, role)}
            </ul>
          </section>
        `;
      })
      .join("")
    }
  `;
}

module.exports = (teamArray) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <section class="cards-container">
          
          ${generateTeamCards(teamArray)}
          
        </section>
      </main>
    </body>
    `;
}
