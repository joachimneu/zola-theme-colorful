function initTooltips() {
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    var tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function initContactEmail() {
    var user = document.getElementById('contact').innerHTML.split('<code>')[1].split('</code>')[0];
    var organization = document.getElementById('contact').innerHTML.split('<code>')[2].split('</code>')[0];
    document.getElementById('contact').innerHTML = '<a href="mailto:' + user + '@' + organization + '">' + user + '@' + organization + '</a>';
    document.getElementById('icons_container').innerHTML = '<a href="mailto:' + user + '@' + organization + '" data-bs-toggle="tooltip" data-bs-title="Email: ' + user + '@' + organization + '"><img src="' + zolaGetUrl('img/logo_email.png') + '" alt="Email icon"></a> · ' + document.getElementById('icons_container').innerHTML;
    document.getElementById('contact_container').setAttribute('style', 'display: none;');
}

document.addEventListener('DOMContentLoaded', (event) => {
    initContactEmail();
    initTooltips();
});

MathJax = {
    tex: {
        inlineMath: [['$', '$']]
    }
};