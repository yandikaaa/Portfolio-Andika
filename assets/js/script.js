/*=========================================
            TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");

if (typing && typeof Typed !== "undefined") {

    new Typed("#typing", {

        strings: [

            "Web Developer",

            "UI/UX Designer",

            "Graphic Designer",

        ],

        typeSpeed: 70,

        backSpeed: 45,

        backDelay: 1800,

        loop: true

    });

}


/*=========================================
            DARK MODE
=========================================*/

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark");

}

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    if (body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

    }

    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙";

        }

    });

}


/*=========================================
        HEADER SCROLL EFFECT
=========================================*/

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}


/*=========================================
        ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");

if (sections.length > 0 && navLinks.length > 0) {

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

}


/*=========================================
        SMOOTH BUTTON EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");

if (buttons.length > 0) {

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0)";

        });

    });

}


/*=========================================
        SCROLL REVEAL
=========================================*/

const hiddenElements = document.querySelectorAll("section");

if ("IntersectionObserver" in window && hiddenElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

}


/*=========================================
            HAMBURGER MENU
=========================================*/

const hamburger = document.getElementById("hamburger");

const nav = document.querySelector("nav");

if (hamburger && nav) {

    hamburger.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}