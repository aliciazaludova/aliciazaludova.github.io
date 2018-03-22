console.log("projects page");

// Projects Page
// Take the information from your projects html and create an object for each project. Each project should have a unique id.

var projects = [
    {
        id: "project1",
        title: "Project 1",
        description: "Description of this project",
        link: "https://github.com/aliciazaludova",
        imgSrc: "images/github-project.png",
        alt: "Github project logo"

    },
    {
        id: "project2",
        title: "Project 2",
        description: "Description of this project",
        link: "https://github.com/aliciazaludova",
        imgSrc: "../images/github-project.png",
        alt: "Github project logo"
    },
    {
        id: "project3",
        title: "Project 3",
        description: "Description of this project",
        link: "https://github.com/aliciazaludova",
        imgSrc: "../images/github-project.png",
        alt: "Github project logo"
    },
    {
        id: "project4",
        title: "Project 4",
        description: "Description of this project",
        link: "https://github.com/aliciazaludova",
        imgSrc: "../images/github-project.png",
        alt: "Github project logo"
    },
    {
        id: "project5",
        title: "Project 5",
        description: "Description of this project",
        link: "https://github.com/aliciazaludova",
        imgSrc: "../images/github-project.png",
        alt: "Github project logo"
    },
    {
        id: "project6",
        title: "Project 6",
        description: "Description of this project",
        link: "https://github.com/aliciazaludova",
        imgSrc: "../images/github-project.png",
        alt: "Github project logo"
    }
]
// Put all the objects in a single array called projects.
// var projects = [
//   {
//     id: "project1", 
//     title: "Cool Project", 
//     imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
//     description: "This is the best project",
//     githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
//     }
// ];

// Create two functions:

// writeToDom: this function should accept a string and print it to a div with an id of my-projects
function writeToDom(stuffToPrint, divId) {
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stuffToPrint;
}

// createProjectCards: this function should loop through the projects array and build up the html that you have on your projects page. It should call the writeToDom function for each project.
function createProjectCards(projectsArray) {
    for (var i = 0; i < projectsArray.length; i++) {
        var projectsContent = "";   
        projectsContent += '<article class="backdrop">';
        projectsContent +="<h2>" + projectsArray[i].title + "</h2>";
        projectsContent += "<p><em>" + projectsArray[i].description + "</em></p>";
        projectsContent += "<a href='"+ projectsArray[i].link + "'>";
        projectsContent += "<img src='images/github-project.png' alt='github project logo'>";
        projectsContent += "</a>";   
        projectsContent += '</article>';
        // It hadn't worked with the below. Quotes in <a href part were off.
        // projectsContent += "<article class='backdrop'>";
        // projectsContent += "<h2>" + projectsArray[i].title + "</h2>";
        // projectsContent += "<p><em>" + projectsArray[i].description + "</em></p>";
        // projectsContent += "<a href=" + projectsArray[i].link + "target=_'blank'><img src=" + projectsArray[i].imgSrc + "alt=" + projectsArray[i].alt + "></a>";   
        // projectsContent += "</article>";

        // HERE IS THE HTML PLACED INTO THE ABOVE=================
        // <article class="backdrop">
        // <h2>Project 6</h2>
        // <p><em>Description of project 6</em></p>
        // <a href="https://github.com/aliciazaludova" target="_blank">  <img src="images/github-project.png" alt="github project logo"></a>
        // </article> -->

    writeToDom(projectsContent, "my-projects");
    }
}

createProjectCards(projects);

// The last line of this file should be: createProjectCards();