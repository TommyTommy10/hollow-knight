// script.js
const rooms = [
    {
        title: "Benvenuto in Dirtmouth",
        description: "Risolvi l'enigma per trovare l'indizio nascosto.",
        puzzles: [
            { question: "Qual è il nome dell'unico cittadino rimasto a Dirtmouth?", answer: "elderbug" },
            { question: "Che cosa trovi nell'Antica Miniera di Dirtmouth?", answer: "cristalli" },
            { question: "Quale oggetto ti permette di saltare più in alto?", answer: "mothwing cloak" },
            { question: "Chi è il fabbro delle armi a Dirtmouth?", answer: "nailsmith" },
            { question: "Qual è il nome dell'albero sacro situato in questa città?", answer: "dream tree" }
        ]
    },
    {
        title: "Greenpath",
        description: "Risolvi l'enigma per proseguire nel Greenpath.",
        puzzles: [
            { question: "Qual è il boss principale di Greenpath?", answer: "hornet" },
            { question: "Che cosa rilasciano le piante quando vengono colpite?", answer: "acido" },
            { question: "Chi è il guardiano del Greenpath?", answer: "massive moss charger" },
            { question: "Qual è il colore predominante del Greenpath?", answer: "verde" },
            { question: "Qual è il nome del nemico che si mimetizza come un cespuglio?", answer: "moss creeper" }
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
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    const room = rooms[currentRoom];
    const puzzle = room.puzzles[currentPuzzle];
    const answer = document.getElementById('answer').value.toLowerCase();
    const resultElement = document.getElementById('result');
    
    if (answer === puzzle.answer) {
        resultElement.innerHTML = '<span class="success">Bravo! Hai risolto l\'enigma.</span>';
        currentPuzzle++;
        if (currentPuzzle >= room.puzzles.length) {
            currentPuzzle = 0;
            currentRoom++;
            if (currentRoom >= rooms.length) {
                resultElement.innerHTML = '<span class="success">Complimenti! Hai completato l\'Escape Room.</span>';
                document.getElementById('puzzle').innerHTML = '<p>Hai completato tutte le stanze!</p>';
                document.getElementById('next-button').style.display = 'none';
            } else {
                document.getElementById('next-button').style.display = 'block';
            }
        } else {
            setTimeout(loadPuzzle, 1000);  // Aggiunge un piccolo delay per migliorare l'esperienza utente
        }
    } else {
        resultElement.innerHTML = '<span class="failure">Risposta sbagliata. Riprova.</span>';
    }
}

function nextRoom() {
    document.getElementById('next-button').style.display = 'none';
    loadPuzzle();
}
