const questions = [
    { image: 'climb.jpg', verb: 'Climb', participle: 'climbed' },
    { image: 'buy.jpg', verb: 'Buy', participle: 'bought' },
    { image: 'eat.jpg', verb: 'Eat', participle: 'eaten' },
    { image: 'feel.jpg', verb: 'Feel', participle: 'felt' },
    { image: 'is.jpg', verb: 'Is/Are', participle: 'been' },
    { image: 'write.jpg', verb: 'Write', participle: 'written' },
    { image: 'watch.jpg', verb: 'Watch', participle: 'watched' },
    { image: 'sleep.jpg', verb: 'Sleep', participle: 'slept' },
    { image: 'ski.jpg', verb: 'Ski', participle: 'skied' },
    { image: 'win.jpg', verb: 'Win', participle: 'win' },

];

let currentQuestion = 0;
let attempts = 0; // Contador de intentos
let score = 0; // Contador de puntuación
let timeElapsed = 0; // Tiempo transcurrido en segundos
let timer; // Variable para el temporizador

// Función para cargar la pregunta
function loadQuestion() {
    if (currentQuestion < questions.length) {
        const quizDiv = document.getElementById('quiz');
        quizDiv.innerHTML = `
            <div class="question">
                <img src="${questions[currentQuestion].image}" alt="${questions[currentQuestion].verb}">
                <p>¿Cuál es el pasado participio de "${questions[currentQuestion].verb}"?</p>
            </div>`;
        
        // Reiniciar el campo de respuesta
        document.getElementById('answer').value = '';
        document.getElementById('result').innerText = '';
    } else {
        endQuiz();
    }
}

// Función para verificar la respuesta
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestion].participle;

    attempts++;
    document.getElementById('counter').innerText = `Intentos: ${attempts}`;

    // Verificar si la respuesta es correcta
    if (userAnswer.toLowerCase() === correctAnswer) {
        document.getElementById('result').innerText = "¡Correcto!";
        score++; // Incrementar la puntuación
        document.getElementById('score').innerText = `Puntuación: ${score}`; // Actualizar puntuación
    } else {
        document.getElementById('result').innerText = `Incorrecto. La respuesta correcta es "${correctAnswer}".`;
    }

    currentQuestion++; // Avanzar a la siguiente pregunta

    // Cargar la siguiente pregunta después de un breve retraso para mostrar la respuesta correcta
    setTimeout(loadQuestion, 1000); // Esperar 2 segundos antes de cargar la siguiente pregunta
}

// Función para iniciar el cronómetro
function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById('timer').innerText = `Tiempo transcurrido: ${timeElapsed} segundos`;
    }, 1000);
}

// Función para finalizar el quiz
function endQuiz() {
    clearInterval(timer); // Detener el cronómetro al finalizar el cuestionario
    document.getElementById('quiz').innerHTML = `<h2>¡Has completado el test!</h2><p>Puntuación final: ${score} / ${attempts}</p><p>Tiempo total: ${timeElapsed} segundos</p>`;
    
    document.getElementById('answer').style.display = 'none';
    document.querySelector('button').style.display = 'none';
}

// Cargar la primera pregunta al inicio y comenzar el cronómetro
loadQuestion();
startTimer(); // Iniciar el cronómetro al inicio del cuestionario