const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");
const nextButton = document.getElementById("next");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

let score = 0;
let currentQuestion = 0;

// Daftar pertanyaan
const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: "Jakarta"
    },
    {
        question: "Hewan apa yang paling pendiam?",
        options: ["Semute", "Kamera", "Singa", "Gajah"],
        answer: "Semute"
    },
    {
        question: "1 tahun berapa hari?",
        options: ["365", "366", "360", "300"],
        answer: "365"
    },
    {
        question: "Warna apa yang paling susah dilupain?",
        options: ["Merah", "Biru", "Hijau", "Bayanganmu"],
        answer: "Bayanganmu"
    }
];

// Background Partikel
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }

    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";
    messageElement.textContent = "";
    nextButton.style.display = "none";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option, q.answer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    const buttons = optionsElement.getElementsByClassName("option");
    for (let button of buttons) {
        button.disabled = true;
        if (button.textContent === correct) {
            button.classList.add("correct");
        }
        if (button.textContent === selected && selected !== correct) {
            button.classList.add("wrong");
        }
    }

    if (selected === correct) {
        score += 10;
        scoreElement.textContent = `Skor: ${score}`;
        popup.style.display = "flex"; // Tampilkan pop-up
    } else {
        messageElement.textContent = `Salah! Jawaban yang benar: ${correct}`;
        messageElement.style.color = "#f44336";
        nextButton.style.display = "block";
    }
}

function endGame() {
    questionElement.textContent = "Selamat! Quiz Selesai!";
    optionsElement.innerHTML = "";
    messageElement.textContent = `Skor Akhir Anda: ${score}`;
    messageElement.classList.add("win");
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    nextButton.style.display = "block";
});

// Mulai game dan partikel
createParticles();
loadQuestion();