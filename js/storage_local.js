
const ls = "";
if (!localStorage.getItem('countLLamadas') || !localStorage.getItem('promDiario')) {
    localStorage.setItem('countLLamadas', JSON.stringify([]));
    localStorage.setItem('promDiario', JSON.stringify([]));
} else {
    if (!localStorage.getItem('promMensual')) {
        localStorage.setItem('promMensual', ls);
    } else {
        const mondProm = JSON.parse(localStorage.getItem('promMensual'));
        const mond = document.getElementById("averrageMond");
        mond.value = mondProm.value;
        mond.classList.add(mondProm.color);
        mond.disabled = true;
    }
}

if (!localStorage.getItem('objetArray')) {
    localStorage.setItem('objetArray', JSON.stringify([]));

} else {

    const inptsLS = JSON.parse(localStorage.getItem('objetArray'));
    const saveDate = document.getElementById("actual");
    const saveAHT = document.getElementById("this_aht");
    saveDate.value = inptsLS[0].dateValue;
    saveDate.disabled = true;
    saveAHT.value = inptsLS[0].ahtValue;
    saveAHT.disabled = true;

    for (var i = 1; i < inptsLS.length; i++) {
        
        const lista = document.querySelector(".list_input_continer");
        const li = document.createElement("li");
        li.classList.add("continer_dateAHT1");
        li.classList.add("change_class1");
        lista.appendChild(li);

        const inputDate = document.querySelector(".continer_dateAHT1");
        const iDa = document.createElement("input");
        iDa.classList.add("date_acum");
        inputDate.appendChild(iDa);
        iDa.value = inptsLS[i].dateValue;
        iDa.disabled = true;
        iDa.type = "date";

        const inputAHT = document.querySelector(".continer_dateAHT1");
        const iAHT = document.createElement("input");
        iAHT.classList.add("aht_acum");
        inputAHT.appendChild(iAHT);
        iAHT.value = inptsLS[i].ahtValue;
        iAHT.disabled = true;

        li.classList.remove("continer_dateAHT1");
        li.classList.add("continer_dateAHT");
    }
}

if (!localStorage.getItem('l1')) {
    localStorage.setItem('l1', ls);
    localStorage.setItem('l2', ls);
    localStorage.setItem('l3', ls);
    localStorage.setItem('l4', ls);
    localStorage.setItem('l5', ls);
    localStorage.setItem('l6', ls);
    localStorage.setItem('l7', ls);
    localStorage.setItem('l8', ls);
    localStorage.setItem('l9', ls);
    localStorage.setItem('l10', ls);
    localStorage.setItem('l11', ls);
    localStorage.setItem('l12', ls);
    localStorage.setItem('l13', ls);
    localStorage.setItem('l14', ls);
    localStorage.setItem('l15', ls);
    localStorage.setItem('l16', ls);
    localStorage.setItem('l17', ls);
    localStorage.setItem('l18', ls);
    localStorage.setItem('l19', ls);
    localStorage.setItem('l20', ls);
    localStorage.setItem('promdate', ls);

} else {
    const dateProm = JSON.parse(localStorage.getItem('promdate'));
    const date = document.getElementById("dateID");
    const prom = document.getElementById("promD");
    date.value = dateProm.dayValue;
    prom.value = dateProm.promValue;
    prom.classList.add(dateProm.colorClass);

    const hor1 = JSON.parse(localStorage.getItem('l1'));
    const m1ls = document.getElementById("min1");
    m1ls.value = hor1.minValue;
    const s1ls = document.getElementById("seg1");
    s1ls.value = hor1.segValue;
    const aht1ls = document.getElementById("aht1");
    aht1ls.value = hor1.ahtValue;
    aht1ls.classList.add(hor1.colorClass);

    const hor2 = JSON.parse(localStorage.getItem('l2'));
    const m2ls = document.getElementById("min2");
    m2ls.value = hor2.minValue;
    const s2ls = document.getElementById("seg2");
    s2ls.value = hor2.segValue;
    const aht2ls = document.getElementById("aht2");
    aht2ls.value = hor2.ahtValue;
    aht2ls.classList.add(hor2.colorClass);

    const hor3 = JSON.parse(localStorage.getItem('l3'));
    const m3ls = document.getElementById("min3");
    m3ls.value = hor3.minValue;
    const s3ls = document.getElementById("seg3");
    s3ls.value = hor3.segValue;
    const aht3ls = document.getElementById("aht3");
    aht3ls.value = hor3.ahtValue;
    aht3ls.classList.add(hor3.colorClass);

    const hor4 = JSON.parse(localStorage.getItem('l4'));
    const m4ls = document.getElementById("min4");
    m4ls.value = hor4.minValue;
    const s4ls = document.getElementById("seg4");
    s4ls.value = hor4.segValue;
    const aht4ls = document.getElementById("aht4");
    aht4ls.value = hor4.ahtValue;
    aht4ls.classList.add(hor4.colorClass);

    const hor5 = JSON.parse(localStorage.getItem('l5'));
    const m5ls = document.getElementById("min5");
    m5ls.value = hor5.minValue;
    const s5ls = document.getElementById("seg5");
    s5ls.value = hor5.segValue;
    const aht5ls = document.getElementById("aht5");
    aht5ls.value = hor5.ahtValue;
    aht5ls.classList.add(hor5.colorClass);

    const hor6 = JSON.parse(localStorage.getItem('l6'));
    const m6ls = document.getElementById("min6");
    m6ls.value = hor6.minValue;
    const s6ls = document.getElementById("seg6");
    s6ls.value = hor6.segValue;
    const aht6ls = document.getElementById("aht6");
    aht6ls.value = hor6.ahtValue;
    aht6ls.classList.add(hor6.colorClass);

    const hor7 = JSON.parse(localStorage.getItem('l7'));
    const m7ls = document.getElementById("min7");
    m7ls.value = hor7.minValue;
    const s7ls = document.getElementById("seg7");
    s7ls.value = hor7.segValue;
    const aht7ls = document.getElementById("aht7");
    aht7ls.value = hor7.ahtValue;
    aht7ls.classList.add(hor7.colorClass);

    const hor8 = JSON.parse(localStorage.getItem('l8'));
    const m8ls = document.getElementById("min8");
    m8ls.value = hor8.minValue;
    const s8ls = document.getElementById("seg8");
    s8ls.value = hor8.segValue;
    const aht8ls = document.getElementById("aht8");
    aht8ls.value = hor8.ahtValue;
    aht8ls.classList.add(hor8.colorClass);

    const hor9 = JSON.parse(localStorage.getItem('l9'));
    const m9ls = document.getElementById("min9");
    m9ls.value = hor9.minValue;
    const s9ls = document.getElementById("seg9");
    s9ls.value = hor9.segValue;
    const aht9ls = document.getElementById("aht9");
    aht9ls.value = hor9.ahtValue;
    aht9ls.classList.add(hor9.colorClass);

    const hor10 = JSON.parse(localStorage.getItem('l10'));
    const m10ls = document.getElementById("min10");
    m10ls.value = hor10.minValue;
    const s10ls = document.getElementById("seg10");
    s10ls.value = hor10.segValue;
    const aht10ls = document.getElementById("aht10");
    aht10ls.value = hor10.ahtValue;
    aht10ls.classList.add(hor10.colorClass);

    const hor11 = JSON.parse(localStorage.getItem('l11'));
    const m11ls = document.getElementById("min11");
    m11ls.value = hor11.minValue;
    const s11ls = document.getElementById("seg11");
    s11ls.value = hor11.segValue;
    const aht11ls = document.getElementById("aht11");
    aht11ls.value = hor11.ahtValue;
    aht11ls.classList.add(hor11.colorClass);

    const hor12 = JSON.parse(localStorage.getItem('l12'));
    const m12ls = document.getElementById("min12");
    m12ls.value = hor12.minValue;
    const s12ls = document.getElementById("seg12");
    s12ls.value = hor12.segValue;
    const aht12ls = document.getElementById("aht12");
    aht12ls.value = hor12.ahtValue;
    aht12ls.classList.add(hor12.colorClass);

    const hor13 = JSON.parse(localStorage.getItem('l13'));
    const m13ls = document.getElementById("min13");
    m13ls.value = hor13.minValue;
    const s13ls = document.getElementById("seg13");
    s13ls.value = hor13.segValue;
    const aht13ls = document.getElementById("aht13");
    aht13ls.value = hor13.ahtValue;
    aht13ls.classList.add(hor13.colorClass);

    const hor14 = JSON.parse(localStorage.getItem('l14'));
    const m14ls = document.getElementById("min14");
    m14ls.value = hor14.minValue;
    const s14ls = document.getElementById("seg14");
    s14ls.value = hor14.segValue;
    const aht14ls = document.getElementById("aht14");
    aht14ls.value = hor14.ahtValue;
    aht14ls.classList.add(hor14.colorClass);

    const hor15 = JSON.parse(localStorage.getItem('l15'));
    const m15ls = document.getElementById("min15");
    m15ls.value = hor15.minValue;
    const s15ls = document.getElementById("seg15");
    s15ls.value = hor15.segValue;
    const aht15ls = document.getElementById("aht15");
    aht15ls.value = hor15.ahtValue;
    aht15ls.classList.add(hor15.colorClass);

    const hor16 = JSON.parse(localStorage.getItem('l16'));
    const m16ls = document.getElementById("min16");
    m16ls.value = hor16.minValue;
    const s16ls = document.getElementById("seg16");
    s16ls.value = hor16.segValue;
    const aht16ls = document.getElementById("aht16");
    aht16ls.value = hor16.ahtValue;
    aht16ls.classList.add(hor16.colorClass);

    const hor17 = JSON.parse(localStorage.getItem('l17'));
    const m17ls = document.getElementById("min17");
    m17ls.value = hor17.minValue;
    const s17ls = document.getElementById("seg17");
    s17ls.value = hor17.segValue;
    const aht17ls = document.getElementById("aht17");
    aht17ls.value = hor17.ahtValue;
    aht17ls.classList.add(hor17.colorClass);

    const hor18 = JSON.parse(localStorage.getItem('l18'));
    const m18ls = document.getElementById("min18");
    m18ls.value = hor18.minValue;
    const s18ls = document.getElementById("seg18");
    s18ls.value = hor18.segValue;
    const aht18ls = document.getElementById("aht18");
    aht18ls.value = hor18.ahtValue;
    aht18ls.classList.add(hor18.colorClass);

    const hor19 = JSON.parse(localStorage.getItem('l19'));
    const m19ls = document.getElementById("min19");
    m19ls.value = hor19.minValue;
    const s19ls = document.getElementById("seg19");
    s19ls.value = hor19.segValue;
    const aht19ls = document.getElementById("aht19");
    aht19ls.value = hor19.ahtValue;
    aht19ls.classList.add(hor19.colorClass);

    const hor20 = JSON.parse(localStorage.getItem('l20'));
    const m20ls = document.getElementById("min20");
    m20ls.value = hor20.minValue;
    const s20ls = document.getElementById("seg20");
    s20ls.value = hor20.segValue;
    const aht20ls = document.getElementById("aht20");
    aht20ls.value = hor20.ahtValue;
    aht20ls.classList.add(hor20.colorClass);
}



//////////////////////////////////////
