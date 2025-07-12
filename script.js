// Quiz Questions
const quizData = [
{
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
},
{
    question: "Which tag is used for JavaScript?",
    options: ["<script>", "<js>", "<javascript>"],
    answer: "<script>"
}
];

let quizContainer = document.getElementById("quiz");
let resultContainer = document.getElementById("result");
let submitBtn = document.getElementById("submit");

// Display Quiz
quizData.forEach((q, index) => {
const questionElem = document.createElement("div");
questionElem.innerHTML = `<p>${q.question}</p>` + q.options.map(option =>
    `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`
).join('');
quizContainer.appendChild(questionElem);
});

// Submit Logic
submitBtn.onclick = () => {
let score = 0;
quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name=q${index}]:checked`);
    if (selected && selected.value === q.answer) score++;
});
resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
};

// Fetch Joke from API
function getJoke() {
fetch("https://icanhazdadjoke.com/", {
    headers: {
    Accept: "application/json"
    }
})
    .then(res => res.json())
    .then(data => {
    document.getElementById("joke").textContent = data.joke;
    })
    .catch(err => {
    document.getElementById("joke").textContent = "Failed to fetch joke.";
    console.error(err);
    });
}
