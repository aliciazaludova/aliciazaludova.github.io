console.log("projects page");

// Create two functions:

// writeToDom: this function should accept a string and print it to a div with an id of my-projects
const writeToDom = (stuffToPrint, divId) => {
    const myDiv = document.getElementById(divId);
    myDiv.innerHTML += stuffToPrint;
}

// createProjectCards: this function should loop through the projects array and build up the html that you have on your projects page. It should call the writeToDom function for each project.
const createProjectCards = (projectsArray) => {
    for (var i = 0; i < projectsArray.length; i++) {
        var projectsContent = "";   
        projectsContent += '<article class="backdrop">';
        projectsContent +="<h2>" + projectsArray[i].title + "</h2>";
        projectsContent += "<p><em>" + projectsArray[i].description + "</em></p>";
        projectsContent += "<a href='"+ projectsArray[i].link + "'>";
        projectsContent += "<img src='images/github-project.png' alt='github project logo'>";
        projectsContent += "</a>";   
        projectsContent += '</article>';
        
    writeToDom(projectsContent, "my-projects");
    }
}

createProjectCards(projects);

// The last line of this file should be: createProjectCards();