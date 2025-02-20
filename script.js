
// Function to handle login
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock validation: Replace this with actual validation logic
    if (email === "test@example.com" && password === "password") {
        window.location.href = "instructions.html";
    } else {
        alert("Invalid email or password.");
    }
}

// Function to handle registration
function register(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Here you can add the logic to save user data, e.g., to a server or localStorage
    alert("Registration successful!");
    window.location.href = "quiz.html";
}

// Function to handle quiz submission
function submitQuiz(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "a",
        q4: "a",
        q5: "b",
        q6: "a",
        q7: "b",
        q8: "a",
        q9: "b",
        q10: "a",
        q11: "b",
        q12: "a",
        q13: "a",
        q14: "a",
        q15: "b",
        q16: "a",
        q17: "b",
        q18: "a",
        q19: "a",
        q20: "b",
    };

    let score = 0;
    const totalQuestions = 20;

    for (let i = 1; i <= totalQuestions; i++) {
        const question = `q${i}`;
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer && answer.value === correctAnswers[question]) {
            score++;
        }
    }

    const scorePercentage = (score / totalQuestions) * 100;

    if (scorePercentage >= 50) {
        window.location.href = "instructions.html";
    } else {
        document.getElementById('results').innerText = `Your score: ${scorePercentage}%. You need at least 50% to proceed.`;
    }
}

// Function to handle trading signal submission
function sendSignal(event) {
    event.preventDefault();
    const signal = document.getElementById('signal').value;

    // Here you can add the logic to send the signal, e.g., to a server or an email
    alert(`Trading signal sent: ${signal}`);
    document.getElementById('signalForm').reset();
}