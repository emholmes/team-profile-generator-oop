const generateTeamMemberCards = teamArray => {
  return `
    ${teamArray
      .map(member => {
        return `
          <p>${member.getName()}</p>
          <p>${member.getRole()}</p>

        `;
      })
      .join("")
    }
  `;
}


module.exports = (teamArray) => {

  return `
    ${teamArray.map(member => member.getName())}
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
      ${generateTeamMemberCards(teamArray)}
    </main>
    `;
}


