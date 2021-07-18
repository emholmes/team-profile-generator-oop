const generateManagerCard = manager => {
  if (!manager) {
    return "";
  }
  return `
    
    ${manager
      .map(member => {
        return `
        <section class="card">
          <div class="card-header">
            <h2>${member.getName().trim()}</h2>
            <p>${member.getRole()}</p>
          </div>
          <ul class="card-body">
            <li>ID: ${member.getId().trim()}</li>
            <li>Email: <a href="mailto:${member.getEmail().trim()}" class="link">${member.getEmail().trim()}</a></li>
            <li>Office number: ${member.getOfficeNumber().trim()}</li>
          </ul>
        </section>
        `;
      })
    }
  `;
}

const generateEngineerCards = engineers => {
  if (!engineers) {
    return "";
  }
  return `
    ${engineers
      .map(member => {
        return `
        <section class="card">
          <div class="card-header">
            <h2>${member.getName().trim()}</h2>
            <p>${member.getRole()}</p>
          </div>
          <ul class="card-body">
            <li>ID: ${member.getId().trim()}</li>
            <li>Email: <a href="mailto:${member.getEmail().trim()}" class="link">${member.getEmail().trim()}</a></li>
            <li>GitHub: <a href="https://github.com/${member.getGitHub().trim()}" class="link">${member.getGitHub().trim()}</a></li>
          </ul>
        </section>
        `;
      })
      .join("")
    }
  `;
}

const generateInternCards = interns => {
  if (!interns) {
    return "";
  }
  return `
    ${interns
      .map(member => {
        return `
        <section class="card">
          <div class="card-header">
            <h2>${member.getName().trim()}</h2>
            <p>${member.getRole()}</p>
          </div>
          <ul class="card-body">
            <li>ID: ${member.getId().trim()}</li>
            <li>Email: <a href="mailto:${member.getEmail().trim()}" class="link">${member.getEmail().trim()}</a></li>
            <li>School: ${member.getSchool().trim()}</li>
          </ul>
        </section>
        `
      })
      .join("")
    }
  `;
}


module.exports = (teamArray) => {
  const manager = teamArray.filter(member => member.getRole() === "Manager"); 
  const engineers = teamArray.filter(member => member.getRole() === "Engineer");
  const interns = teamArray.filter(member => member.getRole() === "Intern");
  
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
          ${generateManagerCard(manager)}
          ${generateEngineerCards(engineers)}
          ${generateInternCards(interns)}
        </section>
      </main>
      
    </body>
    `;
}


