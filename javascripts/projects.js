console.log("projects page");

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/projects.json");
  myRequest.send();
  console.log(startApplication);
  console.log(myRequest);
}

function executeThisCodeIfXHRFails () {
  console.log("somehing broke");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  buildProjectCards(data.projects);
  console.log(executeThisCodeAfterFileLoaded);
}
// createProjectCards: this function should loop through the projects array and build up the html that you have on your projects page. It should call the writeToDom function for each project.
const buildProjectCards = (projectsArray) => {
    for (var i = 0; i < projectsArray.length; i++) {
        let projectsContent = "";   
        projectsContent += '<article class="backdrop">';
        projectsContent +="<h2>" + projectsArray[i].title + "</h2>";
        projectsContent += "<p><em>" + projectsArray[i].description + "</em></p>";
        projectsContent += "<a href='"+ projectsArray[i].link + "'>";
        projectsContent += "<img src='"+ projectsArray[i].imgSrc +"' alt='"+ projectsArray[i].alt +"'>";
        projectsContent += "</a>";   
        projectsContent += '</article>';
        
    writeToDom(projectsContent, "my-projects");
    }
}

// writeToDom: this function should accept a string and print it to a div with an id of my-projects
const writeToDom = (domString, divId) => {
  const myDiv = document.getElementById(divId);
  myDiv.innerHTML += domString;
}

startApplication();

// notes ====================================