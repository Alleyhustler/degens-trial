(function newAnimal() {
  var animals = [
	'<a href="https://www.inaturalist.org/taxa/42700-Chironectes-minimus" target="_blank"><img src="image.png" alt="image of a yapok"></a><p>the dexterous <strong>Yapok</strong><br>(<i>Chironectes minimus</i>)</p>',
	];
  var randomAnimal = Math.floor(Math.random() * animals.length);
  document.getElementById('animalDisplay').innerHTML = animals[randomAnimal];
})();

(function newLink() {
  var links = ['<a class="screenlink" href="http://www.inaturalist.org" target="blank">iNaturalist</a><a class="screenlink" href="http://www.gifcities.org" target="blank">gifcities.org</a><a class="screenlink" href="https://www.vg-resource.com/" target="blank">The VG Resource</a><a class="screenlink" href="https://stayaway.neocities.org/" target="blank">STAY AWAY FROM<br>DANIEL CREECH</a><a class="screenlink" href="https://doodad.dev/dither-me-this/" target="blank">Dither Me This</a><a href="https://hog.neocities.org/"><img src="explore/img/links/neocities_hog.gif" alt="hog" title="hog"></a><a href="https://jayeaton.neocities.org/"><img src="explore/img/links/neocities_jayeaton.png" alt="Jay Eaton Art" title="Jay Eaton Art"></a><br><a href="https://rabidrodent.neocities.org/"><img src="explore/img/links/rabidrodent-button.png" alt="rabidrodent" title="rabidrodent"></a><a href="https://pleurodelinae.neocities.org/"><img src="explore/img/links/neocities_pleurodelinae.png" alt="Pleurodelinae" title="Pleurodelinae"></a>',
  '<a class="screenlink" href="https://aalaynirakul.com/index.html" target="blank">Nirakul Archives</a><a class="screenlink" href="https://bluemaxima.org/flashpoint/" target="blank">Flashpoint</a><a class="screenlink" href="https://disc-content.neocities.org/" target="blank">DISC-CONTENT</a><a class="screenlink" href="https://sites.google.com/site/worldofserina/" target="blank">Serina: World of Birds</a><a class="screenlink" href="https://distantskies.neocities.org/" target="blank">Distant Skies</a><a class="screenlink" href="https://vimm.net/" target="blank">Vimm&apos;s Lair</a><a href="https://bisuko.neocities.org/index.html"><img src="explore/img/links/neocities_tigercarnival.png" alt="tiger carnival" title="tiger carnival"></a><a href="https://omfg.neocities.org/"><img src="explore/img/links/neocities_omfg.gif" alt="OMFG" title="OMFG"></a><br><a href="https://ocean-waves.neocities.org/"><img src="explore/img/links/neocities_oceanwaves.gif" alt="ocean waves" title="ocean waves"></a><a href="https://sadgrl.online/"><img src="explore/img/links/neocities_sadgrl.gif" alt="sadgrl.online" title="sadgrl.online"></a>',
  '<a class="screenlink" href="https://bytemoth.neocities.org/" target="blank">Bytemoth&apos;s Brook</a><a class="screenlink" href="https://forestfolke.neocities.org/" target="blank">Forestfolke Online</a><a class="screenlink" href="https://downloads.khinsider.com/" target="blank">KH Insider</a><a class="screenlink" href="https://lovethatdanhausen.com/" target="blank">Love That Danhausen</a><a class="screenlink" href="https://lostsoftwarearchives.neocities.org/Meow/" target="blank">MeowSynth</a><a class="screenlink" href="https://web.badges.world/" target="blank">Web Badges World</a><a href="https://y2k.neocities.org/"><img src="explore/img/links/neocities_y2k.gif" alt="Y2K" title="Y2K"></a><a href="https://dog-house.neocities.org/"><img src="explore/img/links/neocities_doghouse.gif" alt="dog house" title="dog house"></a><br><a href="https://spiritcellar.neocities.org/"><img src="explore/img/links/neocities_spiritcellar.gif" alt="spirit cellar" title="spirit cellar"></a><a href="https://mesoscale.neocities.org/"><img src="explore/img/links/neocities_mesoscale.gif" alt="mesoscale" title="mesoscale"></a>',
	];
  var randomLink = Math.floor(Math.random() * links.length);
  document.getElementById('linkDisplay').innerHTML = links[randomLink];
})();

var d = new Date().getDate();
var picdays = [
	'<img alt="Teddy bears sleeping" height="100%" src="img/daily/sleepy.png">',
	'<img alt="Worm muppet astronaut" height="100%" src="img/daily/wormy.png">',
	'<img alt="Bowing butler offers respect" width="100%" src="img/daily/respect.png">',
	'<img alt="Pokeballs" height="100%" src="img/daily/balls.jpg">',
	'<img alt="Moomin going to bed" height="100%" src="img/daily/bed.jpg">',
	'<img alt="Telescopefish" width="100%" src="img/daily/bewast.jpg">',
	'<img alt="pom pom creatures" height="100%" src="img/daily/whatthe.jpg">',
	'<img alt="Cats on Computer" width="100%" src="img/daily/catcomputer.png">',
	'<img alt="FUNK ENGINE" height="100%" src="img/daily/funkengine.jpg">',
	'<img alt="crab larvae" width="100%" src="img/daily/fuckingthing.jpg">',
	'<img alt="Golden retriever laying on the beach" width="100%" src="img/daily/dogy.jpg">',
	'<img alt="robo mech dolphin" width="100%" src="img/daily/dolphin.png">',
	'<img alt="Cat dumpling" height="100%" src="img/daily/dumpling.png">',
	'<img alt="Italian greyhound in colorful pajamas" height="100%" src="img/daily/fashion.jpg">',
	'<img alt="Fat oposssum" height="100%" src="img/daily/fat.jpg">',
	'<img alt="Gay Sex Mario" height="100%" src="img/daily/gaymario.jpg">',
	'<img alt="Alligator named Big Challenges" height="100%" src="img/daily/bigchallenges.png">',
	'<img alt="Horse in a hole" width="100%" src="img/daily/hescoming.jpg">',
	'<img alt="Moomin collecting herbs under the new moon" height="100%" src="img/daily/hullo.jpg">',
	'<img alt="cat drinking milk" height="100%" src="img/daily/milk.jpg">',
	'<img alt="moomin drunk" width="100%" src="img/daily/moomin.png">',
	'<img alt="Pikachu about to purst" width="100%" src="img/daily/pika.jpg">',
	'<img alt="Gay kermit" height="100%" src="img/daily/kermit.jpg">',
	'<img alt="Cat breads" width="100%" src="img/daily/breads.jpg">',
	'<img alt="Pon de lion" height="100%" src="img/daily/pondelion.png">',
	'<img alt="Cat eating burger" height="100%" src="img/daily/burgin.png">',
	'<img alt="Neil banging out the tunes" height="100%" src="img/daily/neil.jpg">',
	'<img alt="AVGN and Nostalgia Critic Yaoi" width="100%" src="img/daily/yaoi.png">',
	'<img alt="knight in bed" height="100%" src="img/daily/knight.jpg">',
	'<img alt="Drunk gumby" height="100%" src="img/daily/drunkgumby.jpg">',
	'<img alt="Pikachu getting a drink" height="100%" src="img/daily/soda.jpg">',];

document.getElementById("picday").innerHTML = picdays[d-1];