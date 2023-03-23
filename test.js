
const results = document.querySelector('.results');

function Jeu(titre, console, annee, description){
    this.titre = titre,
    this.console = console,
    this.annee = annee,
    this.description = description
    }
    let Mario1 = new Jeu("arcade","nes",1983, "description1");
    let Mario2 = new Jeu("mario is missing","super nintendo",1993,"description2");
    let Mario3 = new Jeu("course à la fortune","nintendo wii",2012,"description3");
    let Mario4 = new Jeu("mario paint","super nintendo",1992,"description4");
    let Mario5 = new Jeu("mario’s picross","game boy",1995,"description5");
    let Mario6 = new Jeu("super mario RPG","super nintendo",1996,"description6");
    let Mario7 = new Jeu("dancing stage","game cube",2005,"description7");
    let Mario8 = new Jeu("Game and Watch Gallery ","Game Boy",1997,"description8");
    let Mario9 = new Jeu("Yoshi’s Safari","Super Nintendo",1993,"description9");
    let Mario10 = new Jeu("Hotel Mario","Philips CD-I",1994,"description10");
    
    let myCollection = new Object();
        myCollection = { ...{Mario1}, ...{Mario2}, ...{Mario3}, ...{Mario4},...{Mario5},...{Mario6}, ...{Mario7}, ...{Mario8}, ...{Mario9},...{Mario10}}

results.innerHTML = Object.values(myCollection).map( jeu =>`
    <div class="card">
        <h2>Titre : ${jeu.titre}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.annee}</h4>
        <button onclick="clickjeu('${jeu.titre}','${jeu.description}')">Clique ici!</button>
    </div>
`).join("");

const popupjeu = document.querySelector('#popup');

function clickjeu(titre, description){
    popupjeu.innerHTML = `<h1>${titre}</h1>
                            <p>${description}</p>`;
    popupjeu.style.display ="block";
}

document.getElementById("popup").onclick =function(){
    popupjeu.style.display ="none";
}
