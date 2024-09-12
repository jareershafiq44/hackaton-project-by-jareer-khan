document.addEventListener('DOMContentLoaded', function () {
    var skillsSection = document.querySelector('.skills');
    skillsSection.addEventListener('click', function () {
        skillsSection.classList.toggle('expanded');
    });
});
