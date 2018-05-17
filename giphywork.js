//task 1: create array of topics
 var topics=["poppy","sunflower", "lavender","rose","dandelion"];

 //loads html first then js when ready
 $(document).ready(function(){
 //create for loop to display array items as buttons
 for (var i=0; i<topics.length; i++){
     //creates new variable, new button div
     var newFlower= $("<button>");
     //adds bootstrap class to array items
     newFlower.addClass('btn btn-primary');
     //add a data attribute
     newFlower.attr('data-name',topics[i], 'newFlower');
      //adds topics array text to variable/button
     newFlower.text(topics[i]);
     //display array as buttons or add buttons to html
     $('#flowers').append(newFlower);
 }


//task 2: use ajax to connect to giphy api

 //Make the AJAX request to the API - GETs the JSON data at the queryURL.
 var queryURL="https://www.api.giphy.com/?q="+topics+"&flowers&api_key=BVqpweDs6Tt0YJUCYGiuPuNgi5uMH50h&limit=10";
 $.ajax({
 url:queryURL,
 method:'GET' })

 //task 3: store retrieved data in response object
 .then(function(response){
     console.log(queryURL);
   console.log(response);
 $("#flowers").html(response.topics[i]);

//task 4:display retrieved data in specified




});
 
});