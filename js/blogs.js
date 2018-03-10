// all items i need to put in arrays have the class .backdrop

// var arrayElements = document.getElementsByClassName("backdrop");

// step one: have an array of blogs
// step two: touch on each elements
// have an array of projects

// Blogs Page
// Creat a file called blogs.html in the same location as your index.html file
// Create a file in the javascripts folder called blogs.js and link this file to your blogs HTML page
// Create an object for each of your blogs. Each blog should have a unique id.
// Put all the objects in a single array called blogs.
var blogs = [
  {
    id: "blog1", 
    title: "Week 1", 
    theme: "We are not in Kansas anymore.", 
    content: "There is so much to learn. We started out soft and slow on days one and two. There were introductory talks by the founder and the teachers. They seem supportive and enthusiastic. I am looking forward to this!"
    },
    {
    id: "blog2", 
    title: "Week 2", 
    theme: "Tip-toeing through the woods...",
    content: "This week we were introduced to using the terminal in tandem with GitHub. I felt like Dorothy tip-toeing through the forest of the fighting trees in the borderlands of Oz. GitHub is an unsightly, un(user)-friendly zone with an obstacle course of switches and pulleys. For comfort I lean in and hug my little dog Toto. I mean, my furry cat Frootie."
    },
    {
    id: "blog3", 
    title: "Week 3", 
    theme: "Enter the flying monkey",
    content: "JavaScript hovers over me like a flying monkey! I don't really want it to fly away; I just want it to become my pet. Everything is for loops and creating variables. I am getting used to the idea of a variable changing value as you progress through the code. JS is dynamic, afterall. It is a revelation to think about how a thing you defined at the beginning transforms to be something else at the end. I am not used to thinking about it code way. HTML is sort of like Dorothy's sleepy hometown in Kansas, and Javascript is Oz--the crazy land of the wacky and unexpected.."
    },
    {
    id: "blog4", 
    title: "Week 4", 
    theme: "Teamwork is fun!",
    content: "Our teams have been meeting for a few weeks now. I have a great team. Not only do we get stuff done but everyone is goofy and we have fun--I will spare you, gentle reader, a Wizard of Oz reference this time. But just this once. Everyone has something to contribute with our beginners' patchwork knowledge and we aren't afraid to ask each other for clarification when we need it. Regarding code, I have become aware that not everything is solved with a for loop. Too bad, since that is a snippet of code I have memorized. Functions and methods such as forEach do seem more economical. I'll sign off with one concern: Isn't it not-very-nice to call the arrow fat?"
    },
    {
    id: "blog5", 
    title: "Week 5", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog6", 
    title: "Week 6", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog7", 
    title: "Week 7", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog8", 
    title: "Week 8", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog9", 
    title: "Week 9", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog10", 
    title: "Week 10", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog11", 
    title: "Week 11", 
    theme: "Theme",
    content: "I will write something here."
    },
    {
    id: "blog12", 
    title: "Week 12", 
    theme: "Theme",
    content: "I will write something here."
    }
];
// Create two functions:
// writeToDom: this function should accept a string and print it to a div with an id of my-projects
// why writing this
 
// figure out by reviewing jsObjectsFunctions code-along below

// createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog. It should call the writeToDom function for each blog.
function printToDom(stuffToPrint, divId) {
  // take string and innerHTML to the divID
  var myDiv = document.getElementById(divId);
  console.log("myDiv", myDiv);
  myDiv.innerHTML += stuffToPrint;
}

function createBlogPosts(blogArray) {
    // take petNames and create DOM string
    // call printToDom function
    for (var i = 0; i < blogArray.length; i++) {
        var blogContent = "";  // empties out the var which prevents it from compounding -- declares variable
      
        blogContent += '<div class="backdrop">';
        blogContent +=     "<h2>" + blogArray[i].title + "</h2>";
        blogContent +=     "<p><em>" + blogArray[i].theme + "</em></p>";
        blogContent +=     "<p>" + blogArray[i].content + "</p>";
        blogContent += "</div>";

        printToDom(blogContent, "my-projects");

    }
}
createBlogPosts(blogs);


// The last line of this file should be: createBlogPosts();