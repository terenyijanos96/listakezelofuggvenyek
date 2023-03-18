window.addEventListener("load", init);
const KUTYALISTA=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]

function init() {
    const ARTICLE = document.querySelector("article");
    const GOMB = document.createElement('button');
    GOMB.innerText = ('Kutya');
    ARTICLE.appendChild(GOMB);
    GOMB.addEventListener("click", function(){gombNyomas(ARTICLE)})
};

function gombNyomas (ARTICLE){
    ARTICLE.innerHTML += KUTYALISTA[2];
}

