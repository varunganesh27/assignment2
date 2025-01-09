document.getElementById("greetButton").addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput").value.trim();
    const greetingDiv = document.getElementById("greeting");
    const errorDiv = document.getElementById("error");

    if (nameInput === "") {
        
        greetingDiv.style.opacity = 0;
        errorDiv.textContent = "Please enter your name.";
    } else {
        
        errorDiv.textContent = ""; 
        greetingDiv.textContent = `Hello, ${nameInput}! Welcome to the page!`;
        greetingDiv.style.opacity = 1; 
    }
});
