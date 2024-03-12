//funcao para escolher a descricao de um animal especifico 
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo');

    function activeTab(index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click', ()=>{
        activeTab(index);
      })
    });
  }
}
initTabNav();

//funcao para escolher uma faq especifica
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item)=> {
      item.addEventListener('click',activeAccordion);
    })
  }
}
initAccordion()

//funcao para realizar a animao ao apertar nos links internos
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scroolToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior:'smooth',
      block:'start', 
    });
    
    //forma Alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top:topo,
    //   behavior: 'smooth', 
    // });
    
  }

  linksInternos.forEach((link )=>{
    link.addEventListener('click', scroolToSection);
  })
}

initScrollSuave()


function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        console.log(sectionTop);
        if (isSectionVisible){
          section.classList.add('ativo')
        }
      })
    }

    animaScroll()

    window.addEventListener('scroll',animaScroll);
  }
}

initAnimacaoScroll()