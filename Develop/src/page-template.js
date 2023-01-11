// create the team
const generateCrewMembers = (team) => {
 return team.map( member => {
    if (member.getRole() === "Engineer") {
      return `
      <article>
        <h2 class="text-white bg-primary p-3">${member.getRole()}</h2>
        <ul class="text-black">
          <li>ID: ${member.getId()}</li>
          <li>Email: ${member.getEmail()} </li>
          <li>GitHub: <a href="#github">${member.getGitHub()}</a></li>
        </ul>
      </article>
      `
    } 
    if (member.getRole() === "Intern") {
      return `
      <article>
        <h2 class="text-white bg-primary p-3">${member.getRole()}</h2>
        <ul class="text-black">
          <li>ID: ${member.getId()}</li>
          <li>Email: ${member.getEmail()} </li>
          <li>School:>${member.getSchool()}</a></li>
        </ul>
      </article>
      `
    }
      if (member.getRole() === "Manager") {
        return `
        <article>
          <h2 class="text-white bg-primary p-3">${member.getRole()}</h2>
          <ul class="text-black">
            <li>ID: ${member.getId()}</li>
            <li>Email: ${member.getEmail()} </li>
            <li>OfficeNumber:>${member.getOfficeNumber()}</a></li>
          </ul>
        </article>
        `

      }
    

  }).join("");
};
// export function to generate entire page
module.exports = (team) => {
    // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
return `
<!-- Instructor provided template -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <title>Employee Management System</title>
  <!-- Minified version -->
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";
    

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
      background-color: rgb(252, 249, 249);
      margin-top: 20px;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1 class="text-warning">My Team</h1>
  </header>
  <main class="p-3">
    <article>
      <h2 class="text-white bg-danger p-3">Manager</h2>
      <ul class=" text-black">
        <li>ID: 1</li>
        <li>Email: manager@email.com</li>
        <li>Office Number: 123</li>
      </ul>
    </article>
    <article>
      <h2 class="text-white bg-primary p-3">Engineer</h2>
      <ul class="text-black">
        <li>ID: 2</li>
        <li>Email: engineer@email.com</li>
        <li>GitHub: <a href="#github">person</a></li>
      </ul>
    </article>
    <article>
      <h2 class="text-white bg-success p-2">Intern</h2>
      <ul class="text-black">
        <li>ID: 3</li>
        <li>Email: intern@email.com</li>
        <li>School: FUN University</li>
      </ul>
    </article>
    ${generateCrewMembers(team)}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>

`
};