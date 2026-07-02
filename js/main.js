/*======================================================
    TURNER TECH V3
    Main JavaScript
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
        Sticky Header Shadow
    ==================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "0 4px 18px rgba(0,0,0,.04)";

        }

    });



    /*==================================
        Smooth Scroll
    ==================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });



    /*==================================
        Reveal On Scroll
    ==================================*/

    const reveals = document.querySelectorAll(

        ".feature-card, .build-card, .stat, .cta, .section-heading"

    );



    const reveal = () => {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if(top < trigger){

                item.classList.add("visible");

            }

        });

    };



    reveal();

    window.addEventListener("scroll", reveal);



    /*==================================
        Current Year
    ==================================*/

    const year = document.querySelector("#year");

    if(year){

        year.textContent = new Date().getFullYear();

    }



    /*==================================
        Mobile Navigation
        (Future Ready)
    ==================================*/

    const toggle = document.querySelector(".mobile-toggle");

    const nav = document.querySelector("nav");



    if(toggle){

        toggle.addEventListener("click", () => {

            nav.classList.toggle("show");

        });

    }



    /*==================================
        Button Ripple Effect
    ==================================*/

    const buttons = document.querySelectorAll(

        ".primary-btn, .secondary-btn, .quote-btn"

    );



    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-3px)";

        });



        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0px)";

        });

    });



    /*==================================
        Active Navigation
    ==================================*/

    const page = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll("nav a");



    links.forEach(link => {

        link.classList.remove("active");



        if(link.getAttribute("href") === page){

            link.classList.add("active");

        }



        if(page === "" && link.getAttribute("href") === "index.html"){

            link.classList.add("active");

        }

    });



    /*==================================
        Image Fade In
    ==================================*/

    const images = document.querySelectorAll("img");



    images.forEach(img => {

        img.addEventListener("load", () => {

            img.style.opacity = "1";

        });

    });

});
