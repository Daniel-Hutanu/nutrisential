const header = document.querySelector('header');
const move = document.querySelector('.move');
const logo = document.querySelector('.leftColumn>img');
const firstNav = document.querySelector('.firstNav');
const secondNav = document.querySelector('.secondNav');
const fluidWrapper = document.querySelector('.fluidWrapper');

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        move.style = "display: block; padding-top: 185px";
        fluidWrapper.style = "padding-bottom: 15px; padding-top: 15px; transition: .2s all;";
        firstNav.style = "padding-bottom: 5px; transition: .2s all;";
        secondNav.style = "padding-bottom: 5px; padding-top: 5px; transition: .2s all;";
        logo.style = "width: 100px; height: 70px; transition: .2s all";
        header.classList.toggle("sticky", window.scrollY > 0);
    } else{
        move.style = "display: none;";
        fluidWrapper.style = "padding-bottom: 40px; padding-top: 40px; transition: .2s all;";
        firstNav.style = "padding-bottom: 20px; transition: .2s all;";
        secondNav.style = "padding-bottom: 20px; padding-top: 20px; transition: .2s all;";
        logo.style = "width: 170px; height: 120px; transition: .2s all;";
        header.classList.remove("sticky", window.scroll == 0);
    }
    
  });