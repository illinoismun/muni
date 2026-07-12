function showDiv() {
    const sidenav = document.getElementById('sidenav');
    if (sidenav) sidenav.style.right = '0'; // Show the sidenav
}

function hideDiv() {
    const sidenav = document.getElementById('sidenav');
    if (sidenav) sidenav.style.right = '-300px'; // Hide the sidenav
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (submenu) submenu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    function loadPartial(selector, url) {
        var el = document.querySelector(selector);
        if (!el) return;
        fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) { el.innerHTML = html; });
    }

    loadPartial('#navbar-placeholder', 'partials/navbar.html');
});
