window.addEventListener("load", init);
const KUTYALISTA = [
  {
    nev: "Bodri",
    kor: 12,
    fajta: "foxterrier",
    lab: 4,
    nem: "kan",
    marmagasság: 35,
  },
  {
    nev: "Kutya",
    kor: 8,
    fajta: "kuvasz",
    lab: 4,
    nem: "szuka",
    marmagasság: 70,
  },
  { nev: "Vak", kor: 14, fajta: "puli", lab: 4, nem: "kan", marmagasság: 40 },
  {
    nev: "Sovika",
    kor: 11,
    fajta: "agár",
    lab: 4,
    nem: "kan",
    marmagasság: 65,
  },
  {
    nev: "Lédi",
    kor: 12,
    fajta: "újfundlandi",
    lab: 4,
    nem: "kan",
    marmagasság: 70,
  },
  {
    nev: "Lessie",
    kor: 9,
    fajta: "keverék",
    lab: 4,
    nem: "szuka",
    marmagasság: 50,
  },
];
let ARTICLE;
let kartyak;
let tablazat;
/* const KUTYANEVEK=["Bodri","Kutya","Vak","Sovika","Lédi","Lessie"]
const KUTYAFAJTAK = ["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]
const KUTYAKOROK = [12, 8, 14, 11, 12, 9] */
function init() {
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  /* const GOMB = document.createElement('button');
    GOMB.innerText = ('Kutya');
    ARTICLE.appendChild(GOMB); */
  /* GOMB.addEventListener("click", function(){gombNyomas(ARTICLE)}) */
  osszeallit();
  osszeallit2();
  torlesGomb();
  const SUBMIT = document.querySelector("aside button");
  SUBMIT.addEventListener("click", ujKutya);
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

function osszeallit() {
  let txt = "";
  txt += `<div class = "container">`;
  for (let index = 0; index < KUTYALISTA.length; index++) {
    for (const key in KUTYALISTA) {
      KUTYALISTA[key];
    }
    for (const kutya of KUTYALISTA) {
    }
    txt += `<div class= "kartya">`;
    txt += `<h3>Kutya adatai</h3>`;
    for (const kulcs in KUTYALISTA[index]) {
      txt += `<p>${kulcs}: ${KUTYALISTA[index][kulcs]}</p>`;
    }
    txt += `</div>`;
  }
  txt += `</div>`;
  kartyak.innerHTML = txt;
}

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
  tablazat.innerHTML = txt2;
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  osszeallit2();
  torlesGomb();
}

function ujKutya() {
  let Kutya = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  const ADAT = document.querySelectorAll("input");
  console.log("Vauka");
  index = 0;
  for (const kulcs in KUTYALISTA[index]) {
    if (ADAT[index].id == "szuka" && (szuka.checked = true)) {
      console.log("szuka");
      Kutya[kulcs] = "szuka";
      index++;
    } else if (ADAT[index].id == "kan" && (kan.checked = true)) {
      console.log("kan");
      Kutya[kulcs] = "kan";
    } else {
      Kutya[kulcs] = `${ADAT[index].value}`;
    }
    index++;
  }
  KUTYALISTA.push(Kutya);
  console.log(KUTYALISTA);
  osszeallit2();
  torlesGomb();
}
