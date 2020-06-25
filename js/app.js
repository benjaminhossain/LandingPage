/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.getElementsByTagName('section');


// build the nav
for (const currentSection of sections){
  
  const title = (currentSection.querySelector('h2')).innerText;
  const anchor = document.createElement('a');
  const listItem = document.createElement('li');
  
  anchor.innerText = title;
  anchor.href = '#' + currentSection.id;
  
  listItem.appendChild(anchor);
  document.querySelector('nav ul').appendChild(listItem);

}


// Scroll to section on link click
const links = document.querySelectorAll("nav ul li a");

for (const link of links){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const section = document.querySelector(event.target.hash);
    section.scrollIntoView({behavior: "smooth",})
  })
}



// Set sections as active
window.addEventListener("scroll", function(){
  
  for (const currentSection of sections){
    
    if (currentSection.getBoundingClientRect().top < window.innerHeight/2 && currentSection.getBoundingClientRect().bottom > window.innerHeight/2){
      currentSection.classList.add("your-active-class");
    }
    else {
      currentSection.classList.remove("your-active-class");
      }
  }
})