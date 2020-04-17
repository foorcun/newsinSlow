/* buraya javascritp kodlarımız gelecek - google drive boş dosya upload etmiyor die bir yorum bu */


// link to örnek site https://www.newsinslowgerman.com/series/5/season/1/chapter/7/intermediate






var textim = 'Heute ist der Nach wie vor schätzen wir uns sehr glücklich, alle gesund zu sein. Als einen Teil unserer neuen Routine gehen wir momentan jeden Tag eine kleine Runde durch unsere Nachbarschaft spazieren, und entdecken dabei die ersten Anzeichen des Frühlings. Wir erfreuen uns an den Narzissen, die wachsen, oder beobachten Vögel, die Nester bauen und allein für uns zu singen scheinen.'
var uzunMetin = new Metin(textim)



// ready method makes sure the page is loaded so that we can modify the elements of DOM
jQuery(document).ready(function () {

    // id selector => # ile elemen bulmak.
    // bu ( function () tarzdaki funclar => anonymous function
    jQuery("#button1").click(function () {
        alert("jquery works", this.id);



    });

    jQuery("#ppp").popover(function () {
        // alert("jquery on p works");


    });

    $("#text").popover(function () {
        // alert("jquery on p works");


    });
    $("#text2").popover(function () {
        // alert("jquery on p works");


    });

    $("#ekle").click(function () {


        //eklenecek = analiz(textim);

        var metinDetermined = uzunMetin.metinDetermined;
        //console.log(typeof metinDetermined[0])
        var metinCode = uzunMetin.code;
        console.log(metinCode)


        $("#analizSonrasi").append(metinCode);

    })







});










