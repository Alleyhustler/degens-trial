function getMenu() {
  setTimeout(function () {
    document.getElementById('menu').innerHTML = `<div class="headcont"><h1><a href="/work/index.html">..synths/work</a></h1>
    <a href="/work/char.html">characters</a>
    <a href="/work/sketchbook.html">sketchbook</a>
    <a href="/work/pixel.html">pixel</a>
    <a href="/work/fanart.html">fanart</a>
    <a href="/work/writing.html">writing</a>
    <a href="/work/mods.html">mods</a></div>`;
    setupMenu();   // <--- now
  }, 10);
}

getMenu();
  
  function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}