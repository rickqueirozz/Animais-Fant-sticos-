//funcao para realizar a animao ao apertar nos links internos
export default function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scroolToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior:'smooth',
      block:'start', 
    });  
  }

  linksInternos.forEach((link )=>{
    link.addEventListener('click', scroolToSection);
  })
}


