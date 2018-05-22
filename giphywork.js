//task 1: create array of topics
var topics = ["poppy", "sunflower", "lavender", "rose", "dandelion"];

//store giphy API URL for specified query params
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BVqpweDs6Tt0YJUCYGiuPuNgi5uMH50h&q="+topics+"&limit=10";
//ajax request
$.ajax({
    url: queryURL,
    method: 'GET'
})
    //store retrieved data in response object
    .then(function (response) {
        //print entire object to console
        console.log(response);
        console.log(response.title);
        //saving property of data in variable
        var ajaxFlower = response;
        // create new image div for new variable
        var displayFlower = $("<img>");
        //JSON stringify
        $('#display-flowers').html(JSON.stringify(response));
        //set new src for image variable
        displayFlower.attr("src", ajaxFlower);
        //set alternate attribute
        displayFlower.attr("alt", "flower gif");
        //append flowers to empty div
        $("#display-flowers").append(displayFlower);






    })
//loads html first then js when ready
$(document).ready(function () {
    //create for loop to display array items as buttons
    for (var i = 0; i < topics.length; i++) {
        //creates new variable, new button div
        var newFlower = $("<button>");
        //adds bootstrap button class to array items
        newFlower.addClass('btn btn-primary');
        //add a data attribute
        newFlower.attr('data-name', topics[i]);
        //add css styling
        newFlower.addClass('newFlower');
        //adds topics array text to variable/button
        newFlower.text(topics[i]);
        //display array items as buttons  with added attributes
        $('#flowers').append(newFlower);

    }

    //event handler-user input
    $("#submit").on("click", function (event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var userFlower = $("#new-flower").val();
        // Adding the movie from the textbox to our array
        topics.push(userFlower);
        console.log('the new flower is:' + ('#new-flower'));

    });
    //on user click of topic button, run following function
    $("#flowers").on("click", function () {
     // event.preventDefault() can be used to prevent an event's default behavior.
      event.preventDefault();
        //run query function
        ajax(response);
    })
   

    

    //})

});
