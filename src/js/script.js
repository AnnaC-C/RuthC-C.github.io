var dailyExp = 50;
var d = new Date();
var currentLesson;
function profile(first, last, level, exp ){
    this.firstName = first;
    this.lastName = last;
    this.level = level;
    this.experience = exp;
    this.dailyExp = exp;
    this.account = function() {return this.firstName + " " + this.lastName;};
}

function addExp(exp){
    	this.experience += exp;
    	if(this.experience >= 100){
    		this.level += exp;
    		this.experience = 0;
	    }
		if(new Date() != d){
			dailyExp += 50;
			d = new Date();
		}
    }

function fullName(){return this.firstName + " " + this.lastName;}
function dailyGoal(){
	return this.dailyExp;}
function getExp(){return this.experience;}
function getDailyExp(){return this.dailyExp;}
function getLevel(){return this.level;}

/*document.getElementById("footer").innerHTML =
"<p class=text-muted>&copy;  " + new Date().getFullYear() + " TrigSystems: A system to teach teenagers mathematics. Made Ruth Caulcott-Cooper</p>";*/


document.getElementById("progress").innerHTML = "<div class=progress-bar role=progressbar aria-valuenow=" + this.dailyGoal() + " aria-valuemin=0 aria-valuemax=100 style=width:" + this.dailyGoal() + "%;> " + this.dailyGoal() + "% </div>";


window.onload = function(){
$('#lesson-1').on('click', function(e){
	currentLesson = 'lesson-1';
	return currentLesson;
});
$('#lesson-2').on('click', function(e){
	currentLesson = 'lesson-2';
	return currentLesson;
});
$('#lesson-3').on('click', function(e){
	currentLesson = 'lesson-3';
	return currentLesson;
});

};

function thisLesson(){return currentLesson;}