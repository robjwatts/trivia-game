$( document ).ready(function() {
    console.log( "ready!" );


var amountCorrect = 0; 

var amountWrong = 0;
//define the starting number of correct answers, incorrect answers, 
// unanswers questions, and seconds in our text timer




$("#startButton").on("click", function() {
	countDown(30);
})



handleClick();

  
tallyScore();

  var countDownId;


function tallyScore() {
  $("#tallyScore").on("click", function() {
  clearTimeout(countDownId);
  $("#correctResults").html(amountCorrect);
  $("#wrongResults").html(amountWrong);
  //handle click and tally the score of correct incorrect
})
}


//this is our timer. still workin' on
    function countDown (count) {
    console.log("I'm in the countDown function..")
      if (count > 0) {
       var d = document.getElementById("time");
       d.innerHTML = count;
    countDownId=setTimeout (function() { countDown(count-1); }, 1000);
       }
       else 
      	alert("Time's Up! You completely failed. Please reload the page.");
      clearTimeout (d);

      
       // document.location = "someotherpage.html";
       
    }

function handleClick(){   
console.log("I'm in the handleClick function!");      
         
// for(var i = 1; i <= 5; i++) {
  var radios = document.getElementById('answer');
  for(var i = 0; i < radios.length; i++) {
    var radio = radios[i];
    if(radio.value == "right" && radio.checked) {
      amountCorrect++;
      console.log(amountCorrect);

     
          

}

}

}

function handleClickWrong(){   
console.log("I'm in the handleClickWrong function!");      
          
// for(var i = 1; i <= 5; i++) {
  var radios = document.getElementById('answer');
  for(var i = 0; i < radios.length; i++) {
    var radio = radios[i];
    if(radio.value == "wrong" && radio.checked) {
      amountWrong++;
      console.log(amountWrong);
      
  }   
          
}
console.log(amountCorrect);
}
     





})

    












  
  
                  
 
  












