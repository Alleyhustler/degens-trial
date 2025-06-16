function getMenu() {
  setTimeout(function () {
    document.getElementById('navmenu').innerHTML = `<h2 class="navhead">/Degen Trial KOLS</h2>
		<a href="https://x.com/ShockedJS">/shockedJS</a>
		<a href="https://x.com/lynk0x">/lynk0x</a>
		<a href="https://x.com/frankdegods">/frankdegods</a>
		<a href="https://x.com/0xGroovy">/0xGroovy</a>
		<a href="https://x.com/OrangeSBS">/OrangeSBS</a>
		<a href="https://x.com/Cupseyy">/Cupseyy</a>
		<a href="https://x.com/metaversejoji">/metaversejoji</a>
		<a href="https://x.com/0xDestiny">/0xDestiny</a>
		<a href="https://x.com/SmokezXBT">/SmokezXBT</a>
		<a href="https://x.com/realpandapunks">/realpandapunks</a>
		<a href="https://x.com/jijo_exe">/jijo_exe</a>>`;
    setupMenu();   // <--- now
  }, 10);
}

getMenu();

function getMenustyle() {
  setTimeout(function () {
    document.getElementById('navmenustyle').innerHTML = `<h2 class="navhead"><p class="about" role="img" aria-label="about"></p></h2>
		<a href="/about_me.html">/about_me</a>
		<a href="/about_site.html">/about_site</a>
		<a href="/sitemap.html">/sitemap</a>
	<a href="/work/index.html" class="navheadl"><h2 class="navhead"><p class="work" role="img" aria-label="work"></p></h2></a>
		<a href="/work/char.html">/characters</a>
		<a href="/work/sketchbook.html">/sketchbook</a>
		<a href="/work/pixel.html">/pixel</a>
		<a href="/work/fanart.html">/fanart</a>
		<a href="/work/writing.html">/writing</a>
		<a href="/work/mods.html">/mods</a>
	<a href="/games/index.html" class="navheadl"><h2 class="navhead"><p class="games" role="img" aria-label="games"></p></h2></a>
		<a href="/games/petz/index.html">/petz</a>
		<a href="/data/index.html">/half_life</a>
		<a href="/games/amazisle.html">/amazing_island</a>
		<a href="/games/gmod.html">/garrys_mod</a>
		<a href="/games/index.html">..[more]</a>
	<h2 class="navhead"><p class="stuff" role="img" aria-label="stuff"></p></h2>
		<a href="/stuff/graphics.html">/graphics</a>
		<a href="/stuff/adopt.html">/adoption_center</a>
		<a href="/stuff/tv.html">/VHS_player</a>
	<h2 class="navhead"><p class="explore" role="img" aria-label="explore"></p></h2>
		<a href="/explore/links.html">/links</a>
		<a href="/explore/games/index.html.html">/games</a>
		<a href="/explore/music.html">/music</a>
		<a href="/explore/comics.html">/comics</a>
		<a href="/explore/collection/1.html">/?????</a>`;
    setupMenustyle();   // <--- now
  }, 10);
}

getMenustyle();
		
function openNav() {
  var element = document.getElementById("navSidenav");
  element.classList.toggle("open");
} 


$(document).ready(function(){
function updateItems(delta) {
  var $items = $('#group').children();
  var $current = $items.filter('.current');
  $current = $current.length ? $current : $items.first();
  var index = $current.index() + delta;
  // Range check the new index
  index = (index < 0) ? 0 : ((index > $items.length) ? $items.length : index);
  $current.removeClass('current');
  $current = $items.eq(index).addClass('current');
  // Hide/show the next/prev
  $("#prev").toggle(!$current.is($items.first()));
  $("#next").toggle(!$current.is($items.last()));
}
$("#next").click(function() {
  updateItems(1);
});
$("#prev").click(function() {
  updateItems(-1);
});
// Cause initial selection
updateItems(0);
});


$(document).ready(function(){
function updateItems(delta) {
  var $items = $('#group2').children();
  var $current = $items.filter('.current2');
  $current = $current.length ? $current : $items.first();
  var index = $current.index() + delta;
  // Range check the new index
  index = (index < 0) ? 0 : ((index > $items.length) ? $items.length : index);
  $current.removeClass('current2');
  $current = $items.eq(index).addClass('current2');
  // Hide/show the next/prev
  $("#prev2").toggle(!$current.is($items.first()));
  $("#next2").toggle(!$current.is($items.last()));
}
$("#next2").click(function() {
  updateItems(1);
});
$("#prev2").click(function() {
  updateItems(-1);
});
// Cause initial selection
updateItems(0);
});
