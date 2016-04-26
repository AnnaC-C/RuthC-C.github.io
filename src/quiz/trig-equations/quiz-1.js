(function() {
	var questions = [{
		question: "Solve cosθ = 0.3 for 0° ≤ θ ≤ 360°",
		image: "none",
		choices: ["words", " 72.5° and 107.5° ", " 72.5° and 252.5°  ", " 17.5° and 342.5° ", " 72.5° and 287.5°  "],
		correctAnswer: 4,
		type: 0,
		tips: ""
	},{
    question: "Solve tanθ = 0.5 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 60° and 240° ", "  26.6° and 206.6° ", " 30° and 210°  ", " 26.6° "],
    correctAnswer: 2,
    type: 0,
    tips: ""
  },{
    question: "Solve 2sinθ = θ+1 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 210° and 330° ", " 150° and 210° ", "  -30° and 330° ", " 30° and 150° "],
    correctAnswer: 1,
    type: 0,
    tips: ""
  },{
    question: "Solve 3tanθ - 2 = 0 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 63.4° and 243.4° ", " 146.3° and 326.3° ", " 33.7° and 326.3° ", " 33.7° and 213.7° "],
    correctAnswer: 4,
    type: 0,
    tips: ""
  },{
    question: "Solve 2cosθ - sinθ = 0 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 26.6° and 206.6° ", " 116.6° and 296.6° ", " 63.4° and 243.4° ", " 153.4° and 333.4° "],
    correctAnswer: 3,
    type: 0,
    tips: ""
  },{
    question: "Solve (2cosθ + 1)(1cosθ - 2) = 0 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 60° and 300° ", " 120° and 240° ", " 0°, 120°, 240° and 360° ", " 0°, 60°, 300° and 360° "],
    correctAnswer: 2,
    type: 0,
    tips: ""
  },{
    question: "Solve 2sin²θ - sinθ - 1 = 0 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 90°, 210° and 330° ", " -150°, -30° and 90° ", " 30°, 90°, and 150° ", "  -90° and 90° "],
    correctAnswer: 3,
    type: 0,
    tips: ""
  },{
    question: "Solve 2sinθ - cosθ = 0 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 0°, 120°, 240° and 360° ", " 60° and 300° ", " 0° and 360° ", " 0°, 60°, 180°, 300° and 360° "],
    correctAnswer: 4,
    type: 0,
    tips: ""
  },{
    question: "Solve tan²θ - 1 = 0 for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " -135°, -45°, 45° and 135° ", "  -135° and 45° ", " 30° and 150° ", " -30°, -150°, 30° and 150° "],
    correctAnswer: 1,
    type: 0,
    tips: ""
  },{
    question: "Solve cos²θ + cosθ = sin²θ for 0° ≤ θ ≤ 360°",
    image: "none",
    choices: ["words", " 30°, 180° and 330° ", " 60° and 300° ", " 30° and 330° ", " 60°, 180° and 300° "],
    correctAnswer: 4,
    type: 0,
    tips: ""
  }];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var incorrect = []; // Array containing the incorrect user choices
  var quiz = $('#quiz'); //Quiz div object
  var correct = true;
  var progress = 0;
  var checked = false;
  var user = profile('Ruth', 'Caulcott-Cooper', 4, 0);

  // Display initial question
  displayNext();
  document.getElementById("lesson-progress").valuemax = (questions.length - (incorrect.length-1));

  // Click handler for the 'check' button
  $('#check').on('click', function(e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if (quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please choose an answer!');
    } else {

      if (selections[questionCounter] === questions[questionCounter].correctAnswer) {
      	/*Put a tick on the left side in HTML*/
      	progress++;
      	document.getElementById("tick-cross").src = "images/tick.png";
      	document.getElementById("outcome").innerHTML = "You are correct";
      	document.getElementById("tick-cross-text").innerHTML = "";
      	document.getElementById("lesson-progress").valuenow = progress;
        document.getElementById("lesson-progress").valuemax = (questions.length - (incorrect.length-1));
      	document.getElementById("lesson-progress").style = "width:" + (progress / (questions.length - (incorrect.length-1)) * 100) + "%";
        correct = true;
      }else{
   		 incorrect[questionCounter] = +$('input[name="answer"]:checked').val();
      	//display correct answer
      	document.getElementById("tick-cross").src = "images/cross2.png";
      	document.getElementById("outcome").innerHTML = "Correct solution:";
        document.getElementById("lesson-progress").valuemax = (questions.length - (incorrect.length-1));
      	document.getElementById("tick-cross-text").innerHTML = questions[questionCounter].choices[(questions[questionCounter].correctAnswer)];
      	questions.push(questions[questionCounter]);
      	//questions.splice(questionCounter, 1);
      	correct = false;
      }
      checked = true;
      displayAnswer(correct);
      $('#check').hide();
      $('#next').show();
      $('#checked').show();
    }
  });


  // Click handler for the 'next' button
  $('#next').on('click', function(e) {
    e.preventDefault();	

    // Suspend click listener during fade animation
    if (quiz.is(':animated')) {
      return false;
    }
    choose();
    checked = false;
  	questionCounter++;
    $('#checked').hide();
    $('#next').hide(); 
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function(e) {
    e.preventDefault();
    progress =0;
  	document.getElementById("lesson-progress").style = "width:" + ((progress / (questions.length - incorrect.length)) * 100) + "%";

    if (quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });


  // Click handler for the 'Finish' button
  $('#finish').on('click', function(e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    window.location = "learn.html";
    $('#finish').hide();
  });

  $('#quit-button').on('click', function(e) {
  		if(confirm('Are you sure you want to quit? All progress in this session will be lost.') === true){
  			document.getElementById('quit-button').href = "learn.html";
  		} else {
  			document.getElementById('quit-button').href = "#";
  		}

  });

  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var question = $('<h4>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
	var options = $('<div>', {
		id: 'options'
	});
	//change tips and notes to include information on this question:
	var myElement = document.getElementById("hints");
	var dataVal = myElement.getAttribute("data-content");
	var newData = questions[index].tips;
	myElement.setAttribute("data-content", newData);
	var picture = $('<img id = qImage src =' + questions[index].image + '>');
	
	options.append(picture);
	
    var radioList = $('<ul>');
    var item;
    var theLabel;
    var input = '';
    var imageInput = '';
    for (var i = 1; i < questions[index].choices.length; i++) {
      item = $('<li>');
      theLabel = $('<label>');
	  input = '<input type="radio" id="radioB" name="answer" value=' + i + ' />';
	  input += questions[index].choices[i];
	  theLabel.append(input);
      item.append(theLabel);
      radioList.append(item);
    }
    if(questions[index].image === 'none'){
		$(picture).hide();
	}
	options.append(radioList);
	
    //return radioList;
	return options;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {

    	if(checked === false){
	      $('#question').remove();

	      if (questionCounter < questions.length) {
	        var nextQuestion = createQuestionElement(questionCounter);
	        quiz.append(nextQuestion).fadeIn();
	        if (!(isNaN(selections[questionCounter]))) {
	          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
	        }

	        $('#check').show();
		    $('#finish').hide();
		    $('#start').hide();
	      } else {
	        var scoreElem = displayScore();
	        quiz.append(scoreElem).fadeIn();
	        $('#next').hide();
	        $('#start').show();
	        $('#finish').show();
	      }	

        } else {

        	$('#next').show();
        }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>', {
      id: 'question'
    });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
	
	var expEarned = 20;
	var exp = addExp(expEarned);
    /*score.append('You got ' + numCorrect + ' questions out of ' +
      questions.length + ' right');*/
	  score.append('Congratulations! You have earned ' + getExp() + ' level experience and ' + getDailyExp() + ' daily Exp.' + '\n Your level: ' + getLevel());
    return score;
  }

  // displays the correct answer
  function displayAnswer(outcome){
  	var answer = $('<p>', {
  		id: 'question'
  	});

  	if(outcome === true){
  		answer.append('You are correct');
  	}else if (outcome === false){
  		answer.append('The correct answer is ' + questions[questionCounter].correctAnswer);

  	}
  	return answer;
  }

/*document.getElementById("lesson-progress").innerHTML = "<div class=progress-bar progress-bar-info progress-bar-striped role=progressbar aria-valuenow=" + lessonProgress() + " aria-valuemin=0 aria-valuemax=" + questions.length + " style=width:" + lessonProgress() + "%;> <span class=sr-only>" + lessonProgress() + "%</span></div>";*/

$(function () {
  $('#hints').popover();
});

})();