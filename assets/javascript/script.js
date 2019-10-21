$(document).ready(function () {
    var answer = "";
    var timeLeft = 75;
    var index = 0;
    var content = $("#content");
    InitializeStartPage();

    function InitializeStartPage() {
        content.empty();
        content.append($("<h5 id='Headline-start'>Coding Quiz Challenge</h5>"));
        content.append($("<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>"));
        content.append($("<div id='start-container'><button class='button' id='start'>Start Quiz</button></div>"));
    
        $("#start").click(function () {
            InitializeQuestions();
        });
    }
    function InitializeQuestions() {

        content.empty();
        content.append($("<h5 id='Headline'></h5>"));
        questionDiv = $("<div id='questions'></div>");
        content.append(questionDiv);
        questionDiv.append($("<button class='button QBtn' id='A1'></button><br>"));
        questionDiv.append($("<button class='button QBtn' id='A2'></button><br>"));
        questionDiv.append($("<button class='button QBtn' id='A3'></button><br>"));
        questionDiv.append($("<button class='button QBtn' id='A4'></button><br>"));

        content.append($("<p id='response'></p>"));
        loadQuestion();


        timer = setInterval(function () {
            timeLeft--;
            $('.timer').text("Time: " + timeLeft);
            if (timeLeft <= 0) {
                $('.timer').text("Time: " + 0);
                clearInterval(timer);
            }
        }, 1000);

        $(".QBtn").on('click', function () {
            var buttonAnswer = $(this).text();
            if (buttonAnswer == answer) {
                $("#response").text("Correct!");
            }
            else {
                $("#response").text("Incorrect! correct choice was " + answer);
                timeLeft -= 10
            }
    
            index++;
    
            if (index == questions.length) {
                InitializeFinishScreen();
                return;
            }
    
            loadQuestion();
        });

        function loadQuestion() {
            var QuestionNumber = index + 1;
            $("#Headline").text(QuestionNumber + ": " + questions[index].title)
            $("#A1").text(questions[index].choices[0]);
            $("#A2").text(questions[index].choices[1]);
            $("#A3").text(questions[index].choices[2]);
            $("#A4").text(questions[index].choices[3]);
            answer = questions[index].answer;
        }

    }
    function InitializeFinishScreen(){
        clearInterval(timer);
        
        if (timeLeft < 0){
            timeLeft = 0;
        }
        $('.timer').text("Time: " + timeLeft);

        content.empty();
        content.append($("<h5 id='Headline'>All done!</h5>"));
        content.append($("<p class='my-2'>your final score is " + timeLeft + ".</p>"));
        content.append($("<p>Enter initials:" +
        "<input id='inputBox' class='mx-2 my-0 p-0'></input>" +
        "<button class='button' id='submit'>Submit</button>" + 
        "</p>"));
    
        $("#submit").click(function () {
            alert("submitted");
        });
    }

    

});