const projectImages = document.getElementsByClassName('project-image');
const projects = document.getElementsByClassName('project');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', function() {
        projectImages[i].style.display = 'flex';
        document.getElementById("placeholder").style.display = 'none';
        for (let j = 0; j < projects.length; j++) {
            if (i !== j) {
                projectImages[j].style.display = 'none';
            }
        }
    });
}

const otherSkills = document.getElementById('second-skills-container');
const otherSkillsTitle = document.getElementById('other-skills');
let otherSkillsShown = false;

otherSkillsTitle.addEventListener('click', function() {
    if (otherSkillsShown) {
        otherSkills.style.display = 'none';
        otherSkillsShown = false;
    } else {
        otherSkills.style.display = 'flex';
        otherSkillsShown = true;
    }
});



