// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Banner fade in animation
    gsap.to('.banner-content', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });

    // Card animations
    const cards = document.querySelectorAll('.animate-card');
    gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Sidebar functionality
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-sidebar');
    const closeButton = document.querySelector('.sidebar-close');
    const mainContent = document.querySelector('.main-content');

    // Function to toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('sidebar-active');
        
        // Animate the toggle button
        gsap.to(toggleButton, {
            rotate: sidebar.classList.contains('active') ? 90 : 0,
            duration: 0.3
        });
    }

    // Toggle sidebar when menu button is clicked
    toggleButton.addEventListener('click', toggleSidebar);

    // Close sidebar when close button is clicked
    closeButton.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && 
            !toggleButton.contains(e.target) && 
            sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    // Handle sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // On mobile, close sidebar after clicking a link
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Sidebar toggle and hide toggle button logic
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-sidebar');
    const closeBtn = document.querySelector('.sidebar-close');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.add('sidebar-open');
            toggleBtn.style.display = 'none';
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', function () {
            sidebar.classList.remove('sidebar-open');
            toggleBtn.style.display = '';
        });
    }
});

// Page transition animation
window.addEventListener('beforeunload', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.3
    });
});
