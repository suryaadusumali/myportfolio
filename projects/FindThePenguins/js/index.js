$(document).ready( function() {

    //This code will run after your page loads
    var alrt = document.getElementById('alert');
    var span = document.getElementsByClassName('exit')[0];
    var btn = document.getElementById('button');
    function setRandomPenguinOrYeti(){
    	var mound = '#mound'+Math.ceil(Math.random()*9);
    	var penguin = Math.ceil(Math.random()*9) == 9 ? 'yeti': 'penguin penguin'+Math.ceil(Math.random()*9);
    	$(mound).addClass(penguin);
    	setTimeout(function(){
    		$(mound).removeClass(penguin);
    	},1000);
    }

    var gameLoop = setInterval(setRandomPenguinOrYeti,2000);
    
    var score = 0;
    var highScore = 0;
    $('.mound').mousedown(function(){
    	if($(this).hasClass('yeti')){
    		clearInterval(gameLoop);
    		var isHigh = score > highScore?'High':'';
    		highScore = score > highScore?score:highScore;
            var audio = new Audio('yeti.mp3');
            audio.play();
    		score = 0;
    		gameLoop = setInterval(setRandomPenguinOrYeti,2000);
            alert("Game Over");
    	}else if($(this).hasClass('penguin')){
    		score++;
            var audio = new Audio('penguins.mp3');
            audio.play();
    	}else{}
    		$('#score').html('Score : '+score+'<br>HighScore:'+highScore);
    });
         
});