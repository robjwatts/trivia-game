//define the starting number of correct answers, incorrect answers, 
// unanswers questions, and seconds in our text timer

var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 0;

$("#startButton").on("click", function() {
	countDown(30);
})

//this is our timer. still workin' on
    function countDown (count) {
    
      if (count > 0) {
       var d = document.getElementById("time");
       d.innerHTML = count;
       setTimeout (function() { countDown(count-1); }, 1000);
       }
      else
      	alert("Time's Up! You completely failed. Please reload the page.");
       // document.location = "someotherpage.html";
       
    }
    
    // </script>











