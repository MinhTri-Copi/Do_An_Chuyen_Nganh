// Main JavaScript file

// Category pagination
let currentPage = 1;
const totalPages = 5;

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Category cards hover effect
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Category clicked:', this.querySelector('h3').textContent);
            // Add your navigation logic here
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchQuery = searchInput.value;
            const location = document.querySelector('.search-location select').value;
            console.log('Searching for:', searchQuery, 'in', location);
            // Add your search logic here
        });
    }

    // Enter key search
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Pagination
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const paginationSpan = document.querySelector('.pagination span');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
    }

    function updatePagination() {
        if (paginationSpan) {
            paginationSpan.textContent = `${currentPage}/${totalPages}`;
        }
        // Here you would load different categories based on currentPage
        console.log('Page changed to:', currentPage);
    }

    // Floating buttons
    const floatBtns = document.querySelectorAll('.float-btn');
    floatBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('favorites')) {
                console.log('Favorites clicked');
            } else if (this.classList.contains('cv')) {
                console.log('CV clicked');
            } else if (this.classList.contains('verified')) {
                console.log('Verified clicked');
            } else if (this.classList.contains('feedback')) {
                console.log('Feedback clicked');
            } else if (this.classList.contains('support')) {
                console.log('Support clicked');
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe category cards
    categoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Notification badge animation
    const badge = document.querySelector('.badge-count');
    if (badge) {
        setInterval(() => {
            badge.style.transform = 'scale(1.2)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Footer smooth hover effects
    const footerLinks = document.querySelectorAll('.footer-links a, .app-btn');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Social media click tracking
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList[1]; // facebook, linkedin, etc.
            console.log(`Social media clicked: ${platform}`);
            // Add your tracking or redirect logic here
        });
    });

    // Scroll to top on logo click
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.style.cursor = 'pointer';
        footerLogo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log('JobHub initialized successfully! 🚀');
});

