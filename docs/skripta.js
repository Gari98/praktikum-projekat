function posalji() {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var mejl = document.getElementById("mejl").value;
    var poruka = document.getElementById('poruka').value;
    
    try {
        if(ime =='' || prezime == '' || mejl =='' || poruka == '') throw "Niste popunili sva polja";
    }
    catch(err) {
         document.getElementById('greska').innerHTML = err;
    }
}
function katalog1(){
    var oic = '{ "oprema":"Osnovni paket", "dodatnaoprema":"+6000 na cenu", "cena":"19000" }';
    var myObj = JSON.parse(oic);
    document.getElementById("brosura").innerHTML = "Oprema: " + myObj.oprema;
    document.getElementById("brosura1").innerHTML = "Dodatna oprema: " + myObj.dodatnaoprema;
    document.getElementById("brosura2").innerHTML = "Cena: " + myObj.cena;
}
function katalog2(){
    var oic = '{ "oprema":"Sport paket", "dodatnaoprema":"+9000 na cenu", "cena":"29000" }';
    var myObj = JSON.parse(oic);
    document.getElementById("brosura3").innerHTML = "Oprema: " + myObj.oprema;
    document.getElementById("brosura4").innerHTML = "Dodatna oprema: " + myObj.dodatnaoprema;
    document.getElementById("brosura5").innerHTML = "Cena: " + myObj.cena;
}
function katalog3(){
    var oic = '{ "oprema":"Preformance paket", "dodatnaoprema":"+11000 na cenu", "cena":"39000" }';
    var myObj = JSON.parse(oic);
    document.getElementById("brosura6").innerHTML = "Oprema: " + myObj.oprema;
    document.getElementById("brosura7").innerHTML = "Dodatna oprema: " + myObj.dodatnaoprema;
    document.getElementById("brosura8").innerHTML = "Cena: " + myObj.cena;
}

document.cookie = document.getElementById("ime").value;

function sacuvaj(){
    alert(document.cookie);
}