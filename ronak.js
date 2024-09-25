// Toggle the dropdown on button click
document.querySelector('.language-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Select a language and update button text
document.querySelectorAll('.language-list li a').forEach(function(languageOption) {
    languageOption.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default link behavior
        const selectedLanguage = this.textContent;  // Get the selected language text

        // Update the button text to the selected language
        document.querySelector('.language-btn').innerHTML = selectedLanguage + ' <span class="arrow">▼</span>';

        // Hide the language list
        document.querySelector('.language-btn').classList.remove('active');
    });
});