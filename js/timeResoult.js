document.querySelector(".op1").addEventListener("change", inputPrintColor1);
document.querySelector(".op2").addEventListener("change", inputPrintColor2);
document.querySelector(".op3").addEventListener("change", inputPrintColor3);
document.querySelector(".op4").addEventListener("change", inputPrintColor4);
document.querySelector(".op5").addEventListener("change", inputPrintColor5);
document.querySelector(".op6").addEventListener("change", inputPrintColor6);
document.querySelector(".op7").addEventListener("change", inputPrintColor7);
document.querySelector(".op8").addEventListener("change", inputPrintColor8);
document.querySelector(".op9").addEventListener("change", inputPrintColor9);
document.querySelector(".op10").addEventListener("change", inputPrintColor10);
document.querySelector(".op11").addEventListener("change", inputPrintColor11);
document.querySelector(".op12").addEventListener("change", inputPrintColor12);
document.querySelector(".op13").addEventListener("change", inputPrintColor13);
document.querySelector(".op14").addEventListener("change", inputPrintColor14);
document.querySelector(".op15").addEventListener("change", inputPrintColor15);
document.querySelector(".op16").addEventListener("change", inputPrintColor16);
document.querySelector(".op17").addEventListener("change", inputPrintColor17);
document.querySelector(".op18").addEventListener("change", inputPrintColor18);
document.querySelector(".op19").addEventListener("change", inputPrintColor19);
document.querySelector(".op20").addEventListener("change", inputPrintColor20);

function calculaAHT (min, seg) {

    var timeSeg = 0;
    timeSeg = min*60 + seg;
   
    return timeSeg;
}

function Average(arr) {

    var sum = 0, aver = 0;
    for(var i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
        aver = sum /arr.length;
    }
    return aver;
}

// constructoras para guardar en locar storage

class SaveLS{
    constructor({
      minValue,
      segValue,
      ahtValue,
      colorClass,
    }) {
        this.minValue = minValue;
        this.segValue = segValue;
        this.ahtValue = ahtValue;
        this.colorClass = colorClass;
    }
} 
class SaveLS_IpromD{
    constructor({
      dayValue,
      promValue,
      colorClass,
    }) {
        this.dayValue = dayValue;
        this.promValue = promValue;
        this.colorClass = colorClass;
    }
} 

    
function inputPrintColor1() {
    let classN = "";
    let promClassN = "";
    const m1 = document.getElementById("min1");
    const m1v = Number(m1.value);
    const s1 = document.getElementById("seg1");
    const s1v = Number(s1.value);
    const id1 = document.getElementById("aht1");
    id1.value = calculaAHT(m1v, s1v);
  
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m1v, s1v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);

    if ( prom.value < 480) {
    
        document.querySelector(".rplay1").addEventListener("blur", colorAveG1);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG1() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    } else {
        
        document.querySelector(".rplay1").addEventListener("blur", colorAveR1);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR1() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  

    if ( id1.value < 480) {
        
        document.querySelector(".op1").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba1");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op1").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba1");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    
    const line1 = new SaveLS({
        minValue: m1v, 
        segValue: s1v, 
        ahtValue: id1.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l1', JSON.stringify(line1));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m1v, s1v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}

function inputPrintColor2 () {

    const m2 = document.getElementById("min2");
    const m2v = Number(m2.value);
    const s2 = document.getElementById("seg2");
    const s2v = Number(s2.value);
    const id2 = document.getElementById("aht2");
    id2.value = calculaAHT(m2v, s2v);
   
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m2v, s2v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    
    let classN = "";
    let promClassN = "";
    
    if ( prom.value < 480) {
        
        document.querySelector(".rplay2").addEventListener("blur", colorAveG2);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG2() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    } else {
        
        document.querySelector(".rplay2").addEventListener("blur", colorAveR2);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR2() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id2.value < 480) {
        
        document.querySelector(".op2").addEventListener("blur", colorG2);
        var id2Color = document.querySelector(".prueba2");
        function colorG2() {
            id2Color.classList.remove("goodBadRed");
            id2Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    } else {

        document.querySelector(".op2").addEventListener("blur", colorR2);
        var id2Color = document.querySelector(".prueba2");
        function colorR2() {
            id2Color.classList.remove("goodBadGreen");
            id2Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }
    const line2 = new SaveLS({
        minValue: m2v, 
        segValue: s2v, 
        ahtValue: id2.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l2', JSON.stringify(line2));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m2v, s2v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}

function inputPrintColor3() {

    const m3 = document.getElementById("min3");
    const m3v = Number(m3.value);
    const s3 = document.getElementById("seg3");
    const s3v = Number(s3.value);
    const id3 = document.getElementById("aht3");
    id3.value = calculaAHT(m3v, s3v);

    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m3v, s3v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay3").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay3").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id3.value < 480) {
        
        document.querySelector(".op3").addEventListener("blur", colorG1);
        var id3Color = document.querySelector(".prueba3");
        function colorG1() {
            id3Color.classList.remove("goodBadRed");
            id3Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op3").addEventListener("blur", colorR1);
        var id3Color = document.querySelector(".prueba3");
        function colorR1() {
            id3Color.classList.remove("goodBadGreen");
            id3Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line3 = new SaveLS({
        minValue: m3v, 
        segValue: s3v, 
        ahtValue: id3.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l3', JSON.stringify(line3));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m3v, s3v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor4() {

    const m4 = document.getElementById("min4");
    const m4v = Number(m4.value);
    const s4 = document.getElementById("seg4");
    const s4v = Number(s4.value);
    const id4 = document.getElementById("aht4");
    id4.value = calculaAHT(m4v, s4v);

    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m4v, s4v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay4").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay4").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id4.value < 480) {
        
        document.querySelector(".op4").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba4");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op4").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba4");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line4 = new SaveLS({
        minValue: m4v, 
        segValue: s4v, 
        ahtValue: id4.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l4', JSON.stringify(line4));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m4v, s4v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}

function inputPrintColor5() {

    const m5 = document.getElementById("min5");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg5");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht5");
    id5.value = calculaAHT(m5v, s5v);

    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay5").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay5").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op5").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba5");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op5").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba5");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line5 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l5', JSON.stringify(line5));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor6() {

    const m5 = document.getElementById("min6");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg6");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht6");
    id5.value = calculaAHT(m5v, s5v);
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay6").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay6").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op6").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba6");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op6").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba6");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    } 
    const line6 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l6', JSON.stringify(line6));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
     
function inputPrintColor7() {

    const m5 = document.getElementById("min7");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg7");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht7");
    id5.value = calculaAHT(m5v, s5v);
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay7").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay7").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
        
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op7").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba7");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op7").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba7");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    } 
    const line7 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l7', JSON.stringify(line7));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor8() {

    const m5 = document.getElementById("min8");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg8");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht8");
    id5.value = calculaAHT(m5v, s5v);
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay8").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    } else {
        
        document.querySelector(".rplay8").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op8").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba8");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";

    } else {

        document.querySelector(".op8").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba8");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line8 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l8', JSON.stringify(line8));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor9() {

    const m5 = document.getElementById("min9");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg9");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht9");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay9").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    
    } else {
        
        document.querySelector(".rplay9").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op9").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba9");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";

    } else {

        document.querySelector(".op9").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba9");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";

    } 
    const line9 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l9', JSON.stringify(line9)); 
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor10() {

    const m5 = document.getElementById("min10");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg10");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht10");
    id5.value = calculaAHT(m5v, s5v);
   
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay10").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    
    } else {
        
        document.querySelector(".rplay10").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op10").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba10");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op10").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba10");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line10 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l10', JSON.stringify(line10));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor11() {

    const m5 = document.getElementById("min11");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg11");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht11");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay11").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    
    } else {
        
        document.querySelector(".rplay11").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op11").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba11");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op11").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba11");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line11 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l11', JSON.stringify(line11));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor12() {

    const m5 = document.getElementById("min12");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg12");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht12");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay12").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadRed";
    } else {
        
        document.querySelector(".rplay12").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadGreen";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op12").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba12");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op12").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba12");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line12 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l12', JSON.stringify(line12));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor13() {

    const m5 = document.getElementById("min13");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg13");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht13");
    id5.value = calculaAHT(m5v, s5v);
   
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay13").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    } else {
        
        document.querySelector(".rplay13").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op13").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba13");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op13").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba13");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    } 
    const line13 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l13', JSON.stringify(line13)); 
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor14() {

    const m5 = document.getElementById("min14");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg14");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht14");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay14").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    
    } else {
        
        document.querySelector(".rplay14").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op14").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba14");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op14").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba14");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line14 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l14', JSON.stringify(line14));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor15() {

    const m5 = document.getElementById("min15");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg15");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht15");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay15").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay15").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";


    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op15").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba15");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op15").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba15");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";

    }  
    const line15 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l15', JSON.stringify(line15));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor16() {

    const m5 = document.getElementById("min16");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg16");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht16");
    id5.value = calculaAHT(m5v, s5v);
   
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));

    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay16").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay16").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op16").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba16");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op16").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba16");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line16 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l16', JSON.stringify(line16));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor17() {

    const m5 = document.getElementById("min17");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg17");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht17");
    id5.value = calculaAHT(m5v, s5v);
   
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay17").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay17").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op17").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba17");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op17").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba17");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    } 
    const line17 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l17', JSON.stringify(line17)); 
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor18() {
    
    const m5 = document.getElementById("min18");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg18");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht18");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay18").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay18").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";

    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op18").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba18");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";

    } else {

        document.querySelector(".op18").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba18");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";

    }  
    const line18 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l18', JSON.stringify(line18));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor19() {

    const m5 = document.getElementById("min19");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg19");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht19");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay19").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";

    
    } else {
        
        document.querySelector(".rplay19").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed"; 
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op19").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba19");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op19").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba19");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line19 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l19', JSON.stringify(line19));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));
}
function inputPrintColor20() {

    const m5 = document.getElementById("min20");
    const m5v = Number(m5.value);
    const s5 = document.getElementById("seg20");
    const s5v = Number(s5.value);
    const id5 = document.getElementById("aht20");
    id5.value = calculaAHT(m5v, s5v);
    
    var ahtProm = JSON.parse(localStorage.getItem('promDiario'));
    ahtProm.push(calculaAHT(m5v, s5v));
    localStorage.setItem('promDiario', JSON.stringify(ahtProm));
    var prom = document.getElementById("promD");
    prom.value = Average(ahtProm);
    let classN = "";
    let promClassN = "";

    if ( prom.value < 480) {
        
        document.querySelector(".rplay20").addEventListener("blur", colorAveG3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveG3() {
            id1Ave.classList.remove("goodBadRed");
            id1Ave.classList.add("goodBadGreen");
        }
        promClassN = "goodBadGreen";
    
    } else {
        
        document.querySelector(".rplay20").addEventListener("blur", colorAveR3);
        var id1Ave = document.querySelector(".show_prom");
        function colorAveR3() {
            id1Ave.classList.remove("goodBadGreen");
            id1Ave.classList.add("goodBadRed");
        }
        promClassN = "goodBadRed";
    }  
    if ( id5.value < 480) {
        
        document.querySelector(".op20").addEventListener("blur", colorG1);
        var id1Color = document.querySelector(".prueba20");
        function colorG1() {
            id1Color.classList.remove("goodBadRed");
            id1Color.classList.add("goodBadGreen");
        }
        classN = "goodBadGreen";
    
    } else {

        document.querySelector(".op20").addEventListener("blur", colorR1);
        var id1Color = document.querySelector(".prueba20");
        function colorR1() {
            id1Color.classList.remove("goodBadGreen");
            id1Color.classList.add("goodBadRed");
        }
        classN = "goodBadRed";
    }  
    const line20 = new SaveLS({
        minValue: m5v, 
        segValue: s5v, 
        ahtValue: id5.value, 
        colorClass: classN, 
    });
    const dayDate = document.getElementById("dateID");
    const dateNprom = new SaveLS_IpromD({
        dayValue: dayDate.value,
        promValue: prom.value,
        colorClass: promClassN,
    });
    localStorage.setItem('promdate', JSON.stringify(dateNprom));
    localStorage.setItem('l20', JSON.stringify(line20));
    var sumador = JSON.parse(localStorage.getItem('countLLamadas'));
    sumador.push(calculaAHT(m5v, s5v));
    localStorage.setItem('countLLamadas', JSON.stringify(sumador));

}







    


