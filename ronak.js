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
            document.getElementById('name').textContent = profileData.name.ur;
        } else if (lang === "ar") {
            document.getElementById('name').textContent = profileData.name.ar;
        } else {
            document.getElementById('name').textContent = profileData.name.en;
        }
    });
});



//data population dom abject
const profileData = {
    name: {
        en: "Aafaq Ahmad",
        ur: "آفاق احمد",
        ar: "آفاق أحمد"
    },
    jobTitle: "Web Developer | Designer | Programmer",
    contact: {
        email: "bsc22080@itu.edu.pk",
        phone: "-------",
        socialMedia: {
            linkedin: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
            github: "https://github.com/afaqfaiz"
        }
    },
    skills: {
        hardSkills:
            "I have a strong skill set that includes front-end technologies like HTML, CSS, and JavaScript, along with backend development using Python, C, and C++.I am also proficient in version control using Git and have experience working with SQL, databases, and network programming,allowing me to develop and manage robust applications efficiently.",
       
            softSkills: `I possess strong soft skills that are essential for both personal and professional success.
                         These include effective team collaboration, clear communication, and excellent time management. 
                         Additionally, I excel in problem-solving, adaptability, leadership, and critical thinking,
                      which allow me to navigate complex challenges, work efficiently under pressure,
                       and contribute positively in dynamic environments. My ability to resolve conflicts and maintain 
                       a positive attitude further enhances my professional relationships and productivity.`
    },
    projects: [
        {
            name: "Chess Game",
            description: `I developed a fully functional chess game using C++ as a console-based project.
                 The entire code was written from scratch, implementing the core mechanics of chess, 
                 including piece movement, rules, and game flow. This project helped me deepen my understanding of
                  object-oriented programming, algorithmic thinking, and game logic.`
        },
        {
            name: "Client-Server Program",
            description:`I created a console-based client-server program in C, where the client sends encrypted data to the server.
                 The server securely stores the data without decrypting it. I also implemented a mechanism to download
                  and decrypt the stored data, allowing for secure data transmission and retrieval. This project strengthened 
                my understanding of network programming, encryption techniques, and secure data handling.`
        }
    ],
    education: [
        {
            degree: "Bachelor's in Computer Science",
            university: "Information Technology University",
            duration: "Date: 2022 - 2026"
        },
        {
            course: "Front-End Web Development and Designing",
            description: `I completed a short course in Front-End Web Development and Designing, 
                where I gained a solid understanding of HTML, CSS, and JavaScript to build 
                responsive and visually appealing websites. The course also covered web design principles, 
                mobile-first development, and user interface design, helping me enhance both the 
                functionality and aesthetics of web projects.`
        }
    ],
    video: {
        url: "https://www.youtube.com/embed/ftWNrjHWKS0"
    }
};

// populate data to html

document.getElementById('name').textContent = profileData.name.en;
document.querySelector('.hero p').textContent = profileData.jobTitle;

// skills
document.querySelector("#hard").innerHTML = profileData.skills.hardSkills;
document.querySelector(".soft").innerHTML = profileData.skills.softSkills;

//PROJECT
document.querySelector(".chess").innerHTML =  profileData.projects[0].name;
document.querySelector(".chess-desc").innerHTML = profileData.projects[0].description;

document.querySelector(".client").innerHTML =  profileData.projects[1].name;
document.querySelector(".client-desc").innerHTML = profileData.projects[1].description;

//eductaion
//degree
document.querySelector(".deg-name").innerHTML =  profileData.education[0].degree;
document.querySelector(".uni-name").innerHTML =  profileData.education[0].university;
document.querySelector(".deg-date").innerHTML =  profileData.education[0].duration;
//course
document.querySelector(".cour-name").innerHTML =  profileData.education[1].course;
document.querySelector(".cour-detail").innerHTML =  profileData.education[1].description;

//video
document.querySelector(".youtube-video").src = profileData.video.url;

//contacts/fotter
document.querySelector(".email").innerText = `Email: ${profileData.contact.email}`;
document.querySelector(".phone").innerText = `Phone: ${profileData.contact.phone}`;

//linkdin and git hub
document.querySelector("#linkedin").href = profileData.contact.socialMedia.linkedin;
document.querySelector("#github").href = profileData.contact.socialMedia.github;






