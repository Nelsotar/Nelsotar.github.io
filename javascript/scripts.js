function displayJsFooter(){
  const footer = document.getElementById('jsFooter');
  footer.style.display = "grid";
}

function fadeOutIntro(id){
  disableNav();
  const introEl = document.getElementsByClassName("fadeIntro");
  if(!introEl[0].getAttribute('activated')){
    introEl[0].setAttribute('activated', true);
    introEl[0].addEventListener('webkitAnimationEnd', () =>{
      introAnim(id);
    });
    for(let i = 0; i < introEl.length; i++){
      introEl[i].style.webkitAnimationPlayState = "running";
    }

  }
}

function displayJsPage(id){
  const introTxt = document.getElementsByClassName("fadeIntro")[0];
  if(!introTxt.getAttribute('activated')){
    fadeOutIntro(id);
  }else{
    makeJsPageVisible(id);
  }
}

function disableNav(){
  const buttons = document.getElementsByClassName("navBar");
  for(let i =0; i < buttons.length; i++){
    buttons[i].style.pointerEvents = "none";
  }
}

function enableNav(){
  const buttons = document.getElementsByClassName("navBar");
  for(let i =0; i < buttons.length; i++){
    buttons[i].style.pointerEvents = "auto";
  }
}

function makeJsPageVisible(id){
  hideAllElements();
  resetNavBarColor();
  if(id != "Title"){
    changeNavBarColor(id);
  }
  const element = document.getElementById("js" + id);
  element.style.display = "block";
}

function resetNavBarColor(){
  const allElements = document.getElementsByClassName('navBar');

  for(let i = 0; i < allElements.length; i++){
    allElements[i].childNodes[0].style.color = 'white';
    allElements[i].style.backgroundColor = '#2E2E2E';
  }
}

function changeNavBarColor(id){
  const navBarElement = document.getElementById("nav" + id);

  navBarElement.childNodes[0].style.color = 'black';
  navBarElement.style.backgroundColor = 'white';
}


function hideAllElements(){
  const allElements = document.getElementsByClassName('jsOnly');

  for(let i = 0; i < allElements.length; i++){
    allElements[i].style.display = 'none';
  }
}

function introAnim(id){
  const div = document.getElementById('expandIntro');
  div.addEventListener('webkitTransitionEnd', ()=>{
    enableNav();
    makeJsPageVisible(id);
  });

  div.style.transition = "height 0.75s, opacity 0.75s";
  const width = window.innerWidth;
  const height = window.innerHeight;

  if(width > height){
      div.style.height = "85%";
  }else{
      div.style.height = "70%";
  }

  div.style.opacity = "1.0";

  const logo = document.getElementById('expandLogo');
  logo.style.opacity = "1.0";
}

function printSize(){
  console.log(window.innerWidth);
  console.log(window.innerHeight);
}

function playDemo(video){
  const source = document.getElementById("demoSource");
  source.src = video;
  const demoDiv = document.getElementById("projectDemo");
  demoDiv.style.display = "flex";
}

function closeDemo(){
  const demoDiv = document.getElementById("projectDemo");
  demoDiv.style.display = "none";
}

displayJsFooter();
makeJsPageVisible('Title');
//window.onresize = printSize;
