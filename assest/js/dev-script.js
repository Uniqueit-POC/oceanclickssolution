
    /* ===============================
       nav bar menu
    =============================== */
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('mobile-menu-open');
    const closeBtn = document.getElementById('mobile-menu-close');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');

    // Sidebar Slide logic
    const toggleMenu = (isOpen) => {
        if (isOpen) {
            sidebar.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0', 'invisible');
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('opacity-0', 'invisible');
            document.body.style.overflow = '';
        }
    };

    if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

    // Hybrid Dropdown logic: Chevron opens menu, Text is a link.
    const chevrons = document.querySelectorAll('.mobile-chevron-btn');
    chevrons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = btn.closest('.border-b');
            const dropdown = parent.querySelector('.mobile-dropdown-content');
            const icon = btn.querySelector('svg');

            // Close all others (optional)
            document.querySelectorAll('.mobile-dropdown-content').forEach(el => {
                if(el !== dropdown) el.classList.add('hidden');
            });
            document.querySelectorAll('.mobile-chevron-btn svg').forEach(svg => {
                if(svg !== icon) svg.classList.remove('rotate-180');
            });

            // Toggle current
            dropdown.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
});

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

// start b2b-lead-generation-services
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-tab");

            // 1. Reset all buttons to inactive state
            buttons.forEach((b) => {
                b.classList.remove("bg-gradient-to-r", "from-[#0BA5DF]", "to-[#083459]", "text-white", "shadow-lg", "scale-105");
                b.classList.add("bg-white", "text-gray-700", "border-2", "border-gray-200");
            });

            // 2. Set clicked button to active state
            btn.classList.add("bg-gradient-to-r", "from-[#0BA5DF]", "to-[#083459]", "text-white", "shadow-lg", "scale-105");
            btn.classList.remove("bg-white", "text-gray-700", "border-2", "border-gray-200");

            // 3. Hide all content and show target content
            contents.forEach((content) => {
                if (content.id === target) {
                    content.classList.remove("hidden");
                    content.classList.add("block");
                } else {
                    content.classList.add("hidden");
                    content.classList.remove("block");
                }
            });
        });
    });
});
// end b2b-lead-generation-services

// start tavs b2b-lead-generation-services
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const cards = document.querySelectorAll("a[data-category]");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedCategory = btn.getAttribute("data-category");

            buttons.forEach(b => {
                b.classList.remove("active-btn", "article-active-btn");
                b.classList.add("default-btn");
            });

            btn.classList.add("active-btn", "article-active-btn");
            btn.classList.remove("default-btn");

            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || selectedCategory === cardCategory) {
                    card.style.display = "block"; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    });
});
// end tavs b2b-lead-generation-services