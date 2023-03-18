window.addEventListener("load", init);

const KUTYAK = [
    {
        neve:"Dézi",
        fajta:"keverék",
        lab:4,
        marmagassag:52,
        nem:"szuka",
        kor:13
    },
    {
        neve:"Kira",
        fajta:"yorshire terrier",
        lab:4,
        marmagassag:20,
        nem:"szuka",
        kor:13
    }

]
console.log(KUTYAK)
function init(){
    //objektum
    //kuécs-érték párok 
    console.log(KUTYAK[0]);
    console.log(KUTYAK[1]);
    console.log(KUTYAK[0].neve);
    KUTYAK[0].neve = "Béla"
    console.log(KUTYAK[0].neve);
    KUTYAK[0].oltas = "van";
    console.log(KUTYAK[0]);

    //Az összes kulcs bejárása
    for (let index = 0; index < KUTYAK.length; index++) {
        console.log(index, ". kutya **********");
        for (const kulcs in KUTYAK[1]) {
        console.log(kulcs,KUTYAK[1][kulcs]);
    }
        
    }
    
    console.log(KUTYAK)
};