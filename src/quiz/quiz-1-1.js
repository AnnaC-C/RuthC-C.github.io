(function() {
	var questions = [{
		question: "What is the equation of this curve?",
		image: "images/question1.png",
		choices: ["words", " y = 3 + sin x ", " y = 1 + sin x ", " y = 2 + sin x ", " y = 2sin x "],
		correctAnswer: 3,
		type: 0,
		tips: "The graph shows that it is sinx, but the difference is that the y values have all increased byu 2. This has moved the whole graph up by 2, in the y direction. So the equation is: y = 2 + sinx"
	}, {
		question: "What is the equation of this curve?",
		image: "images/question2.png",
		choices: ["words", " y = 3 + tan x ", " y  = tan 3x ", " y = 3 tan x ", " y = tan 1/3 x "],
		correctAnswer: 2,
		type: 0,
		tips: "In this case the y values are the same but the tan graph has been 'squashed' in the x direction. To find the scale factor, we need to look at the period of the graph. Usually the tan graph has a period of 180°, but here it is 60°. Therefore the scale factor is 1/3 and the equation is: y = tan3x."
	},{
		question: "What is the equation of this curve?",
		image: "images/question3.png",
		choices: ["words", " y = 2 + cos x ", " y = cos 2x ", " y = 2cos x ", " y = cos 1/2 x "],
		correctAnswer: 3,
		type: 0,
		tips:"The shape of the graph is similar to that of cosx, but the y values have increased by a factor of 2. Therefore the equation is: y = 2cosx."
	},{
		question: "Which two equations describe the graph?",
		image: "images/question4.png",
		choices: ["words", " y = sin( x + 90^-degrees ) & y = + cos( x + 180 ) ", " y = sin( x - 90 ) & y = + cos( x + 180 ) "," y = sin( x - 90 ) & y = cos( x + 90 ) "],
		correctAnswer: 2,
		type: 0,
		tiops: ""
	},{
		question: "Which curve has the equation y = sinx - 1?",
		image: "none",
		choices: ["images", " <img src = images/question5a.png> ", " <img src =images/question5b.png> "," <img src =images/question5c.png> ", " <img src =images/question5d.png> "],
		correctAnswer: 1,
		type: 1,
		tips:"The curve y = sinx - 1 has the same x values as sinx, bit it has been moved down 1 unit in the y direction."
	},{
		question: "Which curve has the equation y = sin 1/2 x?",
		image: "none",
		choices: ["images", " <img src =images/question5a.png> ", " <img src =images/question5b.png> "," <img src =images/question5c.png>", "<img src =images/question5d.png>"],
		correctAnswer: 2,
		type: 1,
		tips:"The curve y = sin1/2x has the same range of y values as y = sinx, but it has been stretched by a scale factor of 2."
	},{
		question: "Which curve has the equation y = sin( x + 90 )?",
		image: "none",
		choices: ["images", "<img src =images/question5a.png>", "<img src =images/question5b.png>","<img src =images/question5c.png>", "<img src =images/question5d.png>"],
		correctAnswer: 3,
		type: 1,
		tips:"The curve of y = sin(x + 90°) is the same as the sinx curve but it has been moved 90° in the negative direction of the x axis."
	},{
		question: "Which curve has the equation y = 1/2 sinx?",
		image: "none",
		choices: ["images", "<img src =images/question5a.png>", "<img src =images/question5b.png>","<img src =images/question5c.png>", "<img src =images/question5d.png>"],
		correctAnswer: 3,
		type: 1,
		tips:"The curve of y = 1/2sinx is similar to the curve of y = sinx, but it has been stretched by a factor of 1/2 in a direction parrallel to the y axis."
	}];
	var lesson2 = [{
		question: "The angle θ is:",
		image: "images/2question1.png",
		choices: ["words", "19.5° ", "48.6° ", " 48.6° or 131.4°  ", "19.5° or160.5° "],
		correctAnswer: 1,
		type: 0,
		tips: "The diagram provides us with values for two sides and an angle. So in order to find the second angle we must use the sine rule: SinA/a = SinB/b = SinC/c. A = 30°, B = θ°, a = 12, b = 8. Sin30°/12 = Sinθ°/8. Sinθ° = (0.5/12) x 8 = 8/24. θ = 19.5°. The angles in a triangle must add up to 180°, so this is the only valid value for θ"
	},{
		question: "What is the length of side AB?",
		image: "images/2question1.png",
		choices: ["words", "18.2cm", " 27.4cm ", " 9.12cm ", " 2.03cm "],
		correctAnswer: 1,
		type: 0,
		tips: "This time we require the third side and so we must use the cosine rule, as we only know one angle for certain. a² = b² + c² - 2bcCosA. A = 30°, a = 12, b = 8"
	},{
		question: "What is the length of side XY?",
		image: "images/2question2.png",
		choices: ["words", " 40.5cm ", " 27.3cm ", " 14.7cm ", " 6.37cm "],
		correctAnswer: 3,
		type: 0,
		tips: "The graph shows that it is sinx, but the difference is that the y values have all increased byu 2. This has moved the whole graph up by 2, in the y direction. So the equation is: y = 2 + sinx"
	},{
		question: "What is the angle at θ?",
		image: "images/2question2.png",
		choices: ["words", " 31.2° ", " 84.6° ", " 59.6° ", " 78.4° "],
		correctAnswer: 3,
		type: 0,
		tips: "The graph shows that it is sinx, but the difference is that the y values have all increased byu 2. This has moved the whole graph up by 2, in the y direction. So the equation is: y = 2 + sinx"
	},{
		question: "What is the equation of this curve?",
		image: "images/question1.png",
		choices: ["words", " y = 3 + sin x ", " y = 1 + sin x ", " y = 2 + sin x ", " y = 2sin x "],
		correctAnswer: 3,
		type: 0,
		tips: "The graph shows that it is sinx, but the difference is that the y values have all increased byu 2. This has moved the whole graph up by 2, in the y direction. So the equation is: y = 2 + sinx"
	}];

//parse the json text in. ( can most likely shove everything at the top of this file though :P
 /* var request = new XMLHttpRequest();
  request.open('GET', 'questions.json', false);
  request.send(null);
  var questions = JSON.parse(request.responseText);*/

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
  document.getElementById("lesson-progress").valuemax = (questions.length - incorrect.length);

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
      	document.getElementById("lesson-progress").style = "width:" + (progress / (questions.length - incorrect.length) * 100) + "%";
        correct = true;
      }else{
   		 incorrect[questionCounter] = +$('input[name="answer"]:checked').val();
      	//display correct answer
      	document.getElementById("tick-cross").src = "images/cross2.png";
      	document.getElementById("outcome").innerHTML = "Correct solution:";
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
	  score.append('Congratulations ' + fullName() + '. You have earned ' + getExp() + ' level experience and ' + getDailyExp() + ' daily Exp.' + '\n Your level: ' + getLevel());
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