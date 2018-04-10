// all items to be put into arrays have the class .backdrop

// step one: have an array of blogs
// step two: touch on each element

// Blogs Page
// Creat a file called blogs.html in the same location as your index.html file
// Create a file in the javascripts folder called blogs.js and link this file to your blogs HTML page
// Create an object for each of your blogs. Each blog should have a unique id.
// Put all the objects in a single array called blogs.
const blogs = [
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
    content: "Our teams have been meeting for a few weeks now. I have a great team. Not only do we get stuff done but everyone is goofy and we have fun. I will spare you, gentle reader, a Wizard of Oz reference this time! But just this once. In our group work everyone has something to contribute with our beginners' patchwork knowledge and we aren't afraid to ask each other for clarification when we need it. Regarding code, I have become aware that not everything is solved with a for loop. Too bad, since that is a snippet of code I have memorized. Functions and methods such as forEach do seem more economical."
    },
    {
    id: "blog5", 
    title: "Week 5", 
    theme: "Teamwork is challenging!",
    content: "Everything was peaceful until my team came to a bump in the road (Wizard of Oz reference spared, but just this once). I would be the one to determine the style of our website, which was for a hypothetical metal band called 'The Frog Sayeth Croak'. Styling was not a priority (or, MVP--Minimum Viable Product), as the project goal was to practice GitHub workflow and JavaScript looping and functions. Our instructor said we would receive bonus points if our site looked like an old-school MySpace page. FUN!!! My vision was tackiness--something with the imprint of a newbie coder--maybe a fan of the band. It made sense to me as a beginner and you'd see in our code that we weren't using any frameworks or libraries. I started the style guide with 'murky, green, dark (swampy--after all, this band has 'frog' in their name), kitschy, and sorta bad taste'. Neon green would outline images upon hover (only slightly obnoxious) and a putrid rust would glow behind headers with a Halloweeny Google font called 'Eater'! Oh, and let's leave the bullets on lists. And yeah, let's have lists! SLICK!!! This glory would sit on a background of grey-to-green gradient. Bloated with satisfaction in achieving such cheekiness, I shared it with the group. The first reaction from a teammate was 'METAL'. The second was not so accepting. Deflated, I realized our discussion about the character of the band and how it would be expressed had not been thorough. The dissenting teammate explained that 'regardless of whether tacky is deliberately tacky or unintentionlly so, it is still just tacky'. I admit I was disappointed my aesthetic was not appreciated. We all needed agree on the this, so a couple teammates contributed their ideas and we ended up blending elements of each. The site didn't end up having the garish purity that I had hoped for but it maintained some of it and everyone was happy."
    },
    {
    id: "blog6", 
    title: "Week 6", 
    theme: "ES6 is better.",
    content: "We were introduced to the syntax of ES6, which makes certain things less tedious, such as concatenating tags of html strings with objects in JS. And there are the differences between statements 'var', 'let', and 'const'. They vary in that 'var' allows you to define, update, and redefine a value and can be block or globally-scoped; 'let' allows you to define and update, and 'const' allows you to define (only). These latter two are block-scoped and were developed because the global-scope capability of 'var' is a little dangerous. If it is defined outside a function 'naming collisions' can occur. I comprehend these differences in theory, but know that to really understand I'll have to become more familiar with using them and probably encounter some breakages. I was glad to learn about template literals. They seem more efficient and easier on the eye, as does the fat arrow function. I'll sign off with once concern, however. Isn't it not very nice to call the arrow 'fat'?"
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
 
const writeToDom = (stuffToPrint, divId) => {
  // take string and innerHTML to the divId
  const myDiv = document.getElementById(divId);
  myDiv.innerHTML += stuffToPrint;
}
// createBlogPosts: this function should loop through the BLOGS array and build up the html for each blog. It should call the writeToDom function for each blog.

// function createBlogPosts(blogArray) {
const createBlogPosts = blogs.forEach((blog) => {
    // for (var i = 0; i < blogArray.length; i++) {
        let blogContent = "";  // empties out the var which prevents it from compounding -- declares variable
        blogContent += `<div class="backdrop">`;
        blogContent +=     `<h2>${blogArray[i].title}</h2>`;
        blogContent +=     `<p><em>${blogArray[i].theme}</em></p>`;
        blogContent +=     `<p>${blogArray[i].content}</p>`;
        blogContent += `</div>`;

        writeToDom(blogContent, "my-blogs");

    });
createBlogPosts(blogs);

// https://hackernoon.com/getting-to-grips-with-es6-variables-f27b72798bf3
// The last line of this file should be: createBlogPosts();

// check if js file is linked right
// are all functions being called properly
// are the arguments you're sending them correct?
// are all loops running through everything?