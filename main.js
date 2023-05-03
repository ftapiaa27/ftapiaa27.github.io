const projectImages = document.getElementsByClassName('project-image');
const projects = document.getElementsByClassName('project');
for (let i = 1; i < projectImages.length; i++) {
    projectImages[i].style.display = 'none';
}
function showProjectImage(event) {
    if (event.target.style.display === 'none') {
        event.target.style.display = 'block';
    } else {
        event.target.style.display = 'none';
    }
}
for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', showProjectImage);
}
const otherSkills = document.getElementById('second-skills-container');
otherSkills.style.display = 'none';

