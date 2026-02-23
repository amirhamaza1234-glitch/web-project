const questions = [
    // Programming & OOPS
    { category: "Programming", question: "Which of the following is not an OOPS concept?", options: ["Inheritance", "Encapsulation", "Compilation", "Polymorphism"], answer: 2 },
    { category: "Programming", question: "Which keyword is used to inherit a class in Java?", options: ["this", "super", "extends", "implement"], answer: 2 },
    { category: "Programming", question: "What is the default value of an int variable in Java?", options: ["0", "null", "undefined", "garbage value"], answer: 0 },
    { category: "Programming", question: "Which symbol is used for pointer in C?", options: ["&", "*", "#", "@"], answer: 1 },
    { category: "Programming", question: "Python is which type of language?", options: ["Compiled", "Interpreted", "Machine", "Assembly"], answer: 1 },
    { category: "Programming", question: "Which keyword prevents method overriding in Java?", options: ["final", "static", "private", "abstract"], answer: 0 },
    { category: "Programming", question: "What is the size of a boolean in Java (JVM dependent)?", options: ["1 bit", "8 bit", "16 bit", "Depends on JVM"], answer: 3 },
    { category: "Programming", question: "Which operator is used for string concatenation in Python?", options: ["+", "&", ".", "||"], answer: 0 },
    { category: "Programming", question: "What is 'self' in Python class methods?", options: ["The class itself", "Instance of the class", "A global variable", "A static method"], answer: 1 },
    { category: "Programming", question: "Which data type is used for extremely large integers in C++?", options: ["long long", "int", "float", "double"], answer: 0 },

    // Data Structures
    { category: "Data Structures", question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1 },
    { category: "Data Structures", question: "Which of the following is a linear data structure?", options: ["Tree", "Graph", "Array", "Heap"], answer: 2 },
    { category: "Data Structures", question: "Time complexity of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], answer: 2 },
    { category: "Data Structures", question: "Which data structure is used for BFS?", options: ["Stack", "Queue", "Heap", "Tree"], answer: 1 },
    { category: "Data Structures", question: "Worst case time complexity of Quick Sort?", options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"], answer: 1 },
    { category: "Data Structures", question: "Which traversal visits the root node last?", options: ["Preorder", "Inorder", "Postorder", "Level-order"], answer: 2 },
    { category: "Data Structures", question: "Space complexity of an adjacency matrix (V vertices)?", options: ["O(V)", "O(V²)", "O(E)", "O(V+E)"], answer: 1 },
    { category: "Data Structures", question: "Which data structure is used to implement recursion?", options: ["Queue", "Stack", "Array", "Hash Table"], answer: 1 },
    { category: "Data Structures", question: "Best case time complexity of Merge Sort?", options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], answer: 1 },
    { category: "Data Structures", question: "Which DS allows insertion/deletion from both ends?", options: ["Stack", "Queue", "Deque", "Priority Queue"], answer: 2 },

    // OS & DBMS
    { category: "OS & DBMS", question: "Which scheduling algorithm may cause starvation?", options: ["FCFS", "SJF", "Round Robin", "FIFO"], answer: 1 },
    { category: "OS & DBMS", question: "Deadlock occurs when?", options: ["One process waiting", "Mutual exclusion exists", "Circular wait exists", "CPU is idle"], answer: 2 },
    { category: "OS & DBMS", question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Clarity, Integrity, Data", "Atomic, Control, Isolation, Data", "None"], answer: 0 },
    { category: "OS & DBMS", question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: 2 },
    { category: "OS & DBMS", question: "SQL command to remove a table structure?", options: ["DELETE", "REMOVE", "DROP", "CLEAR"], answer: 2 },
    { category: "OS & DBMS", question: "Which SQL command is used to add new rows?", options: ["INSERT INTO", "UPDATE", "ADD", "CREATE"], answer: 0 },
    { category: "OS & DBMS", question: "An operating system process is best defined as...?", options: ["A program in execution", "A static program", "A database entry", "A hardware component"], answer: 0 },
    { category: "OS & DBMS", question: "What is 'Thrashing' related to?", options: ["Disk failure", "Excessive paging", "CPU overheating", "Network lag"], answer: 1 },
    { category: "OS & DBMS", question: "Which normal form handles multi-valued dependency?", options: ["1NF", "2NF", "3NF", "4NF"], answer: 3 },
    { category: "OS & DBMS", question: "Wait-Die and Wound-Wait are techniques for?", options: ["Deadlock prevention", "Memory management", "CPU scheduling", "Paging"], answer: 0 },

    // Networks & Security
    { category: "Networks", question: "OSI model has how many layers?", options: ["5", "6", "7", "8"], answer: 2 },
    { category: "Networks", question: "HTTP works on which default port?", options: ["20", "21", "80", "443"], answer: 2 },
    { category: "Networks", question: "Which protocol is connection-oriented?", options: ["UDP", "TCP", "HTTP", "FTP"], answer: 1 },
    { category: "Networks", question: "IP address version 4 size in bits?", options: ["16 bit", "32 bit", "64 bit", "128 bit"], answer: 1 },
    { category: "Networks", question: "Which is used to prevent SQL injection?", options: ["CSS", "Prepared Statements", "JavaScript", "HTML"], answer: 1 },
    { category: "Networks", question: "Which OSI layer is responsible for routing?", options: ["Physical", "Data Link", "Network", "Transport"], answer: 2 },
    { category: "Networks", question: "What is the range of a Class C IP address?", options: ["0-127", "128-191", "192-223", "224-239"], answer: 2 },
    { category: "Networks", question: "Default port for HTTPS?", options: ["80", "443", "21", "23"], answer: 1 },
    { category: "Networks", question: "Which protocol provides reliable delivery?", options: ["TCP", "UDP", "IP", "ICMP"], answer: 0 },
    { category: "Networks", question: "What does DNS stand for?", options: ["Data Name System", "Domain Name System", "Digital Service", "Domain Network Service"], answer: 1 },

    // Web & Software Eng
    { category: "Web & Software Eng", question: "HTML stands for?", options: ["High Text Machine Language", "Hyper Text Markup Language", "Hyper Tool Mark Language", "None"], answer: 1 },
    { category: "Web & Software Eng", question: "REST stands for?", options: ["Remote Execution Transfer", "Representational State Transfer", "Real State", "None"], answer: 1 },
    { category: "Web & Software Eng", question: "Agile model focuses on?", options: ["Documentation", "Iterative development", "One-time delivery", "Testing only"], answer: 1 },
    { category: "Web & Software Eng", question: "SDLC stands for?", options: ["Software Development Life Cycle", "System Design Level Code", "Software Data Link Control", "None"], answer: 0 },
    { category: "Web & Software Eng", question: "Git is a?", options: ["Programming Language", "Database", "Version Control System", "OS"], answer: 2 },
    { category: "Web & Software Eng", question: "Which tag is used for internal CSS?", options: ["<css>", "<script>", "<style>", "<link>"], answer: 2 },
    { category: "Web & Software Eng", question: "HTTP status code for 'Not Found'?", options: ["200", "404", "500", "403"], answer: 1 },
    { category: "Web & Software Eng", question: "Which model is represented by sequential phases?", options: ["Waterfall", "Agile", "Spiral", "Prototype"], answer: 0 },
    { category: "Web & Software Eng", question: "JavaScript execution is usually?", options: ["Single-threaded", "Multi-threaded", "Low-level", "Type-safe"], answer: 0 },
    { category: "Web & Software Eng", question: "Which CSS property is used to change text color?", options: ["font-color", "color", "text-style", "font-style"], answer: 1 }
];

// Sound Synthesizer using Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'click') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'submit') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'timeout') {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime + 0.2);
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + 0.4);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.6);
    }
}

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const loginBtn = document.getElementById('login-btn');
const userNameInput = document.getElementById('user-name');
const appNumberInput = document.getElementById('app-number');


const topicGrid = document.getElementById('topic-grid');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const homeReviewBtn = document.getElementById('home-review-btn');

const timerDisplay = document.getElementById('timer-display');
const currentTopicBadge = document.getElementById('current-topic-badge');
const scoreText = document.getElementById('score-text');
const resultMessage = document.getElementById('result-message');

// PROGRESS TRACKING
const totalCategories = [...new Set(questions.map(q => q.category))];
let completedTopics = new Set();
let cumulativeScore = 0;
let isGrandFinal = false;

let selectedTopic = null;
let selectedDuration = 5;
let timerInterval = null;
let timeLeft = 0;
let currentQuestions = [];
let userAnswers = []; // Store answers specifically for current quiz
let allUserAttempts = {}; // Store answers per topic: {topic: [answers]}

let isReviewMode = false;

// Initialize Topics
function initTopics() {
    topicGrid.innerHTML = '';
    totalCategories.forEach(category => {
        const card = document.createElement('div');
        const isDone = completedTopics.has(category);
        card.className = `topic-card ${isDone ? 'done' : ''}`;
        card.textContent = category;

        if (!isDone) {
            card.onclick = () => selectTopic(category, card);
        }
        topicGrid.appendChild(card);
    });

    // Update Start Button Text based on progress
    if (completedTopics.size === totalCategories.length) {
        startBtn.textContent = "View Final Results";
        startBtn.classList.add('final-btn');
    } else {
        startBtn.textContent = "Start Quiz";
        startBtn.classList.remove('final-btn');
    }
}

// Login Logic
loginBtn.onclick = () => {
    const name = userNameInput.value.trim();
    const appNo = appNumberInput.value.trim();

    if (!name || !appNo) {
        alert("Please enter both Name and Application Number!");
        return;
    }

    if (audioCtx.state === 'suspended') audioCtx.resume();
    playSound('click');
    showScreen(homeScreen);
    initTopics();
};

function selectTopic(category, card) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playSound('click');
    selectedTopic = category;
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
}



// Start Quiz
startBtn.onclick = () => {
    if (completedTopics.size === totalCategories.length) {
        showGrandFinalResults();
        return;
    }

    if (!selectedTopic) {
        alert("Please select a topic! All topics are mandatory.");
        return;
    }

    isReviewMode = false;
    userAnswers = [];
    currentQuestions = questions.filter(q => q.category === selectedTopic).slice(0, 10);
    timeLeft = selectedDuration * 60;

    quizContainer.classList.remove('review-mode');
    submitBtn.style.display = 'block';
    homeReviewBtn.style.display = 'none';

    showScreen(quizScreen);
    currentTopicBadge.textContent = selectedTopic;
    loadQuiz();
    startTimer();
};

function showScreen(screen) {
    [loginScreen, homeScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}


function loadQuiz() {
    quizContainer.innerHTML = '';
    currentQuestions.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `<h3>${idx + 1}. ${q.question}</h3>`;

        q.options.forEach((opt, oIdx) => {
            const label = document.createElement('label');
            label.className = 'option';

            const isSelected = userAnswers[idx] === oIdx.toString();
            const isCorrect = oIdx === q.answer;

            if (isReviewMode) {
                if (isSelected) {
                    label.classList.add(isCorrect ? 'correct' : 'incorrect');
                } else if (isCorrect) {
                    label.classList.add('reveal-correct');
                }
            }

            label.innerHTML = `
                <input type="radio" name="q${idx}" value="${oIdx}" 
                ${isSelected ? 'checked' : ''} 
                ${isReviewMode ? 'disabled' : ''}>
                ${opt}
            `;

            if (!isReviewMode) {
                label.addEventListener('click', () => {
                    if (audioCtx.state === 'suspended') audioCtx.resume();
                    playSound('click');
                });
            }
            div.appendChild(label);
        });

        if (isReviewMode) {
            const feedback = document.createElement('div');
            const userSelection = userAnswers[idx];
            if (userSelection === undefined) {
                feedback.className = 'review-info incorrect-text';
                feedback.textContent = `No answer selected. Correct answer: ${q.options[q.answer]}`;
            } else if (parseInt(userSelection) === q.answer) {
                feedback.className = 'review-info correct-text';
                feedback.textContent = 'Correct Answer!';
            } else {
                feedback.className = 'review-info incorrect-text';
                feedback.textContent = `Wrong. Correct answer: ${q.options[q.answer]}`;
            }
            div.appendChild(feedback);
        }

        quizContainer.appendChild(div);
    });
}

function startTimer() {
    updateTimerDisplay();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 30) {
            timerDisplay.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function handleTimeout() {
    playSound('timeout');
    setTimeout(() => {
        alert("Time's up!");
        submitQuiz();
    }, 100);
}

function submitQuiz() {
    clearInterval(timerInterval);
    playSound('submit');

    let score = 0;
    userAnswers = [];
    currentQuestions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selected) {
            userAnswers[idx] = selected.value;
            if (parseInt(selected.value) === q.answer) {
                score++;
            }
        } else {
            userAnswers[idx] = undefined;
        }
    });

    // Save progress
    if (!completedTopics.has(selectedTopic)) {
        completedTopics.add(selectedTopic);
        cumulativeScore += score;
        allUserAttempts[selectedTopic] = [...userAnswers];
    }

    showResults(score);
}

submitBtn.onclick = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    submitQuiz();
};

function showResults(score) {
    showScreen(resultScreen);
    isGrandFinal = false;

    const totalPossible = totalCategories.length * 10;
    const progress = completedTopics.size;

    resultScreen.querySelector('h2').textContent = `Topic: ${selectedTopic} Completed!`;
    scoreText.textContent = `${score}/10`;

    let msg = `You've completed ${progress} out of ${totalCategories.length} topics.<br>`;
    if (progress < totalCategories.length) {
        msg += "Please complete all other topics to see your final score.";
        restartBtn.textContent = "Next Subject";
    } else {
        msg += "All topics completed! Ready for the final report?";
        restartBtn.textContent = "View Final Score";
    }
    resultMessage.innerHTML = msg;
}

function showGrandFinalResults() {
    showScreen(resultScreen);
    isGrandFinal = true;

    const totalPossible = totalCategories.length * 10;
    resultScreen.querySelector('h2').textContent = `🏁 Grand Final Results`;
    scoreText.textContent = `${cumulativeScore}/${totalPossible}`;

    const percentage = (cumulativeScore / totalPossible) * 100;

    let message = `
        <div style="margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left;">
            <strong>Candidate:</strong> ${userNameInput.value}<br>
            <strong>ID:</strong> ${appNumberInput.value}
        </div>
        Total Progress: 100%<br>
    `;

    if (percentage >= 80) message += "Legendary! You are a master of all subjects!";
    else if (percentage >= 50) message += "Great job! You've successfully covered all basics.";
    else message += "Knowledge journey complete! Keep practicing to improve your scores.";

    resultMessage.innerHTML = message;
    restartBtn.textContent = "Reset & Restart All";
    reviewBtn.style.display = 'none'; // Complex to review all at once, or we could link back
}

reviewBtn.onclick = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playSound('click');
    isReviewMode = true;
    quizContainer.classList.add('review-mode');
    submitBtn.style.display = 'none';
    homeReviewBtn.style.display = 'block';
    loadQuiz();
    showScreen(quizScreen);
};

homeReviewBtn.onclick = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playSound('click');
    showScreen(homeScreen);
    selectedTopic = null;
    initTopics();
};

restartBtn.onclick = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playSound('click');

    if (restartBtn.textContent === "Reset & Restart All") {
        completedTopics.clear();
        cumulativeScore = 0;
        allUserAttempts = {};
        userNameInput.value = '';
        appNumberInput.value = '';
        reviewBtn.style.display = 'block';
        initTopics();
        showScreen(loginScreen);
    } else {
        initTopics();
        showScreen(homeScreen);
    }
};

// Initialize
initTopics();