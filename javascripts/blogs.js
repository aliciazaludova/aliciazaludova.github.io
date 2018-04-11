const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/blogs.json");
  myRequest.send();
}

function executeThisCodeIfXHRFails () {
  console.log("somehing broke");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  createBlogPosts(data.blogs);
}

// createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog. It should call the writeToDom function for each blog.

const createBlogPosts = (blogsArray) => {
    let blogContent = "";  // empties out the var which prevents it from compounding -- declares variable
    blogsArray.forEach((blog) => {
        blogContent += `<div class="backdrop">`;
        blogContent += `<h2>${blog.title}</h2>`;
        blogContent += `<p><em>${blog.theme}</em></p>`;
        blogContent += `<p>${blog.content}</p>`;
        blogContent += `</div>`;
    })
        writeToDom(blogContent, "my-blogs");
    }

// writeToDom: this function should accept a string and print it to a div with an id of my-projects
const writeToDom = (stuffToPrint, divId) => {
  // take string and innerHTML to the divId
  const myDiv = document.getElementById(divId);
  myDiv.innerHTML += stuffToPrint;
}

startApplication();


// trouble shooting:
// check if js file is linked right
// are all functions being called properly
// are the arguments you're sending them correct?
// are all loops running through everything?