document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills') as HTMLElement;
    skillsSection.addEventListener('click', () => {
        skillsSection.classList.toggle('expanded');
    });
});
