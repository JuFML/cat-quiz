const correctAnswers = ['B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
let userAnswersScore = 0;
const button = document.querySelector('.btn');
const scoreParagraph = document.createElement('p');

form.addEventListener('submit', event => {
    event.preventDefault();
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];
    
    userAnswers.forEach((userAnswer, index) => {
        const isCorrectAnswer = userAnswer === correctAnswers[index];
        if(isCorrectAnswer) {
            userAnswersScore += 25;            
        };        
    });

    const printScoreMessage = () => {
        if(userAnswersScore >= 75) {
            scoreParagraph.setAttribute('class', 'text-success');
            scoreParagraph.textContent = `PARABÉNS!! Pontuação: ${userAnswersScore}!`;
            button.insertAdjacentElement('beforebegin', scoreParagraph);
            return;
        };
        if(userAnswersScore >= 50) {
            scoreParagraph.setAttribute('class', 'text-primary');
            scoreParagraph.textContent = `MUITO BOM!! Pontuação: ${userAnswersScore}!`;
            button.insertAdjacentElement('beforebegin', scoreParagraph);
            return;
        };
        scoreParagraph.setAttribute('class', 'text-danger');
        scoreParagraph.textContent = `TREINE MAIS!! Pontuação: ${userAnswersScore}!`;
        button.insertAdjacentElement('beforebegin', scoreParagraph);
    };

    printScoreMessage();

    userAnswersScore = 0;   
});

