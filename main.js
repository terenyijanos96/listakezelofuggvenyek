import { KUTYALISTA, KUTYAKULCS } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import { rendez } from "./rendezesSzures.js";

window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  rendez(KUTYALISTA, "kor", "asc")
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");

  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujKutya);
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
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}

function ujKutya() {
  const NEV_INPUT_ELEM = document.querySelector("#kneve").value;
  const KOR_INPUT_ELEM = document.querySelector("#kkor").value;
  const FAJTA_INPUT_ELEM = document.querySelector("#kfajta").value;
  const LABA_INPUT_ELEM = document.querySelector("#klaba").value;
  const NEM_INPUT_ELEM = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  const MAGASSAG_INPUT_ELEM = document.querySelector("#mmag").value;

  const KUTYA = {
    nev: NEV_INPUT_ELEM,
    kor: KOR_INPUT_ELEM,
    fajta: FAJTA_INPUT_ELEM,
    lab: LABA_INPUT_ELEM,
    nem: NEM_INPUT_ELEM,
    marmagassag: MAGASSAG_INPUT_ELEM,
  };
  KUTYALISTA.push(KUTYA);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}
