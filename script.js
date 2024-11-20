// script.js
document.addEventListener('DOMContentLoaded', () => {
    const puzzle = document.getElementById('puzzle');
    const question = document.createElement('p');
    question.innerText = 'Qual è la chiave per fuggire da Dirtmouth?';
    
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'answer');
    
    const button = document.createElement('button');
    button.innerText = 'Invia';
    button.addEventListener('click', checkAnswer);
    
    puzzle.appendChild(question);
    puzzle.appendChild(input);
    puzzle.appendChild(button);
});

function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'coraggio') {  // Esempio di risposta corretta
        alert('Bravo! Hai trovato la chiave per fuggire da Dirtmouth.');
        // Passa alla stanza successiva
    } else {
        alert('Risposta sbagliata. Riprova.');
    }
}
