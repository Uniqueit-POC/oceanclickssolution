document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       BACK TO TOP + FLOATING BUTTON
    =============================== */

    const floatingButtons = document.getElementById("floatingButtons");
    const backToTop = document.getElementById("backToTop");
    const progressBar = document.getElementById("scrollProgress");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;

        if (scrollTop > window.innerHeight) {

            floatingButtons.classList.remove("opacity-0", "translate-y-5");
            floatingButtons.classList.add("opacity-100", "translate-y-0");

        } else {

            floatingButtons.classList.add("opacity-0", "translate-y-5");
            floatingButtons.classList.remove("opacity-100", "translate-y-0");

        }

        const scrollPercent = scrollTop / docHeight;
        progressBar.style.transform = `scaleX(${scrollPercent})`;

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ===============================
       HERO PARTICLE ANIMATION
    =============================== */

    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle) => {

        const speed = Math.random() * 50 + 20;

        function animate() {

            const move = Math.sin(Date.now() / speed) * 20;

            particle.style.transform = `translateY(${move}px)`;

            requestAnimationFrame(animate);
        }

        animate();

    });


    /* ===============================
       MODAL SYSTEM
    =============================== */

    const openButtons = document.querySelectorAll('.openModalBtn');
    const closeButtons = document.querySelectorAll('.closeModal');
    const backdrops = document.querySelectorAll('.modalBackdrop');

    openButtons.forEach(btn => {

        btn.addEventListener('click', () => {

            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

        });

    });

    function closeModal(modal) {

        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';

    }

    closeButtons.forEach(btn => {

        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal'));
        });

    });

    backdrops.forEach(bg => {

        bg.addEventListener('click', () => {
            closeModal(bg.closest('.modal'));
        });

    });

    document.addEventListener('keydown', (e) => {

        if (e.key === "Escape") {

            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.add('hidden');
            });

            document.body.style.overflow = 'auto';

        }

    });


    /* ===============================
       FAQ ACCORDION
    =============================== */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;
            const icon = question.querySelector(".faq-icon");

            // Close all other FAQs
            document.querySelectorAll(".faq-answer").forEach(item => {
                if(item !== answer){
                    item.classList.add("hidden");
                }
            });

            document.querySelectorAll(".faq-icon").forEach(i => {
                if(i !== icon){
                    i.textContent = "+";
                }
            });

            // Toggle current
            answer.classList.toggle("hidden");

            if(answer.classList.contains("hidden")){
                icon.textContent = "+";
            } else {
                icon.textContent = "−";
            }

        });

    });

});


/* ===============================
   TRIAL BANNER CLOSE
=============================== */

function closeBanner(btn) {

    const banner = btn.closest('.trialBanner');

    if (banner) {
        banner.style.display = "none";
    }

}