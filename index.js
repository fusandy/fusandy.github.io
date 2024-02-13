AOS.init();

const aboutTab = document.querySelector('#aboutTab')
const aboutSection = document.querySelector('#about')
const portfolioTab = document.querySelector('#portfolioTab')
const portfolioSection = document.querySelector('#portfolio')
const contactTab = document.querySelector('#contactTab')
const contactSection = document.querySelector('#contact')
const navbarTexts = document.querySelectorAll('.navbar-text')

aboutTab.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' })
})

portfolioTab.addEventListener('click', () => {
  portfolioSection.scrollIntoView({ behavior: 'smooth' })
})

contactTab.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' })
})

const changeNavbarColor = () => {
  const rect = portfolioSection.getBoundingClientRect();
  const isInView = rect.top <= 40 && rect.bottom >= 50;

  if (isInView) {
    navbarTexts.forEach(text => text.style.color = '#fff');
  } else {
    navbarTexts.forEach(text => text.style.color = '#393127');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    changeNavbarColor();
  });

  changeNavbarColor();
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