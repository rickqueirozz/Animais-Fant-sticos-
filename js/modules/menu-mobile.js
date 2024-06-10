// import clickOutside from './modules/outsideclick'
export default function initMenuMobile(){
 
}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const eventos = ['click','touchstart'];

function openMenu(event){
  menuList.classList.add('active');
  menuButton.classList.add('active');
  clickOutside(menuList,eventos,()=>{
    menuList.classList.remove('active');
    menuButton.classList.remove('active');
  })
}

eventos.forEach(evento => menuButton.addEventListener(evento,openMenu));


function clickOutside(element,events, callback){
  const html = document.documentElement;
  const outside = 'data-outside';
  if(!element.hasAttribute(outside)){
    events.forEach(useEvent =>{
      setTimeout(()=> html.addEventListener(useEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '')
  }
  function handleOutsideClick(event){
    if(!element.contains(event.target)){
      events.forEach(useEvent => {
        html.removeEventListener(useEvent, handleOutsideClick);
      });
      element.removeAttribute(outside);
      callback()
    }
  }
}