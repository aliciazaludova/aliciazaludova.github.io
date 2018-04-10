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