/*=========================================
            TYPING EFFECT
=========================================*/

if (document.getElementById("typing") && typeof Typed !== "undefined") {

    new Typed("#typing", {

        strings: [

            "Web Developer",

            "UI/UX Designer",

            "Graphic Designer"

        ],

        typeSpeed:70,

        backSpeed:45,

        backDelay:1800,

        loop:true

    });

}

/*=========================================
            DARK MODE
=========================================*/

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    body.classList.remove("dark");

}else{

    body.classList.add("dark");

}

const themeToggle=document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.textContent=body.classList.contains("dark") ? "☀️" : "🌙";

    themeToggle.addEventListener("click",()=>{

        body.classList.toggle("dark");

        if(body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            themeToggle.textContent="☀️";

        }else{

            localStorage.setItem("theme","light");

            themeToggle.textContent="🌙";

        }

    });

}

/*=========================================
        HEADER SHADOW
=========================================*/

const header=document.querySelector(".header");

if(header){

    window.addEventListener("scroll",()=>{

        header.style.boxShadow=window.scrollY>40

        ?"0 8px 25px rgba(0,0,0,.08)"

        :"none";

    });

}

/*=========================================
        ACTIVE MENU
=========================================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

if(navLinks.length){

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}

/*=========================================
        BUTTON EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const hidden=document.querySelectorAll("section");

if(hidden.length){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    hidden.forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

}

/*=========================================
        HAMBURGER
=========================================*/

const hamburger=document.getElementById("hamburger");

const nav=document.querySelector("nav");

if(hamburger && nav){

    hamburger.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

}

/*=========================================
        PROJECT SHOWCASE
=========================================*/

const cards = document.querySelectorAll(".project-card");

const overlay = document.querySelector(".project-overlay");

if(cards.length && overlay){

    const overlayBg = document.querySelector(".overlay-bg");

    const closeBtn = document.querySelector(".close-project");

    const prevBtn = document.querySelector(".prev-project");

    const nextBtn = document.querySelector(".next-project");

    const showcaseImg = document.getElementById("showcase-img");

    const showcaseCategory = document.getElementById("showcase-category");

    const showcaseTitle = document.getElementById("showcase-title");

    const showcaseSubtitle = document.getElementById("showcase-subtitle");

    const showcaseDescription = document.getElementById("showcase-description");

    const showcaseRole = document.getElementById("showcase-role");

    const showcaseTools = document.getElementById("showcase-tools");

    const showcaseDuration = document.getElementById("showcase-duration");

    const grid = document.querySelector(".project-grid");

    let currentIndex = 0;

    function loadProject(index){

        const card = cards[index];

        cards.forEach(item=>item.classList.remove("active"));

        card.classList.add("active");

        showcaseImg.src = card.dataset.image;

        showcaseCategory.textContent = card.dataset.category;

        showcaseTitle.textContent = card.dataset.title;

        showcaseSubtitle.textContent = card.dataset.subtitle;

        showcaseDescription.textContent = card.dataset.description;

        showcaseRole.textContent = card.dataset.role;

        showcaseTools.textContent = card.dataset.tools;

        showcaseDuration.textContent = card.dataset.duration;
        updateNavigation();

    }

    cards.forEach((card,index)=>{

        const button = card.querySelector(".view-btn");

        button.addEventListener("click",(e)=>{

            e.preventDefault();

            currentIndex = index;

            grid.classList.add("blur");

            loadProject(currentIndex);

            overlay.classList.add("show");

            document.body.style.overflow="hidden";

        });

    });

    nextBtn.addEventListener("click",()=>{

    if(currentIndex < cards.length - 1){

        currentIndex++;

        loadProject(currentIndex);

    }

});

    prevBtn.addEventListener("click",()=>{

    if(currentIndex > 0){

        currentIndex--;

        loadProject(currentIndex);

    }

});

function updateNavigation(){

    prevBtn.disabled = currentIndex === 0;

    nextBtn.disabled = currentIndex === cards.length - 1;

}


    function closeProject(){

        overlay.classList.remove("show");

        grid.classList.remove("blur");

        cards.forEach(card=>card.classList.remove("active"));

        document.body.style.overflow="auto";

    }

    closeBtn.addEventListener("click",closeProject);

    overlayBg.addEventListener("click",closeProject);

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeProject();

        }

        if(overlay.classList.contains("show")){

            if(e.key==="ArrowRight"){

                nextBtn.click();

            }

            if(e.key==="ArrowLeft"){

                prevBtn.click();

            }

        }

    });

}