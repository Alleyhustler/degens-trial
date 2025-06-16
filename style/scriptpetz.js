function getMenupetz() {
  setTimeout(function () {
    document.getElementById('navmenupetz').innerHTML = `<a href="index.html" class="navheadl"><h2 class="navhead"><img src="/style/petz.png" alt="petz"></h2></a>
  <h2 class="subnavhead">Crew</h2>
		<a href="mypetz.html">/petz_5</a>
    <a href="mypetz4.html">/petz_4</a>
  <h2 class="subnavhead">Downloadz</h2>
    <a href="kennel.html" class="sidemenu2">/kennel</a>
  <h2 class="subnavhead">Breedz</h2>
    <a href="catz.html">/catz</a>
  <h2 class="subnavhead">Genealogy</h2>
    <a href="gene.html">/main</a>
    <a href="artwork.html">/artwork</a>
    <a href="astro.html">/astros_crosses</a>
  <h2 class="subnavhead">More</h2>
    <a href="petzlinks.html">/links</a>
    <a href="stamps.html">/stamps</a>
    <a href="/explore/games/petz.html">/petz_series</a>`;
    setupMenupetz();   // <--- now
  }, 10);
}

getMenupetz();

