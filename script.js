/* =================================================
   MODULE 3 - JAVASCRIPT FEATURES
   ================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("open");

    const isOpen =
        navbar.classList.contains("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu after clicking a link */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* ================= DARK / LIGHT MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        themeToggle.textContent =
            "☀️ Light Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent =
            "🌙 Dark Mode";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* Remember user's theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent =
        "☀️ Light Mode";
}



/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = function () {

    revealElements.forEach(function (element) {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (elementTop <
            windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Run once when page loads */

revealOnScroll();



/* ================= SMOOTH SCROLL ================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        const targetId =
            link.getAttribute("href");


        const targetSection =
            document.querySelector(targetId);


        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



/* ================= CONTACT FORM VALIDATION ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get values */

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");


        /* Get error elements */

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const messageError =
            document.getElementById("messageError");

        const successMessage =
            document.getElementById(
                "successMessage"
            );


        /* Clear previous messages */

        nameError.textContent = "";

        emailError.textContent = "";

        messageError.textContent = "";

        successMessage.textContent = "";


        let isValid = true;



        /* ===== NAME VALIDATION ===== */

        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        }


        else if (
            name.value.trim().length < 2
        ) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            isValid = false;

        }



        /* ===== EMAIL VALIDATION ===== */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        }

        else if (
            !emailPattern.test(
                email.value.trim()
            )
        ) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }



        /* ===== MESSAGE VALIDATION ===== */

        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            isValid = false;

        }

        else if (
            message.value.trim().length < 10
        ) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            isValid = false;

        }



        /* ===== SUCCESS ===== */

        if (isValid) {

            successMessage.textContent =
                "Your message has been validated successfully!";

            contactForm.reset();

        }

    }
);



/* ================= SCROLL TO TOP ================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topButton.style.display =
                "block";

        } else {

            topButton.style.display =
                "none";

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);