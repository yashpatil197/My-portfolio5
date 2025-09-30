// --- Interactive Skills Tab Functionality (index.html) ---

function showSkills(category) {
    // 1. Get all content and tab elements
    const contents = document.querySelectorAll('.skill-content');
    const tabs = document.querySelectorAll('.skill-tab');

    // 2. Hide all content and remove active class from tabs
    contents.forEach(content => {
        content.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 3. Show the selected content and set the corresponding tab as active
    const activeContent = document.getElementById(category);
    const activeTab = document.querySelector(`.skill-tab[onclick*="${category}"]`);

    if (activeContent) {
        activeContent.classList.add('active');
    }

    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Ensure one tab is active on load
document.addEventListener('DOMContentLoaded', () => {
    // If we are on the index page, ensure the 'programming' skills are shown by default
    if (document.querySelector('.skills-section')) {
        showSkills('programming');
    }

    // Optional: Implement smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
