let quesNum = 0;
let correctNum = 0;

function updateQuesNum () {
    quesNum++;
}

/*
function startQuiz () {
    $(".js-startButton").on("click" , function (event) {
        let questionText = STORE[quesNum].question;
        let possAnswers = STORE[quesNum].choices;
        let defAns = STORE[quesNum].answer;
        let fact = STORE[quesNum].funFact;
        console.log(possAnswers);
        $(".start").hide();
        $(".quesNum").text(quesNum + 1);
        $(".question").append(`
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
        if (quesNum === STORE.length - 1) {
            final();
        } else
            advanceQuestion();
        })
    }
*/

function startQuiz () {
    $(".js-startButton").on("click" , function (event) {
        renderQuestion();
    })
}

function renderQuestion () {
    $(".start").hide();
    $(".quesNum").text(quesNum + 1);
    $(".correctNum").text(correctNum);
    const questionHtml = $(`
    <div class="questionText">
        <h2>${STORE[quesNum].question}</h2>
    </div>
    `);
    const choicesHtml = $(`
        <div>
            <form>
                <label for="0">${STORE[quesNum].choices[0]}</label>
                <input type="radio" name="userAnswer" id="0" value="0">
                
                <label for="1">${STORE[quesNum].choices[1]}</label>
                <input type="radio" name="userAnswer" id="1" value="1">
    
                <label for="2">${STORE[quesNum].choices[2]}</label>
                <input type="radio" name="userAnswer" id="2" value="2">
    
                <label for="3">${STORE[quesNum].choices[3]}</label>
                <input type="radio" name="userAnswer" id="3" value="3">
            </form>
        </div>
    `)
    const buttonsHtml = $(`
        <div class="buttons">
        <button type="submit" class="submit" id="answer">Submit</button>
        <button type="button" class="next" id="next">Next Question</button>
        </div>
    `);
    $(".question").html(questionHtml);
    $(".choices").html(choicesHtml);
    $(".buttons").html(buttonsHtml);
}

function checkAnswer () {
    $(".buttons").on("click" , ".submit" , function(event) {
        event.preventDefault();
        let selected = $('input[name=userAnswer]:checked').val(); 
        if (!selected) {
            alert("Choose an option");
        } else if (selected == STORE[quesNum].answer) {
            $(".answer").html(`
            <h2>CORRECT</h2>
            <h3>${STORE[quesNum].funFact}</h3>`);
            correctNum++;
        } else {
            $(".answer").html(`
            <h2>INCORRECT</h2>
            <h3>${STORE[quesNum].funFact}</h3>`)
        }
    })
}

function advanceQuestion () {
    $(".buttons").on("click" , ".next" , function(event) {
        updateQuesNum();
        console.log(correctNum);
        if (quesNum < STORE.length) {
            $(".answer").html(``);
            renderQuestion();
        } else {
            finalScreen();
            //$(".question").html(`<h2>Final Score = ${correctNum}</h2>`)
            //$(".choices").html(``);
            //$(".buttons").html(``);
            //$(".answer").html(``);
        }
    })
}

function finalScreen () {
    $(".question").html(`<h2>You got ${correctNum} out of ${STORE.length}</h2>`)
    $(".choices").html(`
        <button type="button" class="restart button" id="restart">Try Again?</button>
    `)
    $(".buttons").html(``);
    $(".answer").html(``);
    $(".choices").on("click" , ".restart" , function(event) {
        $(".question").html(``);
        $(".choices").html(``);
        quesNum = 0;
        correctNum = 0;
        $(".quesNum").text(0);
        $(".correctNum").text(0);
        $(".start").show();
    })
}

/* function renderChoices () {
    for (let i = 0; i < STORE[quesNum].choices.length; i++) {
        $(`<h4>Testing</h4>
        <input type="radio" name="userAnswer" id="choices${i+1}" value="${STORE[quesNum].choices[i]}">
        <label for="choices${i+1}">${STORE[quesNum].choices[i]}</label>
        `).appendTo(".js-choices");
    }
    
}*/

/*
function checkAnswer () {
    $(".buttons").on("click" , ".submit" , function(event) {
        event.preventDefault();
        let selected = $('input[name=userAnswer]:checked').val(); 
        if (!selected) {
            alert("Choose an option");
        } else if (selected == STORE[quesNum].answer) {
            $(".question").append(`
            <h2>CORRECT</h2>
            <h3>${STORE[quesNum].funFact}</h3>`);
            correctNum++;
        } else {
            $(".question").append(`
            <h2>INCORRECT</h2>
            <h3>${STORE[quesNum].funFact}</h3>`)
        }
    })
}

function advanceQuestion () {
    $(".buttons").on("click" , ".next" , function(event) {
        updateQuesNum();
        console.log(quesNum);
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
        
})
}

function final () {
    $(".buttons").on("click" , ".submit" , function(event) {
        event.preventDefault();
        $(".js-questionAndScore").hide();
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
*/

function handleQuiz() {
    startQuiz ();
    checkAnswer();
    advanceQuestion();
}

$(handleQuiz);