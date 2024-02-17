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
const svgPath = document.querySelector('#navbar-ham-path')
const sideMenu = document.querySelector('.side-menu')

const firstNameInput = document.querySelector('#input-first-name')
const lastNameInput = document.querySelector('#input-last-name')
const emailInput = document.querySelector('#input-email')
const subjectInput = document.querySelector('#input-subject')
const messageInput = document.querySelector('#input-textarea')
const submitBtn = document.querySelector('#submit')

const colors = {
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

// mobile side menu
const showSideMenu = () => {
  sideMenu.style.display = 'flex'
}
const hideSideMenu = () => {
  sideMenu.style.display = 'none'
}

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

// contact input
const sendMail = () => {
  const firstNameValue = firstNameInput.value
  const lastNameValue = lastNameInput.value
  const emailValue = emailInput.value
  const subjectValue = subjectInput.value
  const messageValue = messageInput.value
  
  const contactData = {
    name: `${firstNameValue}, ${lastNameValue}`,
    emailValue,
    messageValue
  }
  
  const receiveAddress = 'test@gmail.com'
  const encodedSubject = encodeURIComponent(subjectValue)
  const bodyData = encodeURIComponent(contactData)
  
  const mailtoUrl = `mailto:${receiveAddress}?subject=${encodedSubject}&body=${bodyData}`
  window.open(mailtoUrl)
}