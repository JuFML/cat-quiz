
const form = document.querySelector('.quiz-form');
const button = document.querySelector('.btn');
const scoreParagraph = document.createElement('p');
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'A', 'A', 'B'];
let userAnswersScore = 0;

form.addEventListener('submit', event => {
    event.preventDefault();

    userAnswersScore = 0; 

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
    
    scrollTo(0, 0)
    
    finalResult.classList.remove('d-none');

    let counter = 0;
    const timer = setInterval(() => {
        
        if(counter === userAnswersScore) {
            clearInterval(timer);
        };
        
        finalResult.querySelector('span').textContent = `${counter}%`;
        
        counter++;
        
    }, 10);      
});

