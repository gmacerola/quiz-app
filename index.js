let quesNum = 0;
let correctNum = 0;

function updateQuesNum () {
    quesNum++;
}

function updateCorrectNum () {

}

function startQuiz () {
    $(".js-startButton").on("click" , function (event) {
        let questionText = STORE[quesNum].question;
        let possAnswers = STORE[quesNum].choices;
        let defAns = STORE[quesNum].answer;
        let fact = STORE[quesNum].funFact;
        console.log(possAnswers);
        $(".start").hide();
        $(".quesNum").text(quesNum + 1);
        $(".questText").append(`
        <h2>${questionText}</h2>
        <div>
        <form>
        <label for="0">${possAnswers[0]}</label>
        <input type="radio" name="userAnswer" id="0">
        <label for="1">${possAnswers[1]}</label>
        <input type="radio" name="userAnswer" id="1">
        <label for="2">${possAnswers[2]}</label>
        <input type="radio" name="userAnswer" id="2">
        <label for="3">${possAnswers[3]}</label>
        <input type="radio" name="userAnswer" id="3">
        </form>
        </div>
        `);
        $(".buttons").append(`
            <div>
            <button type="submit" class="button" id="answer">Submit</button>
            <button type="button" class="button" id="next">Next Question</button>
            </div>`
        );
        checkAnswer();
    })
}

function checkAnswer () {
    $(".buttons").on("click" , ".button" , function(event) {
        event.preventDefault();
        let selected = $('input:checked');
        console.log(STORE[quesNum].answer);
        console.log(selected);
        if (selected === STORE[quesNum].answer) {
            console.log("Correct");
        } else {
            console.log("Failed");
        }
    })
}

function advanceQuestion () {

}

//if array[4] happens new replace html with final score & reset button

startQuiz();
checkAnswer();