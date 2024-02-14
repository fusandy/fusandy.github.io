AOS.init();

const aboutTab = document.querySelector('#aboutTab')
const aboutSection = document.querySelector('#about')
const skillsTab = document.querySelector('#skillsTab')
const skillsSection = document.querySelector('#skills')
const experiencesTab = document.querySelector('#experiencesTab')
const experiencesSection = document.querySelector('#experiences')
const projectsTab = document.querySelector('#projectsTab')
const projectsSection = document.querySelector('#projects')
const contactTab = document.querySelector('#contactTab')
const contactSection = document.querySelector('#contact')

const navbarTexts = document.querySelectorAll('.navbar-text')
const navbarHam = document.querySelector('#navbar-ham')
const svgPath = document.querySelector('#navbar-ham-path')
const sideMenu = document.querySelector('.side-menu')

const colors = {
  // white: '#fff',
  primary: '#393127',
  secondary: '#f5ebe0'
}

// web navbar
aboutTab.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' })
})

skillsTab.addEventListener('click', () => {
  skillsSection.scrollIntoView({ behavior: 'smooth' })
})

experiencesTab.addEventListener('click', () => {
  experiencesSection.scrollIntoView({ behavior: 'smooth' })
})

projectsTab.addEventListener('click', () => {
  projectsSection.scrollIntoView({ behavior: 'smooth' })
})

contactTab.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' })
})

const changeNavbarColor = () => {

  const skillsRect = skillsSection.getBoundingClientRect();
  const projectsRect = projectsSection.getBoundingClientRect();

  const isSkillsInView = skillsRect.top <= 50 && skillsRect.bottom >= 50;
  const isProjectsInView = projectsRect.top <= 50 && projectsRect.bottom >= 50;

  if (isSkillsInView || isProjectsInView) {
    navbarTexts.forEach(text => text.style.color = colors.secondary);
    svgPath.style.fill = colors.secondary;
  } else {
    navbarTexts.forEach(text => text.style.color = colors.primary);
    svgPath.style.fill = colors.primary
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    changeNavbarColor();
  });

  changeNavbarColor();
})

// mobile navbar
navbarHam.addEventListener('click', () => {
  sideMenu.classList.add('active')
})

// web size experiences animation
const items = document.querySelectorAll('.single-item')
const singleItems = document.querySelectorAll('.single-item')

singleItems.forEach(item => {
  item.addEventListener('mouseenter', function () {
    this.classList.add('active');
  })
})

singleItems.forEach(item => {
  item.addEventListener('mouseleave', function () {
    const spanElement = this.querySelector('span');
    this.classList.remove('active');
    spanElement.style.color = colors.primary;
  })
})

// function toggleMenu() {
//   const toggleMenu = document.querySelector('.toggle');
//   const sidebar = document.querySelector('.sidebar');
//   toggleMenu.classList.toggle('active');
//   sidebar.classList.toggle('active');
// }

// function showFirstPage() {
//   const imgSideBar = document.querySelector('.imgSideBar');
//   const contentBox = document.querySelector('.contentBox');
//   imgSideBar.classList.remove('leave');
//   imgSideBar.addEventListener('transitionend', function (e) {
//     // console.log(e);
//     if (e.propertyName === 'left') {
//       contentBox.style.opacity = 1;
//     }
//   });
// }
// showFirstPage();
// window.addEventListener('contextmenu', (event) => event.preventDefault());