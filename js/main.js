/* =====================================================
   TURNER TECH
   MAIN.JS
   Premium interactions
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Sticky Header Shadow
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* ==========================
       Active Navigation
    ========================== */

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

    /* ==========================
       Scroll Reveal Animation
    ========================== */

    const revealElements = document.querySelectorAll(
        ".card, .service-card, .brand-box, .step, .section-heading"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

    /* ==========================
       Button Ripple Effect
    ========================== */

    document.querySelectorAll(".primary-btn, .secondary-btn, .quote-btn")
        .forEach(button => {

            button.addEventListener("click", function (e) {

                const circle = document.createElement("span");

                const diameter = Math.max(this.clientWidth, this.clientHeight);

                circle.style.width = diameter + "px";
                circle.style.height = diameter + "px";

                circle.classList.add("ripple");

                const rect = this.getBoundingClientRect();

                circle.style.left = (e.clientX - rect.left - diameter / 2) + "px";
                circle.style.top = (e.clientY - rect.top - diameter / 2) + "px";

                const ripple = this.querySelector(".ripple");

                if (ripple) {

                    ripple.remove();

                }

                this.appendChild(circle);

            });

        });

    /* ==========================
       Hero Image Tilt
    ========================== */

    const heroImage = document.querySelector(".image-placeholder");

    if (heroImage) {

        heroImage.addEventListener("mousemove", (e) => {

            const rect = heroImage.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 25;
            const rotateY = (x - rect.width / 2) / 25;

            heroImage.style.transform =
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        heroImage.addEventListener("mouseleave", () => {

            heroImage.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        });

    }

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});
