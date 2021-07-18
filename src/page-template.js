const generateManagerCard = manager => {
  if (!manager) {
    return "";
  }
  return `
    ${manager
      .map(member => {
        return `
        <p>${member.getName().trim()}</p>
        <p>${member.getRole()}</p>
        <p>${member.getId().trim()}</p>
        <p>${member.getEmail().trim()}</p>
        <p>${member.getOfficeNumber().trim()}</p>
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
        <p>${member.getName().trim()}</p>
        <p>${member.getRole()}</p>
        <p>${member.getId().trim()}</p>
        <p>${member.getEmail().trim()}</p>
        <p>${member.getGitHub().trim()}</p>
        `;
      })
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
        <p>${member.getName().trim()}</p>
        <p>${member.getRole()}</p>
        <p>${member.getId().trim()}</p>
        <p>${member.getEmail().trim()}</p>
        <p>${member.getSchool().trim()}</p>
        `
      })
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
    </head>
    <body>
    <header>My Team</header>
    </body>
    
    <main>
      ${generateManagerCard(manager)}
      ${generateEngineerCards(engineers)}
      ${generateInternCards(interns)}
    </main>
    `;
}


