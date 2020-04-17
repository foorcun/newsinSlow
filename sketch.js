/* buraya javascritp kodlarımız gelecek - google drive boş dosya upload etmiyor die bir yorum bu */


// link to örnek site https://www.newsinslowgerman.com/series/5/season/1/chapter/7/intermediate


/* local data kelimeler */
var localData = kelimelerim;

//alert(localData[0].French)



var textim = 'Heute ist der Nach wie vor schätzen wir uns sehr glücklich, alle gesund zu sein. Als einen Teil unserer neuen Routine gehen wir momentan jeden Tag eine kleine Runde durch unsere Nachbarschaft spazieren, und entdecken dabei die ersten Anzeichen des Frühlings. Wir erfreuen uns an den Narzissen, die wachsen, oder beobachten Vögel, die Nester bauen und allein für uns zu singen scheinen.'

textim = 'Chaque jour qui passe apporte son lot de nouveau bilans humains élevés et de cas de contaminations sur les cinq continents, la planète étant en grande partie paralysée par la pandémie causée par le coronavirus. Selon un dernier décompte publié par l’AFP, jeudi 16 avril au soir, au moins 140 902 personnes sont mortes et 2 125 041 cas ont été recensés dans 193 pays et territoires. Ce nombre de cas diagnostiqués ne reflète toutefois qu’une fraction du nombre réel de contaminations, un grand nombre de pays ne testant que les cas nécessitant une prise en charge hospitalière.'


var uzunMetin = new Metin(textim)



// ready method makes sure the page is loaded so that we can modify the elements of DOM
jQuery(document).ready(function () {

    uzunMetin.analysis()

 





});










