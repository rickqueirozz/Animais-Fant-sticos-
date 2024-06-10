export default function initDropdown(){
  
}

const drop = document.querySelectorAll('[data-dropdown]');

drop.forEach(menu=>{
  menu.addEventListener('click',handleClick);
  menu.addEventListener('touchstart',handleClick);
})


function handleClick(event){
  event.preventDefault();
  this.classList.add('active');
  clickOutside(this, ()=>{
    this.classList.remove('active');
  })
}


function clickOutside(element, callback){
  const html = document.documentElement;
  const outside = 'data-outside';
  if(!element.hasAttribute(outside)){
    html.addEventListener('click', handleOutsideClick )
    element.setAttribute(outside, '')
  }
  function handleOutsideClick(event){
    if(!element.contains(event.target)){
      html.removeEventListener('click', handleOutsideClick);
      callback()
    }
  }
}
