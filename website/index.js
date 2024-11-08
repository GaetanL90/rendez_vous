$(document).ready(function() {
    // Load home page by default
    loadPage('home/home.html');

    // Handle navigation link clicks
    $('.nav-link').click(function(e) {
        e.preventDefault();
        const page = $(this).attr('href');
        loadPage(page);
    });

    // Handle authentication links on login and signup pages
    $(document).on('click', '.auth-link', function(e) {
        e.preventDefault();
        const page = $(this).attr('href');
        loadPage(page);
    });

    // Function to load page content dynamically
    function loadPage(page) {
        $('#content').load(page);
    }

    // Set the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
