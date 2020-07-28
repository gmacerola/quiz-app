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
        <input type="radio" name="userAnswer" id="0" value="0">
        <label for="1">${possAnswers[1]}</label>
        <input type="radio" name="userAnswer" id="1" value="1">
        <label for="2">${possAnswers[2]}</label>
        <input type="radio" name="userAnswer" id="2" value="2">
        <label for="3">${possAnswers[3]}</label>
        <input type="radio" name="userAnswer" id="3" value="3">
        </form>
        </div>
        `);
        $(".buttons").append(`
            <div>
            <button type="submit" class="submit" id="answer">Submit</button>
            <button type="button" class="next" id="next">Next Question</button>
            </div>`
        );
        checkAnswer();
        console.log(STORE.length);
        console.log(quesNum);
        advanceQuestion();
    })


function checkAnswer () {
    $(".buttons").on("click" , ".submit" , function(event) {
        event.preventDefault();
        let selected = $('input[name=userAnswer]:checked').val(); 
        if (!selected) {
            alert("Choose an option");
        } else if (selected == STORE[quesNum].answer) {
            $(".questText").append(`
            <h2>CORRECT</h2>
            <h3>${STORE[quesNum].funFact}</h3>`);
            correctNum++;
        } else {
            $(".questText").append(`
            <h2>INCORRECT</h2>
            <h3>${STORE[quesNum].funFact}</h3>`)
        }
    })
}

function advanceQuestion () {
    $(".buttons").on("click" , ".next" , function(event) {
        updateQuesNum();
        console.log(quesNum);
        if (quesNum === STORE.length) {
            final();
        } else {
        $(".quesNum").text(quesNum);
        $(".correctNum").text(correctNum);
        let questionText = STORE[quesNum].question;
        let possAnswers = STORE[quesNum].choices;
        const questionHtml = $(`
        <h2>${questionText}</h2>
        <div>
        <form>
        <label for="0">${possAnswers[0]}</label>
        <input type="radio" name="userAnswer" id="0" value="0">
        <label for="1">${possAnswers[1]}</label>
        <input type="radio" name="userAnswer" id="1" value="1">
        <label for="2">${possAnswers[2]}</label>
        <input type="radio" name="userAnswer" id="2" value="2">
        <label for="3">${possAnswers[3]}</label>
        <input type="radio" name="userAnswer" id="3" value="3">
        </form>
        </div>
        `)
        const buttonHtml = $(`
            <div>
            <button type="submit" class="submit" id="answer">Submit</button>
            <button type="button" class="next" id="next">Next Question</button>
            </div>
        `)
        $(".questText").html(questionHtml);
        console.log(buttonHtml);
        $(".buttons").html(buttonHtml);
        
    }

})

function final () {
    $(".buttons").on("click" , ".submit" , function(event) {
        event.preventDefault();
        $(".questionAndScore").hide();
        const finalHtml = $(`
            <h2>Final Score</h2>
            <div>
            <p>Your final score was ${correctNum}!</p>
            </div>
        `)
        $(".questText").html(finalHtml);

})
}
//if array[4] happens new replace html with final score & reset button

startQuiz();