

function showMessage() {
    alert("Welcome to Campus Study Hub! 🚀");
}


// Semester options
function updateSemesters() {

    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester");

    semester.innerHTML = '<option value="">-- Choose Semester --</option>';

    if (branch !== "") {

        for (let i = 1; i <= 8; i++) {
            semester.innerHTML +=
                `<option value="${i}">Semester ${i}</option>`;
        }
    }

    // Reset subjects
    document.getElementById("subject").innerHTML =
        '<option value="">-- Choose Subject --</option>';
}


// Subjects for each semester
function updateSubjects() {

    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject");

    subject.innerHTML =
        '<option value="">-- Choose Subject --</option>';


    // Sample subjects for CSE
    const subjects = {

        "CSE-1": [
            "Mathematics-I",
            "Programming for Problem Solving",
            "Physics"
        ],

        "CSE-2": [
            "Mathematics-II",
            "Basic Electrical Engineering",
            "Programming"
        ],

        "CSE-3": [
            "Data Structures",
            "Object Oriented Programming",
            "Discrete Mathematics"
        ],

        "CSE-4": [
            "Database Management System",
            "Computer Organization",
            "Operating System"
        ]
    };


    const key = branch + "-" + semester;

    if (subjects[key]) {

        subjects[key].forEach(function(item) {

            subject.innerHTML +=
                `<option value="${item}">${item}</option>`;

        });

    } else if (branch !== "" && semester !== "") {

        subject.innerHTML +=
            '<option value="Coming Soon">Subjects Coming Soon</option>';
    }
}


// Show selected resources
function exploreResources() {

    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value;

    const result = document.getElementById("resource-result");


    if (branch === "" || semester === "" || subject === "") {

        alert("Please select Branch, Semester and Subject first!");

        return;
    }


    result.innerHTML = `

        <div class="result-box">

            <h2>${subject} 📚</h2>

            <p>${branch} | Semester ${semester}</p>

            <h3>Choose Resources:</h3>

            <button>📚 Notes</button>
            <button>📄 PYQs</button>
            <button>📝 CT Papers</button>
            <button>⭐ Senior Suggestions</button>

        </div>

    `;
}

function showAdvice(subject) {

    const result = document.getElementById("advice-result");

    const advice = {

        DSA: {
            name: "Data Structures",
            difficulty: "⭐⭐⭐⭐☆ Moderate to Challenging",
            resources: "Focus on a beginner-friendly playlist and practice coding regularly.",
            topics: "Arrays, Linked Lists, Stacks, Queues, Trees and Graphs.",
            strategy: "First understand concepts, then write code yourself and practice questions.",
            mistakes: "Do not memorize programs without understanding the logic.",
            exam: "Practice PYQs and revise important definitions and algorithms.",
            personal: "Start early and practice consistently. Don't wait until exams!"
        },

        OOP: {
            name: "Object Oriented Programming",
            difficulty: "⭐⭐⭐☆☆ Moderate",
            resources: "Learn concepts with examples and practice writing C++ programs.",
            topics: "Classes, Objects, Constructors, Inheritance and Polymorphism.",
            strategy: "Understand every concept and write small programs yourself.",
            mistakes: "Don't only memorize definitions—understand the code.",
            exam: "Focus on important concepts, syntax and programming questions.",
            personal: "Practice inheritance and polymorphism properly."
        },

        DM: {
            name: "Discrete Mathematics",
            difficulty: "⭐⭐⭐⭐☆ Challenging",
            resources: "Use lectures and solve plenty of numerical problems.",
            topics: "Logic, Relations, Functions, Graph Theory and Combinatorics.",
            strategy: "Practice regularly instead of studying everything at the end.",
            mistakes: "Don't skip numerical practice.",
            exam: "Practice PYQs and understand the formulas and concepts.",
            personal: "Focus on weak topics early because they can take time."
        },

        COA: {
            name: "Computer Organization",
            difficulty: "⭐⭐⭐☆☆ Moderate",
            resources: "Understand concepts visually and use diagrams.",
            topics: "CPU, Memory, Instructions and Computer Architecture.",
            strategy: "Understand the flow of operations instead of memorizing everything.",
            mistakes: "Don't ignore diagrams and numerical questions.",
            exam: "Practice diagrams and repeated PYQ topics.",
            personal: "Make short notes for revision."
        }

    };


    const data = advice[subject];


    result.innerHTML = `

        <div class="advice-box">

            <h1>⭐ ${data.name} — Senior Guide</h1>


            <div class="advice-section">
                <h3>🎯 Difficulty Level</h3>
                <p>${data.difficulty}</p>
            </div>


            <div class="advice-section">
                <h3>📺 Best Resources</h3>
                <p>${data.resources}</p>
            </div>


            <div class="advice-section">
                <h3>🔥 Important Topics</h3>
                <p>${data.topics}</p>
            </div>


            <div class="advice-section">
                <h3>📚 Study Strategy</h3>
                <p>${data.strategy}</p>
            </div>


            <div class="advice-section">
                <h3>⚠️ Common Mistakes</h3>
                <p>${data.mistakes}</p>
            </div>


            <div class="advice-section">
                <h3>📝 Exam Strategy</h3>
                <p>${data.exam}</p>
            </div>


            <div class="advice-section">
                <h3>💡 Senior's Personal Advice</h3>
                <p>${data.personal}</p>
            </div>

        </div>
    `;

}


function continueToDashboard() {

    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;

    if (branch === "" || year === "" || semester === "") {
        alert("Please select Branch, Year and Semester!");
        return;
    }

    // Save student's selection
    localStorage.setItem("branch", branch);
    localStorage.setItem("year", year);
    localStorage.setItem("semester", semester);

    // Go to dashboard page
    window.location.href = "dashboard.html";
}
