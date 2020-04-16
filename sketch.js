/* buraya javascritp kodlarımız gelecek - google drive boş dosya upload etmiyor die bir yorum bu */


// link to örnek site https://www.newsinslowgerman.com/series/5/season/1/chapter/7/intermediate



var textim = 'Heute ist der Nach wie vor schätzen wir uns sehr glücklich, alle gesund zu sein. Als einen Teil unserer neuen Routine gehen wir momentan jeden Tag eine kleine Runde durch unsere Nachbarschaft spazieren, und entdecken dabei die ersten Anzeichen des Frühlings. Wir erfreuen uns an den Narzissen, die wachsen, oder beobachten Vögel, die Nester bauen und allein für uns zu singen scheinen.'
var kelimelerim = ["je", "suis", "etre"];

kelimelerim = ["Je", "suis", ",", "mais", "tu", "n'est", "pas", "."]


//var jc= '<script type="text/javascript">$("#kelime' + index+'").popover(function () { // alert("jquery on p works"); });</script>';





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

        eklenecek = analiz(textim);



        $("#analizSonrasi").append(eklenecek);

    })







});


function analiz(textim) {

    //alert("asdffdsfs")
    textArrayed = textToArray(textim);
    //console.log(textArrayed);

    eklenecek = arrayToCode(textArrayed)

    return eklenecek;
}


function textToArray(textim) {

    arrayed = textim.split(" ");




    /// buray noktalamaMaamele
    arrayed = noktalamaMaamele(arrayed)



    return arrayed;
}



function noktalamaMaamele(arr) {

    var len = arr.length;   // 1. buildin blok

    // bu virgül için
var virgülArr=[] // 2. buildin blok
    for (let index = 0; index < len; index++) { // 3. buildin blok

        //var n = str.includes(",");

        if (arr[index].includes(",") && arr[index] != ",") {
            arr[index] = arr[index].substring(0, (arr[index].length - 1));

            arr.splice((index + 1), 0, ","); // bu arrayde index + 1 e "," ekler
            //alert(arr[index + 1])
            virgülArr.push(index+1)

        }

    }



 // virgül ekle //// 4. buildin blok
 virgülArr.forEach(element => {
        arr.splice(element, 0, ","); // bu arrayde index + 1 e "," ekler
        //alert(arr[index + 1])
     for (let index = 0; index < virgülArr.length; index++) {
        virgülArr[index] = virgülArr[index] +1
         
     }
        
    });






// bu nokta için
len = arr.length;    


var noktaArr=[]
    for (let index = 0; index < len; index++) {

        //var n = str.includes(".");

        if (arr[index].includes(".") && arr[index] != ".") {
            arr[index] = arr[index].substring(0, (arr[index].length - 1));

           noktaArr.push(index+1)

        }

    }

    // noktaları ekle
    noktaArr.forEach(element => {
        arr.splice(element, 0, "."); // bu arrayde index + 1 e "," ekler
        //alert(arr[index + 1])
     for (let index = 0; index < noktaArr.length; index++) {
        noktaArr[index] = noktaArr[index] +1
         
     }
        
    });

   




    return arr

}



function arrayToCode(kelimelerim) {


    var eklenecek = [];
    for (let index = 0; index < kelimelerim.length; index++) {

        // işlediğmiz kelimenin sonrasında nokta ve virgül yoktur?    
        if (kelimelerim[index + 1] != "," && kelimelerim[index + 1] != ".") {

            //işlediğmiz kelime virgül ya da nokta mı? öyleyse boşluk bırakır pas geçer
            if (kelimelerim[index] == "," || kelimelerim[index] == ".") {
                eklenecek.push(" ");
            } else // işlediğmiz kelime sonrası nokta ve virgül yoktur, ve işlediğmi gerçek kelimedir
            {
                eklenecek.push('<a href="#" id="kelime' + index + '" data-toggle="popover" data-trigger="hover" title="Popover Header" data-content="' + kelimelerim[index] + '">' + kelimelerim[index] + '</a><script type="text/javascript">$("#kelime' + index + '").popover(function () { });</script>');
                eklenecek.push(" ");
            }
        } else {//kelime sonraıs nokta ya da virgül yok.
            // işlediğmi kelime nokta ya virgülse
            if (kelimelerim[index] == "," || kelimelerim[index] == ".") {
                eklenecek.push(" ");
            }
            else {
                eklenecek.push('<a href="#" id="kelime' + index + '" data-toggle="popover" data-trigger="hover" title="Popover Header" data-content="' + kelimelerim[index] + '">' + kelimelerim[index] + '</a><script type="text/javascript">$("#kelime' + index + '").popover(function () { });</script>');
                eklenecek.push(kelimelerim[index + 1]);

            }

        }




    }


    return eklenecek;
}
