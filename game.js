$( document ).ready(function() {
    console.log( "ready!" );



//define the starting number of correct answers, incorrect answers, 
// unanswers questions, and seconds in our text timer




$("#startButton").on("click", function() {
	countDown(30);
})

$("#tallyScore").on("click", function() {
  clearTimeout(countDownId);
})

  var countDownId;



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
console.log("I'm in the handClick function!");      
var amountCorrect = 0;          
for(var i = 1; i <= 5; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
        $("#correctResults").html(amountCorrect);
          
}
     
    
    }



}

}

})


  
  
                  
 
  












