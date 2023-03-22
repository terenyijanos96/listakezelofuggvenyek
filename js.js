window.addEventListener("load", init);
const KUTYALISTA = [
  { nev: "Bodri", kor: 12, fajta: "foxterrier", lab: 4 },
  { nev: "Kutya", kor: 8, fajta: "kuvasz", lab: 4 },
  { nev: "Vak", kor: 14, fajta: "puli", lab: 4 },
  { nev: "Sovika", kor: 11, fajta: "agár", lab: 4 },
  { nev: "Lédi", kor: 12, fajta: "újfullandi", lab: 4 },
  { nev: "Lessie", kor: 9, fajta: "keverék", lab: 4 },
];
let ARTICLE;
/* const KUTYANEVEK=["Bodri","Kutya","Vak","Sovika","Lédi","Lessie"]
const KUTYAFAJTAK = ["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]
const KUTYAKOROK = [12, 8, 14, 11, 12, 9] */
function init() {
  ARTICLE = document.querySelector("article");
  /* const GOMB = document.createElement('button');
    GOMB.innerText = ('Kutya');
    ARTICLE.appendChild(GOMB); */
  /* GOMB.addEventListener("click", function(){gombNyomas(ARTICLE)}) */
  //let txt = osszeallit();
  let txt2 = osszeallit2();
  //ARTICLE.innerHTML=txt;
  torlesGomb();
  const SUBMIT = document.querySelector('aside button')
  SUBMIT.addEventListener("click", ujKutya)
}

/* function gombNyomas (ARTICLE){
    ARTICLE.innerHTML += KUTYALISTA[2];
} */

/* function osszeallit(){
    let txt = ""
    for (let index = 0; index < KUTYANEVEK.length; index++) {
        txt += `<div id = "${KUTYANEVEK[index]}">
        <p> nev: ${KUTYANEVEK[index]} </p>
        <p> kor: ${KUTYAKOROK[index]} </p>
        <p> fajta: ${KUTYAFAJTAK[index]} </p>
        
        </div>`
        
    }
    console.log(txt);
    return txt;
} */

/* function osszeallit2() {
  let txt2 = "";
  txt2 += `<div class = "container">`;
  for (let index = 0; index < KUTYALISTA.length; index++) {
    /* for (const key in KUTYALISTA) {
            KUTYALISTA[key]
        }
        for (const kutya of KUTYALISTA) {
            
        } */
/*    txt2 += `<div class= "kartya">`;
    for (const kulcs in KUTYALISTA[index]) {
      txt2 += `<p>${kulcs}: ${KUTYALISTA[index][kulcs]}</p>`;
    }
    txt2 += `</div>`;
  }
  txt2 += `</div>`;
  console.log(txt2);
  return txt2;
}  */

function osszeallit2() {
  let txt2 = "";
  txt2 += `<div class = "container">`;
  txt2 += `<table>`;
  for (let index = 0; index < KUTYALISTA.length; index++) {
    /* for (const key in KUTYALISTA) {
              KUTYALISTA[key]
          }
          for (const kutya of KUTYALISTA) {
              
          } */
    txt2 += `<tr>`;
    for (const kulcs in KUTYALISTA[index]) {
      txt2 += `<td>${kulcs}: ${KUTYALISTA[index][kulcs]}</td>`;
    }
    txt2 += `</tr>`;
  }
  txt2 += `</table>`;
  txt2 += `</div>`;
  console.log(txt2);
  ARTICLE.innerHTML = txt2;
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function(){torlesFunkcio(index)});
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  console.log(KUTYALISTA);
  osszeallit2();
  torlesGomb();
}

function ujKutya(){
  const KUTYA = "";
  const ADAT = document.querySelectorAll('input');
  console.log("Vauka")
  for (let index = 0; index < ADAT.length; index++) {
    for (const kulcs in KUTYALISTA) {
      KUTYA += `${kulcs}: ${ADAT[index][kulcs]}`
    }
    
  }
  KUTYALISTA.push(KUTYA);
  console.log(KUTYALISTA)
  osszeallit2();
  torlesGomb();
}
