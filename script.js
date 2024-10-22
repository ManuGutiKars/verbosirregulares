// Lista de todos los verbos irregulares
const allVerbs = [
    { infinitive: "be", past: "was/were", participle: "been" },
    { infinitive: "become", past: "became", participle: "become" },
    { infinitive: "begin", past: "began", participle: "begun" },
    { infinitive: "bet", past: "bet", participle: "bet" },
    { infinitive: "bite", past: "bit", participle: "bitten" },
    { infinitive: "blow", past: "blew", participle: "blown" },
    { infinitive: "break", past: "broke", participle: "broken" },
    { infinitive: "bring", past: "brought", participle: "brought" },
    { infinitive: "build", past: "built", participle: "built" },
    { infinitive: "buy", past: "bought", participle: "bought" },
    { infinitive: "catch", past: "caught", participle: "caught" },
    { infinitive: "choose", past: "chose", participle: "chosen" },
    { infinitive: "come", past: "came", participle: "come" },
    { infinitive: "cost", past: "cost", participle: "cost" },
    { infinitive: "cut", past: "cut", participle: "cut" },
    { infinitive: "do", past: "did", participle: "done" },
    { infinitive: "draw", past: "drew", participle: "drawn" },
    { infinitive: "drink", past: "drank", participle: "drunk" },
    { infinitive: "drive", past: "drove", participle: "driven" },
    { infinitive: "eat", past: "ate", participle: "eaten" },
    { infinitive: "fall", past: "fell", participle: "fallen" },
    { infinitive: "feel", past: "felt", participle: "felt" },
    { infinitive: "fight", past: "fought", participle: "fought" },
    { infinitive: "find", past: "found", participle: "found" },
    { infinitive: "fly", past: "flew", participle: "flown" },
    { infinitive: "forget", past: "forgot", participle: "forgotten" },
    { infinitive: "freeze", past: "froze", participle: "frozen" },
    { infinitive: "get", past: "got", participle: "gotten/got" },
    { infinitive: "give", past: "gave", participle: "given" },
    { infinitive: "go", past: "went", participle: "gone" },
    { infinitive: "grow", past: "grew", participle: "grown" },
    { infinitive: "have", past: "had", participle: "had" },
    { infinitive: "hear", past: "heard", participle: "heard" },
    { infinitive: "hide", past: "hid", participle: "hidden" },
    { infinitive: "hit", past: "hit", participle: "hit" },
    { infinitive: "hold", past: "held", participle: "held" },
    { infinitive: "hurt", past: "hurt", participle: "hurt" },
    { infinitive: "keep", past: "kept", participle: "kept" },
    { infinitive: "know", past: "knew", participle: "known" },
    { infinitive: "lay", past: "laid", participle: "laid" },
    { infinitive: "leave", past: "left", participle: "left" },
    { infinitive: "lend", past: "lent", participle: "lent" },
    { infinitive: "let", past: "let", participle: "let" },
    { infinitive: "lie", past: "lay", participle: "lain" },
    { infinitive: "light", past: "lit", participle: "lit" },
    { infinitive: "lose", past: "lost", participle: "lost" },
    { infinitive: "make", past: "made", participle: "made" },
    { infinitive: "meet", past: "met", participle: "met" },
    { infinitive: "pay", past: "paid", participle: "paid" },
    { infinitive: "put", past: "put", participle: "put" },
    { infinitive: "read", past: "read", participle: "read" },
    { infinitive: "ride", past: "rode", participle: "ridden" },
    { infinitive: "ring", past: "rang", participle: "rung" },
    { infinitive: "rise", past: "rose", participle: "risen" },
    { infinitive: "run", past: "ran", participle: "run" },
    { infinitive: "say", past: "said", participle: "said" },
    { infinitive: "see", past: "saw", participle: "seen" },
    { infinitive: "sell", past: "sold", participle: "sold" },
    { infinitive: "send", past: "sent", participle: "sent" },
    { infinitive: "set", past: "set", participle: "set" },
    { infinitive: "shoot", past: "shot", participle: "shot" },
    { infinitive: "show", past: "showed", participle: "shown" },
    { infinitive: "sing", past: "sang", participle: "sung" },
    { infinitive: "sit", past: "sat", participle: "sat" },
    { infinitive: "sleep", past: "slept", participle: "slept" },
    { infinitive: "speak", past: "spoke", participle: "spoken" },
    { infinitive: "spend", past: "spent", participle: "spent" },
    { infinitive: "stand", past: "stood", participle: "stood" },
    { infinitive: "swim", past: "swam", participle: "swum" },
    { infinitive: "take", past: "took", participle: "taken" },
    { infinitive: "teach", past: "taught", participle: "taught" },
    { infinitive: "tell", past: "told", participle: "told" },
    { infinitive: "think", past: "thought", participle: "thought" },
    { infinitive: "understand", past: "understood", participle: "understood" },
    { infinitive: "wake", past: "woke", participle: "woken" },
    { infinitive: "wear", past: "wore", participle: "worn" },
    { infinitive: "win", past: "won", participle: "won" },
    { infinitive: "write", past: "wrote", participle: "written" }

];

// Lista de verbos de alta prioridad
const priorityVerbs = [
    { infinitive: "drink", past: "drank", participle: "drunk" },
    { infinitive: "ring", past: "rang", participle: "rung" },
    { infinitive: "come", past: "came", participle: "come" },
    { infinitive: "build", past: "built", participle: "built" },
    { infinitive: "buy", past: "bought", participle: "bought" },
    { infinitive: "catch", past: "caught", participle: "caught" },
    { infinitive: "feel", past: "felt", participle: "felt" },
    { infinitive: "get", past: "got", participle: "gotten/got" },
    { infinitive: "have", past: "had", participle: "had" },
    { infinitive: "leave", past: "left", participle: "left" },
    { infinitive: "lose", past: "lost", participle: "lost" },
    { infinitive: "make", past: "made", participle: "made" },
    { infinitive: "say", past: "said", participle: "said" },
    { infinitive: "teach", past: "taught", participle: "taught" },
    { infinitive: "tell", past: "told", participle: "told" },
    { infinitive: "understand", past: "understood", participle: "understood" },
    { infinitive: "win", past: "won", participle: "won" },
    { infinitive: "be", past: "was/were", participle: "been" },
    { infinitive: "break", past: "broke", participle: "broken" },
    { infinitive: "forget", past: "forgot", participle: "forgotten" },
    { infinitive: "speak", past: "spoke", participle: "spoken" },
    { infinitive: "drive", past: "drove", participle: "driven" },
    { infinitive: "eat", past: "ate", participle: "eaten" },
    { infinitive: "give", past: "gave", participle: "given" },
    { infinitive: "go", past: "went", participle: "gone" },
    { infinitive: "grow", past: "grew", participle: "grown" },
    { infinitive: "know", past: "knew", participle: "known" },
    { infinitive: "see", past: "saw", participle: "seen" },
    { infinitive: "take", past: "took", participle: "taken" },
    { infinitive: "write", past: "wrote", participle: "written" },
    { infinitive: "read", past: "read", participle: "read" }
];

let currentVerb = {};
let score = 0;
let errors = 0;
let remainingVerbs = []; // Lista de verbos que quedan por responder

const versionElem = document.getElementById("version");
const infinitiveElem = document.getElementById("infinitive");
const pastElem = document.getElementById("past");
const participleElem = document.getElementById("participle");
const feedbackElem = document.getElementById("feedback");
const scoreElem = document.getElementById("score");
const errorsElem = document.getElementById("errors");
const checkAnswerBtn = document.getElementById("checkAnswer");
const nextVerbBtn = document.getElementById("nextVerb");
const restartBtn = document.getElementById("restart");

let currentVerbsList = allVerbs; // Lista de verbos en uso (todos o de alta prioridad)

// Función para obtener un verbo aleatorio
function getRandomVerb() {
    const randomIndex = Math.floor(Math.random() * remainingVerbs.length);
    return remainingVerbs.splice(randomIndex, 1)[0]; // Extraer y eliminar el verbo de la lista
}

// Función para mostrar un nuevo verbo
function displayVerb() {
    if (remainingVerbs.length === 0) {
        // Si ya no hay verbos disponibles, mostrar el botón de reiniciar
        feedbackElem.textContent = "¡Has completado todos los verbos!";
        checkAnswerBtn.disabled = true;
        nextVerbBtn.disabled = true;
        restartBtn.style.display = "block";
        return;
    }

    currentVerb = getRandomVerb();
    infinitiveElem.textContent = currentVerb.infinitive;
    pastElem.value = "";
    participleElem.value = "";
    feedbackElem.textContent = "";
    checkAnswerBtn.disabled = false;
    nextVerbBtn.disabled = true;
}

// Función para comprobar la respuesta
function checkAnswer() {
    const userPast = pastElem.value.toLowerCase().trim();
    const userParticiple = participleElem.value.toLowerCase().trim();
    
    if (userPast === currentVerb.past.toLowerCase() && userParticiple === currentVerb.participle.toLowerCase()) {
        feedbackElem.textContent = "¡Correcto!";
        score++;
    } else {
        feedbackElem.textContent = `Incorrecto. La respuesta correcta es: Pasado - "${currentVerb.past}", Participio - "${currentVerb.participle}".`;
        errors++;
    }

    scoreElem.textContent = `Aciertos: ${score}`;
    errorsElem.textContent = `Fallos: ${errors}`;
    checkAnswerBtn.disabled = true;
    nextVerbBtn.disabled = false;
}

// Función para iniciar el juego con la lista seleccionada
function startGame() {
    score = 0;
    errors = 0;
    scoreElem.textContent = `Aciertos: ${score}`;
    errorsElem.textContent = `Fallos: ${errors}`;
    
    remainingVerbs = [...currentVerbsList]; // Copiar la lista de verbos seleccionada
    restartBtn.style.display = "none"; // Ocultar el botón de reiniciar
    displayVerb();
}

// Evento para cambiar entre la versión de alta prioridad y todos los verbos
versionElem.addEventListener("change", function() {
    if (versionElem.value === "priority") {
        currentVerbsList = priorityVerbs;
    } else {
        currentVerbsList = allVerbs;
    }
    startGame(); // Reiniciar el juego cuando se cambie la lista de verbos
});

// Eventos para los botones de comprobar respuesta y mostrar el siguiente verbo
checkAnswerBtn.addEventListener("click", checkAnswer);
nextVerbBtn.addEventListener("click", displayVerb);

// Evento para reiniciar el juego
restartBtn.addEventListener("click", startGame);

// Iniciar el juego la primera vez
startGame();
