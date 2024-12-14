document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
        const confirmNavigation = confirm("Are you sure you want to continue to this site?");
        if (!confirmNavigation) {
            event.preventDefault();
        }
    });
});
