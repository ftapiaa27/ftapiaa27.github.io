const projectImages = document.getElementsByClassName('project-image');

for (let i = 1; i < projectImages.length; i++) {
    projectImages[i].style.display = 'none';
}

const otherSkills = document.getElementById('second-skills-container');
otherSkills.style.display = 'none';