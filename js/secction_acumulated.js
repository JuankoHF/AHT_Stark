document.querySelector(".button_next").addEventListener("click", NewDay);
document.querySelector(".next_mond").addEventListener("click", NewMond);
//agregar valores a input aht mensual 

function AverageMond(arr) {

    var sum = 0, average = 0;
    for(var i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
        average = sum /arr.length;
    }
    return average;
}
const defauultClin = "";

function lsMensual(value, color) {
    this.value = value;
    this.color = color;
};
class SaveLS_DateAHT{
    constructor({
      dateValue,
      ahtValue,
    }) {
        this.dateValue = dateValue;
        this.ahtValue = ahtValue;
    }
} 

//agregamos elementos li a ol 

function NewDay() {

    const lista = document.querySelector(".list_input_continer");
    const li = document.createElement("li");
    li.classList.add("continer_dateAHT1");
    li.classList.add("change_class1");
    lista.appendChild(li);
    
    const inputDate = document.querySelector(".continer_dateAHT1");
    const iDa = document.createElement("input");
    iDa.classList.add("date_acum");
    inputDate.appendChild(iDa);
    
    const inputAHT = document.querySelector(".continer_dateAHT1");
    const iAHT = document.createElement("input");
    iAHT.classList.add("aht_acum");
    inputAHT.appendChild(iAHT);
    
    //creando input automaticamente. 
    li.classList.remove("continer_dateAHT1");
    li.classList.add("continer_dateAHT");

    const saveAHT = document.getElementById("this_aht");
    const yesterday = document.getElementById("promD");
    saveAHT.value = Number(yesterday.value);
   
    //AHT MENSUAL
    var ahtPromMond = JSON.parse(localStorage.getItem('countLLamadas'));
    var promMond = document.getElementById("averrageMond");
    //promMond.value = AverageMond(ahtPromMond);
    promMond.disabled = true;
    promMond.value = AverageMond(ahtPromMond);
   
    const vMond =  document.querySelector(".show_mond")
    let classColor = ""
    if(promMond.value < 480) {
        vMond.classList.remove("goodBadRed");
        vMond.classList.add("goodBadGreen");
        classColor = "goodBadGreen";
    } else {
        vMond.classList.remove("goodBadGreen");
        vMond.classList.add("goodBadRed");
        classColor = "goodBadRed";
    }

    const promMes = new lsMensual(promMond.value, classColor);
    localStorage.setItem('promMensual', JSON.stringify(promMes));

    const saveDate = document.getElementById("actual");
    const previusDate = document.getElementById("dateID");
    saveDate.value = previusDate.value;

    //localStorage de la parte automatica 
    const inputINlis = JSON.parse(localStorage.getItem('objetArray'));
    const objetInputs = new SaveLS_DateAHT ({
        dateValue: saveDate.value,
        ahtValue: saveAHT.value,
    });
    inputINlis.push(objetInputs);
    localStorage.setItem('objetArray', JSON.stringify(inputINlis));

    //agregando valores input AHt
    const v1 = document.querySelector(".aht_acum");
    const vSel = document.querySelector(".select") || document.querySelector(".select1");

    vSel.id = "otroId";
     
    const deleteClass = document.getElementById("otroId");
    const dC = deleteClass.classList.contains("select");
    
    if(dC == true){

        v1.classList.remove("select");
        iAHT.classList.add("select1");  
        iAHT.setAttribute('id', 'this_aht');

    } else {
        
        iAHT.classList.add("select");
        v1.classList.remove("select1");  
        iAHT.setAttribute('id', 'this_aht');
    }

    vSel.id = "otroIDmas";
    vSel.classList.replace("select", "otraClase");
    vSel.classList.replace("select1", "otraClasemas");
    vSel.disabled = true;

    //agregando valores input Date
    const D1 = document.querySelector(".date_acum");
    const vDat = document.querySelector(".this_date") || document.querySelector(".this_date1");

    vDat.id = "nuevoId";
    
    const deleteDatClass = document.getElementById("nuevoId");
    const dDC = deleteDatClass.classList.contains("this_date");
    
    if(dDC == true){
        
        D1.classList.remove("this_date");
        iDa.classList.add("this_date1");  
        iDa.setAttribute('id', 'actual');

    } else {
  
        iDa.classList.add("this_date");
        D1.classList.remove("this_date1");  
        iDa.setAttribute('id', 'actual');
    }

    vDat.id = "otroIDdate";
    vDat.classList.replace("this_date", "otraDate");
    vDat.classList.replace("this_date1", "otraDatemas");
    vDat.type = "date";
    vDat.disabled = true;

    //borrando valores de los input diarios
    
    const varDelmin1 = document.getElementById("min1");
    varDelmin1.value = "";
    const varDelmin2 = document.getElementById("min2");
    varDelmin2.value = "";
    const varDelmin3 = document.getElementById("min3");
    varDelmin3.value = "";
    const varDelmin4 = document.getElementById("min4");
    varDelmin4.value = "";
    const varDelmin5 = document.getElementById("min5");
    varDelmin5.value = "";
    const varDelmin6 = document.getElementById("min6");
    varDelmin6.value = "";
    const varDelmin7 = document.getElementById("min7");
    varDelmin7.value = "";
    const varDelmin8 = document.getElementById("min8");
    varDelmin8.value = "";
    const varDelmin9 = document.getElementById("min9");
    varDelmin9.value = "";
    const varDelmin10 = document.getElementById("min10");
    varDelmin10.value = "";
    const varDelmin11 = document.getElementById("min11");
    varDelmin11.value = "";
    const varDelmin12 = document.getElementById("min12");
    varDelmin12.value = "";
    const varDelmin13 = document.getElementById("min13");
    varDelmin13.value = "";
    const varDelmin14 = document.getElementById("min14");
    varDelmin14.value = "";
    const varDelmin15 = document.getElementById("min15");
    varDelmin15.value = "";
    const varDelmin16 = document.getElementById("min16");
    varDelmin16.value = "";
    const varDelmin17 = document.getElementById("min17");
    varDelmin17.value = "";
    const varDelmin18 = document.getElementById("min18");
    varDelmin18.value = "";
    const varDelmin19 = document.getElementById("min19");
    varDelmin19.value = "";
    const varDelmin20 = document.getElementById("min20");
    varDelmin20.value = "";

    const varDelseg1 = document.getElementById("seg1");
    varDelseg1.value = "";
    const varDelseg2 = document.getElementById("seg2");
    varDelseg2.value = "";
    const varDelseg3 = document.getElementById("seg3");
    varDelseg3.value = "";
    const varDelseg4 = document.getElementById("seg4");
    varDelseg4.value = "";
    const varDelseg5 = document.getElementById("seg5");
    varDelseg5.value = "";
    const varDelseg6 = document.getElementById("seg6");
    varDelseg6.value = "";
    const varDelseg7 = document.getElementById("seg7");
    varDelseg7.value = "";
    const varDelseg8 = document.getElementById("seg8");
    varDelseg8.value = "";
    const varDelseg9 = document.getElementById("seg9");
    varDelseg9.value = "";
    const varDelseg10 = document.getElementById("seg10");
    varDelseg10.value = "";
    const varDelseg11 = document.getElementById("seg11");
    varDelseg11.value = "";
    const varDelseg12 = document.getElementById("seg12");
    varDelseg12.value = "";
    const varDelseg13 = document.getElementById("seg13");
    varDelseg13.value = "";
    const varDelseg14 = document.getElementById("seg14");
    varDelseg14.value = "";
    const varDelseg15 = document.getElementById("seg15");
    varDelseg15.value = "";
    const varDelseg16 = document.getElementById("seg16");
    varDelseg16.value = "";
    const varDelseg17 = document.getElementById("seg17");
    varDelseg17.value = "";
    const varDelseg18 = document.getElementById("seg18");
    varDelseg18.value = "";
    const varDelseg19 = document.getElementById("seg19");
    varDelseg19.value = "";
    const varDelseg20 = document.getElementById("seg20");
    varDelseg20.value = "";

    const varDelaht1 = document.getElementById("aht1");
    varDelaht1.value = "";
    varDelaht1.classList.remove("goodBadGreen");
    varDelaht1.classList.remove("goodBadRed");
    const varDelaht2 = document.getElementById("aht2");
    varDelaht2.value = "";
    varDelaht2.classList.remove("goodBadGreen");
    varDelaht2.classList.remove("goodBadRed");
    const varDelaht3 = document.getElementById("aht3");
    varDelaht3.value = "";
    varDelaht3.classList.remove("goodBadGreen");
    varDelaht3.classList.remove("goodBadRed");
    const varDelaht4 = document.getElementById("aht4");
    varDelaht4.value = "";
    varDelaht4.classList.remove("goodBadGreen");
    varDelaht4.classList.remove("goodBadRed");
    const varDelaht5 = document.getElementById("aht5");
    varDelaht5.value = "";
    varDelaht5.classList.remove("goodBadGreen");
    varDelaht5.classList.remove("goodBadRed");
    const varDelaht6 = document.getElementById("aht6");
    varDelaht6.value = "";
    varDelaht6.classList.remove("goodBadGreen");
    varDelaht6.classList.remove("goodBadRed");
    const varDelaht7 = document.getElementById("aht7");
    varDelaht7.value = "";
    varDelaht7.classList.remove("goodBadGreen");
    varDelaht7.classList.remove("goodBadRed");
    const varDelaht8 = document.getElementById("aht8");
    varDelaht8.value = "";
    varDelaht8.classList.remove("goodBadGreen");
    varDelaht8.classList.remove("goodBadRed");
    const varDelaht9 = document.getElementById("aht9");
    varDelaht9.value = "";
    varDelaht9.classList.remove("goodBadGreen");
    varDelaht9.classList.remove("goodBadRed");
    const varDelaht10 = document.getElementById("aht10");
    varDelaht10.value = "";
    varDelaht10.classList.remove("goodBadGreen");
    varDelaht10.classList.remove("goodBadRed");
    const varDelaht11 = document.getElementById("aht11");
    varDelaht11.value = "";
    varDelaht11.classList.remove("goodBadGreen");
    varDelaht11.classList.remove("goodBadRed");
    const varDelaht12 = document.getElementById("aht12");
    varDelaht12.value = "";
    varDelaht12.classList.remove("goodBadGreen");
    varDelaht12.classList.remove("goodBadRed");
    const varDelaht13 = document.getElementById("aht13");
    varDelaht13.value = "";
    varDelaht13.classList.remove("goodBadGreen");
    varDelaht13.classList.remove("goodBadRed");
    const varDelaht14 = document.getElementById("aht14");
    varDelaht14.value = "";
    varDelaht14.classList.remove("goodBadGreen");
    varDelaht14.classList.remove("goodBadRed");
    const varDelaht15 = document.getElementById("aht15");
    varDelaht15.value = "";
    varDelaht15.classList.remove("goodBadGreen");
    varDelaht15.classList.remove("goodBadRed");
    const varDelaht16 = document.getElementById("aht16");
    varDelaht16.value = "";
    varDelaht16.classList.remove("goodBadGreen");
    varDelaht16.classList.remove("goodBadRed");
    const varDelaht17 = document.getElementById("aht17");
    varDelaht17.value = "";
    varDelaht17.classList.remove("goodBadGreen");
    varDelaht17.classList.remove("goodBadRed");
    const varDelaht18 = document.getElementById("aht18");
    varDelaht18.value = "";
    varDelaht18.classList.remove("goodBadGreen");
    varDelaht18.classList.remove("goodBadRed");
    const varDelaht19 = document.getElementById("aht19");
    varDelaht19.value = "";
    varDelaht19.classList.remove("goodBadGreen");
    varDelaht19.classList.remove("goodBadRed");
    const varDelaht20 = document.getElementById("aht20");
    varDelaht20.value = "";
    varDelaht20.classList.remove("goodBadGreen");
    varDelaht20.classList.remove("goodBadRed");

    const varpromD = document.getElementById("promD");
    varpromD.value = "";
    varpromD.classList.remove("goodBadGreen");
    varpromD.classList.remove("goodBadRed");

    localStorage.setItem('promDiario', JSON.stringify([]));
    
    localStorage.setItem('promdate', defauultClin);
    localStorage.setItem('l1', defauultClin);
    localStorage.setItem('l2', defauultClin);
    localStorage.setItem('l3', defauultClin);
    localStorage.setItem('l4', defauultClin);
    localStorage.setItem('l5', defauultClin);
    localStorage.setItem('l6', defauultClin);
    localStorage.setItem('l7', defauultClin);
    localStorage.setItem('l8', defauultClin);
    localStorage.setItem('l9', defauultClin);
    localStorage.setItem('l10', defauultClin);
    localStorage.setItem('l11', defauultClin);
    localStorage.setItem('l12', defauultClin);
    localStorage.setItem('l13', defauultClin);
    localStorage.setItem('l14', defauultClin);
    localStorage.setItem('l15', defauultClin);
    localStorage.setItem('l16', defauultClin);
    localStorage.setItem('l17', defauultClin);
    localStorage.setItem('l18', defauultClin);
    localStorage.setItem('l19', defauultClin);
    localStorage.setItem('l20', defauultClin);
}   

function NewMond() {
    localStorage.clear();
    location.reload();
    
}



