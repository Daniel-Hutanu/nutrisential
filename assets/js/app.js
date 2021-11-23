const header = document.querySelector("header");
const move = document.querySelector(".move");
const logo = document.querySelector(".leftColumn>img");
const firstNav = document.querySelector(".firstNav");
const secondNav = document.querySelector(".secondNav");
const fluidWrapper = document.querySelector(".fluidWrapper");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    move.style = "display: block; padding-top: 185px";
    fluidWrapper.style = "padding-bottom: 15px; padding-top: 15px; transition: .2s all;";
    firstNav.style = "padding-bottom: 5px; transition: .2s all;";
    secondNav.style ="padding-bottom: 5px; padding-top: 5px; transition: .2s all;";
    logo.style = "width: 100px; height: 70px; transition: .2s all";
    header.classList.toggle("sticky", window.scrollY > 0);
  } else {
    move.style = "display: none;";
    fluidWrapper.style = "padding-bottom: 40px; padding-top: 40px; transition: .2s all;";
    firstNav.style = "padding-bottom: 20px; transition: .2s all;";
    secondNav.style =
      "padding-bottom: 20px; padding-top: 20px; transition: .2s all;";
    logo.style = "width: 170px; height: 120px; transition: .2s all;";
    header.classList.remove("sticky", window.scroll == 0);
  }
});

//tabs

function openPage(pageName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();

function openTab(tabName) {
    var j, tabContent;
    tabContent = document.getElementsByClassName("tabContent");
    for (j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

var btnOpen = document.getElementById('defaultOpenTab');
var btnClose = document.getElementById('closeTab')

btnOpen.click();

function changeBackground(){
  btnClose.style = "background: #F0AB1A; color: #000; box-shadow: 2px -3px 1px rgba(255,255,255,1);";
  btnOpen.style="background: #489593; color: #fff; box-shadow: none;";
}
function changeBackgroundTwo(){
  btnOpen.style = "background: #F0AB1A; color: #000; box-shadow: 2px -3px 1px rgba(255,255,255,1);";
  btnClose.style= "background: #489593; color: #fff; box-shadow: none;";
}

document.getElementById('first').addEventListener("mouseover", function(){
  document.getElementById("firstHover").style = "display: block";
});
document.getElementById('first').addEventListener("mouseout", function(){
  document.getElementById("firstHover").style = "display: none";
});
document.getElementById('second').addEventListener("mouseover", function(){
  document.getElementById("secondHover").style = "display: block";
});
document.getElementById('second').addEventListener("mouseout", function(){
  document.getElementById("secondHover").style = "display: none";
});
document.getElementById('third').addEventListener("mouseover", function(){
  document.getElementById("thirdHover").style = "display: block";
});
document.getElementById('third').addEventListener("mouseout", function(){
  document.getElementById("thirdHover").style = "display: none";
});

var k = 0;

$('#closeMap').click(function(){
  if(k==0){
  $('#textMap').text('Deschide Harta');
  $('iframe').fadeOut(800);
  k=1;
  } else{
  $('#textMap').text('Inchide Harta');
  $('iframe').fadeIn(800);
  k=0;
  }
});

window.onscroll = function () {
  var x = window.matchMedia("(max-width: 1000px)");
  if (x.matches) {
    move.style = "display: none;";
    header.classList.remove("sticky");
    document.getElementById('first').addEventListener("mouseover", function(){
      document.getElementById("firstHover").style = "display: block";
    });
    document.getElementById('first').addEventListener("mouseout", function(){
      document.getElementById("firstHover").style = "display: block";
    });
    document.getElementById('second').addEventListener("mouseover", function(){
      document.getElementById("secondHover").style = "display: block";
    });
    document.getElementById('second').addEventListener("mouseout", function(){
      document.getElementById("secondHover").style = "display: block";
    });
    document.getElementById('third').addEventListener("mouseover", function(){
      document.getElementById("thirdHover").style = "display: block";
    });
    document.getElementById('third').addEventListener("mouseout", function(){
      document.getElementById("thirdHover").style = "display: block";
    });
  }
}