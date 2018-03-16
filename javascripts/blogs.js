// all items to be put into arrays have the class .backdrop

// step one: have an array of blogs
// step two: touch on each element

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
    content: "This week we were introduced to using the terminal in tandem with GitHub. I felt like Dorothy creeping carefully through the forest of the fighting trees in the borderlands of Oz. GitHub is an unsightly, un(user)-friendly zone with an obstacle course of switches and pulleys. For comfort I lean in and hug my little dog Toto. I mean, my furry cat Frootie."
    },
    {
    id: "blog3", 
    title: "Week 3", 
    theme: "Enter the flying monkey",
    content: "JavaScript hovers over me like a flying monkey! I don't really want it to fly away; I just want it to become my pet. Everything is for loops and creating variables. I am getting used to the idea of an element changing value as you progress through the code (because you make it do that!). JS is dynamic, afterall. To experienced programmers it must sound like I'm stating the obvious, but it is new for me to see an element I defined at the beginning transforming into something else at the end. I am not used to thinking about code that way. HTML is sort of like Dorothy's sleepy hometown in Kansas where nothing changes, and Javascript is Oz--the crazy land where stuff happens."
    },
    {
    id: "blog4", 
    title: "Week 4", 
    theme: "Teamwork is fun!",
    content: "Our teams have been meeting for a few weeks now. I have a great team. Not only do we get stuff done but everyone is goofy and we have fun. I will spare you, gentle reader, a Wizard of Oz reference this time! But just this once. In our group work everyone has something to contribute with our beginners' patchwork knowledge and we aren't afraid to ask each other for clarification when we need it. Regarding code, I have become aware that not everything is solved with a for loop. Too bad, since that is a snippet of code I have memorized. Functions and methods such as forEach do seem more economical. I'll sign off with one concern: Isn't it not-very-nice to call the arrow fat?"
    },
    {
    id: "blog5", 
    title: "Week 5", 
    theme: "Teamwork is challenging!",
    content: "I've been assigned the role of team leader for our current project, creating a band website. Everything was peaceful until we came to a bump in the road (Wizard of Oz reference spared, dear reader): the style and character of the site. One teammate had seen my personal site and was impressed with the styling I'd done, and suggested that I be the one to come up with our styling. Keep in mind that the goal of this project is to practice the GitHub flow with a team; coordinated pushing and pulling and merging, as well as to practice JS, as each page must contain a loop and be written with functions. I whipped up my idea of how the site of a metal band called The Frog Sayeth Croak (who plays in dive bars) might look. My vision was to have a tacky, campy looking site that could have been made by a newbie coder who is a fan of the band. It made sense to me since I am a newbie, we are not using any frameworks or libraries, and I think metal is a funny genre for taking itself so seriously. So I came up with a theme of 'murky, green, dark, kitschy, sorta bad taste'. Swampy colors had already been decided on by the group, with neon green and a putrid rust color used sparingly. For headers I found a Google font called 'Eater', appropriate for Halloween and suggested we leave tacky bullets on lists and that the neon green will outline images upon hover. SLICK!!! All set on a background with a corny linear gradient ranging from grey to dark green. Bloated with satisfaction and proud of my amazing abilities to channel swamp metal while not spending too much time styling, I'd decided this was enough for our purpose and shared it with the team. The first reaction from a teammate was 'METAL'. Alright, doing fine so far. But the second teammate was not so accepting. I realized then that we should have discussed more about the character of the band and how it will be expressed. He was alarmed (it came through Slack as a state of panic) and said that regardless of whether 'tacky' is deliberately 'tacky' or unintentionlly so, it is still just 'tacky' and that we can't do it this way because the project will be going into our portfolios. This was a surprise to me, as I hadn't thought of using early projects in my portfolio since that is our place to mess up and learn. I articulated this and agreed that we can all discuss the theme further and come up with something mutually pleasing. And then we need to move on to the JavaScript!"
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
 
function writeToDom(stuffToPrint, divId) {
  // take string and innerHTML to the divId
  var myDiv = document.getElementById(divId);
  myDiv.innerHTML += stuffToPrint;
}
// createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog. It should call the writeToDom function for each blog.
function createBlogPosts(blogArray) {
    for (var i = 0; i < blogArray.length; i++) {
        var blogContent = "";  // empties out the var which prevents it from compounding -- declares variable
      
        blogContent += '<div class="backdrop">';
        blogContent +=     "<h2>" + blogArray[i].title + "</h2>";
        blogContent +=     "<p><em>" + blogArray[i].theme + "</em></p>";
        blogContent +=     "<p>" + blogArray[i].content + "</p>";
        blogContent += "</div>";

        writeToDom(blogContent, "my-blogs");

    }
}
createBlogPosts(blogs);


// The last line of this file should be: createBlogPosts();

// check if js file is linked right
// are all functions being called properly
// are the arguments you're sending them correct?
// are all loops running through everything?