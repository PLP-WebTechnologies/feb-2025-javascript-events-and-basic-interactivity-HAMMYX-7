// 1. Button Click
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button was clicked!");
});

// 2. Hover Effect
document.getElementById("hoverText").addEventListener("mouseover", () => {
    document.getElementById("hoverText").style.color = "green";
});

// 3. Keypress Detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
    console.log("You pressed: " + e.key);
});

// 4. Double-click Bonus
document.getElementById("secretAction").addEventListener("dblclick", () => {
    alert("You found the hidden double-click action!");
});

// 5. Image Gallery
let imgIndex = 2;
document.getElementById("nextImg").addEventListener("click", () => {
    document.getElementById("gallery-img").src = `https://picsum.photos/200/300?random=${imgIndex++}`;
});

// 6. Tabs
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
}

// 7. Form Validation Feedback
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const password = this.password.value;
    const feedback = document.getElementById("formFeedback");

    if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
    }
});

