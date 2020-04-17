class Metin {

    constructor(metin) {
        this.metin = metin;
        this.metinDetermined = this.determinedArray()
        this.code = this.determinedArrayToCode()


    }



    determinedArrayToCode() {
        var eklenecekKod = [];

        for (let index = 0; index < this.metinDetermined.length; index++) {

            if (this.determineType(this.metinDetermined[index]) == "Kelime") {

                eklenecekKod.push('<a href="#" id="kelime' + index + '" data-toggle="popover" data-trigger="hover" title="Popover Header" data-content="' + this.metinDetermined[index].kelime + '">' + this.metinDetermined[index].kelime + '</a><script type="text/javascript">$("#kelime' + index + '").popover(function () { });</script>');
                eklenecekKod.push(" ");


            } else if (this.determineType(this.metinDetermined[index]) == "KelimeWithNoktalama") {

                eklenecekKod.push('<a href="#" id="kelime' + index + '" data-toggle="popover" data-trigger="hover" title="Popover Header" data-content="' + this.metinDetermined[index].kelime + '">' + this.metinDetermined[index].kelime + '</a><script type="text/javascript">$("#kelime' + index + '").popover(function () { });</script>');
                eklenecekKod.push(this.metinDetermined[index].noktalama);
                eklenecekKod.push(" ");

            }

        }

        return eklenecekKod

    }



    // arraydeki kelimeleri classlara classify eder
    determinedArray() {

        var metinArrayed = this.metinToArray()


        for (let index = 0; index < metinArrayed.length; index++) {
            metinArrayed[index] = this.determineWord(metinArrayed[index])

        }

        //console.log(metinArrayed)
        return metinArrayed

    }


    // girdi kelimeyi class classify eder
    determineWord(str) {



        // virgüllü kelime
        if (str.includes(",")) {
            var str = str.substring(0, (str.length - 1));


            var determinedKelime = new KelimeWithNoktalama(str, ",");

        }




        else if (str.includes(".")) {
            var str = str.substring(0, (str.length - 1));

            var determinedKelime = new KelimeWithNoktalama(str, ".");



        }
        else if (!str.includes(",") && !str.includes(".")) {

            var determinedKelime = new Kelime(str);
        }

        return determinedKelime;

    }




    // girdi metini kaba array a convert eder
    metinToArray() {


        var metinArrayed = this.metin.split(" ");


        return metinArrayed

    }



    determineType(object) {

        if (object.constructor.name == "Kelime") {
            var type = "Kelime"


        } else if (object.constructor.name == "KelimeWithNoktalama") {
            var type = "KelimeWithNoktalama"

        }

        return type

    }







}


