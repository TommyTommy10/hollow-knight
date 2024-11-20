// script.js
const rooms = [
    {
        title: "Benvenuto in Dirtmouth",
        description: "Risolvi l'enigma per trovare l'indizio nascosto.",
        puzzles: [
            { question: "Qual è il nome dell'unico cittadino rimasto a Dirtmouth?", answer: "Elderbug" },
            { question: "Che cosa trovi nell'Antica Miniera di Dirtmouth?", answer: "Cristalli" },
            { question: "Quale oggetto ti permette di saltare più in alto?", answer: "Mothwing Cloak" },
            { question: "Chi è il fabbro delle armi a Dirtmouth?", answer: "Nailsmith" },
            { question: "Qual è il nome dell'albero sacro situato in questa città?", answer: "Dream Tree" }
        ]
    },
    // Aggiungi le altre stanze qui
];

let currentRoom = 0;
let currentPuzzle = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadPuzzle();
});

function loadPuzzle() {
    const room = rooms[currentRoom];
    document.getElementById('room-title').innerText = room.title;
    document.getElementById('room-description').innerText = room.description;

    const puzzle = room.puzzles[currentPuzzle];
    const puzzleElement = document.getElementById('puzzle');
    puzzleElement.innerHTML = `
        <p>${puzzle.question}</p>
        <input type="text" id="answer" />
        <button onclick="checkAnswer()">Invia</button>
    `;
}

function checkAnswer() {
    const room = rooms[currentRoom];
    const puzzle = room.puzzles[currentPuzzle];
    const answer = document.getElementById('answer
