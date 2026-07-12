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
