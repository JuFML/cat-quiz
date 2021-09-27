
const form = document.querySelector('.quiz-form');
const button = document.querySelector('.btn');
const scoreParagraph = document.createElement('p');
const finalsScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['B', 'A', 'A', 'B'];
let userAnswersScore = 0;

const getUserAnswers = () => {
    let userAnswers = [];
    
    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index+1}`].value
        userAnswers.push(userAnswer)
    })    
    
    return userAnswers
};

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnswer, index) => {
        const isCorrectAnswer = userAnswer === correctAnswers[index];
        if(isCorrectAnswer) {
            userAnswersScore += 25;            
        };           
    });
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        })
    finalsScoreContainer.classList.remove('d-none');
}

const animateFinalScore = () => {
    let counter = 0;
    const timer = setInterval(() => {
        
        if(counter === userAnswersScore) {
            clearInterval(timer);
        };
        
        finalsScoreContainer.querySelector('span').textContent = `${counter++}%`;           
    }, 10);   
}

form.addEventListener('submit', event => {
    event.preventDefault();

    userAnswersScore = 0; 

    userAnswers = getUserAnswers()
    
    calculateUserScore(userAnswers)    
    showFinalScore()
    animateFinalScore()     
});

