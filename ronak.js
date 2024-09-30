// Toggle the dropdown on button click
document.querySelector('.language-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Select a language and update button text
document.querySelectorAll('.language-list li a').forEach(function(languageOption) {
    languageOption.addEventListener('click', function(e) {
        e.preventDefault();  
        const selectedLanguage = this.textContent;  
       
        document.querySelector('.language-btn').innerHTML = selectedLanguage + ' <span class="arrow">▼</span>';

        document.querySelector('.language-btn').classList.remove('active');
    });
});

// func to control nav bar for moble/tab
function toggleMenu() {
    const navLinks = document.querySelector('.navbar-container ul'); 
    navLinks.classList.toggle('show'); 
}
document.querySelectorAll('.navbar-container ul li a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('.navbar-container ul');
        navLinks.classList.remove('show');
    });
});



//change name language
document.addEventListener("DOMContentLoaded", function () {
    const languageList = document.getElementById("languageList");
    const nameDisplay = document.getElementById("name");

    languageList.addEventListener("click", function (event) {
        const lang = event.target.getAttribute("lang");
        
        if (lang === "ur") {
            nameDisplay.textContent = "آفاق احمد";
        } else if (lang === "ar") {
            nameDisplay.textContent = "آفاق احمد";
        } else {
            nameDisplay.textContent = "Aafaq Ahmad"; 
        }
    });
});