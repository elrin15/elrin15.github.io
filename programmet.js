let moneyGebi = document.getElementById("viserAntallKroner")
let comGebi = document.getElementById("viserPrisIngredienser")
let lagerGebi = document.getElementById("viserVareBeholdning")
let prisGebi = document.getElementById("viserGjeldendePris")
let lag = document.getElementById("lageKnapp")
let autoMakeGebi = document.getElementById("upgrade1")
let autoSellGebi = document.getElementById("upgrade2")


let money = parseInt(localStorage.getItem("money")) || 3;
let autoMakeKjopt = localStorage.getItem("autoMakeKjopt") || false
let autoSellKjopt = localStorage.getItem("autoSellKjopt") || false
let com = 3 // com = cost of making 
let lager = parseInt(localStorage.getItem("lager")) || 0;
let pris = parseInt(localStorage.getItem("pris")) || 5;
let multiplier = parseInt(localStorage.getItem("multiplier")) || 1;
let dobbelMultiplierPris = parseInt(localStorage.getItem("dobbelMultiplierPris")) || 2000


localStorage.setItem("money", money);
localStorage.setItem("autoMakeKjopt", autoMakeKjopt)
localStorage.setItem("autoSellKjopt", autoSellKjopt) 
localStorage.setItem("lager", lager);
localStorage.setItem("multiplier" , multiplier);
localStorage.setItem("pris", pris);
localStorage.setItem("dobbelMultiplierPris", dobbelMultiplierPris);


function selg() {
    if (lager > 0){
            lager --
                localStorage.setItem("lager", lager)
                lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager"
                localStorage.getItem("pris")
            money += pris 
                localStorage.setItem( "money", money)
                moneyGebi.textContent = localStorage.getItem("money") + " kr"
        // console.log(localStorage.getItem("money")+ "moenymoney")
        
        // localStorage.setItem('jsLager', jsLager);
        // localStorage.setItem('money', money);
    }
    else {
        lager.textContent = localStorage.getItem("lager") + " vafel på lager"
        money = money 
        localStorage.setItem( "money", money)
        money.textContent =  localStorage.getItem("money") + " kr"
        // localStorage.setItem('jsLager', jsLager);
        // localStorage.setItem('money', money);
    }
}


function pluss() {
    if (pris < 10)
    pris++
        localStorage.setItem("pris", pris)
        prisGebi.textContent = localStorage.getItem("pris") + " kr"
   
}
 
function minus() {
    if (pris > 0)
    pris--
        localStorage.setItem("pris", pris)
        prisGebi.textContent = localStorage.getItem("pris") + " kr"
}
 


// let isClicked = localStorage.getItem("false") || false ; 
let isClicked = false

function lagVaffel() { 
    if (!isClicked && money >= com ){
        lager++
        money -= com;
            moneyGebi.textContent = money + " kr";
            localStorage.setItem("money", money);
            localStorage.setItem("lager", lager)
            moneyGebi.textContent = localStorage.getItem("money") + " kr";
            lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager ";
       
       
    //    localStorage.setItem('money', money);
        isClicked = true;
        setTimeout(function() {
            isClicked = false;
        }, 500);
    }
}

function autoMakeUnlocker(){
    if (money >= 203) {
        autoSellGebi.style.display = "block";
        autoMakeGebi.style.display = "none"
        money -= 203
            localStorage.setItem("money", money)
            moneyGebi.textContent = localStorage.getItem("money") + " kr"
            localStorage.getItem("autoMakeKjopt")
            autoMakeKjopt = "true"
            localStorage.setItem("autoMakeKjopt", autoMakeKjopt)
        setInterval(() => {
            autoMake()
        }, 750);
    }
}

function autoMake() {
    if (localStorage.getItem("autoMakeKjopt") == "true") {
        autoSellGebi.style.display = "block";
        autoMakeGebi.style.display = "none"
        lagVaffel()
}
}

// logikk notater til megselv: når du kjøper autosell, lager du en dobbelmultipler knapp som når du kjøper printer en ny dobbel multiplier knapp, sånn foraltid, 
// du kan velge å lage en multiplier multiplier variabel hvis ud har lyst

// definer en multiplier som manipulerrer prisen i sin egen funksjon


function autoSellUnlocker() {
    if (money >= 503) {
        money -= 503
        localStorage.getItem("autoMakeKjopt")
        autoMakeKjopt = "true"
        localStorage.setItem("autoMakeKjopt", autoMakeKjopt)
        autoSellGebi.style.display = "none";
        // localStorage.setItem('money', money);
        setInterval(() => {
            autoSell()
        }, 500);    
    }
}

function autoSell(){
    if (localStorage.getItem("autoMakeKjopt") == "true") {
        autoSellGebi.style.display = "none";
        lagDobbelMultiplier()
        selg()
}
}


//dmk = dobbelMultiplierKnapp
// ide for å slette tilgiere knapper, sett en button counter som bruker ++ hver gang, og så lager skjekker om det er fler en 1, hvis fler en 1 sletter den 1´´

let oldButton = null
function lagDobbelMultiplier() {
    if (oldButton !== null) {
        oldButton.remove();
    }
    let dmk = document.createElement("button");
        dmk.div = "oppgrader";
        dmk.textContent = "Dobbel penger," + dobbelMultiplierPris + " kr";
        dmk.onclick = dobbelMultiplier;
        dmk.style.width = "400px";
        dmk.style.fontSize = "40px";
        document.body.appendChild(dmk);
    oldButton = dmk;
    console.log(dobbelMultiplierPris)
}




function dobbelMultiplier() {
    if (money >= localStorage.getItem("dobbelMultiplierPris") || lager >= 150) {
        money -= dobbelMultiplierPris 
            localStorage.getItem("pris")
            localStorage.getItem("multiplier")
        multiplier++
        pris *= multiplier
            localStorage.setItem("pris", pris);
            localStorage.setItem("multiplier", multiplier)
            prisGebi = localStorage.getItem("pris")
        dobbelMultiplierPris += dobbelMultiplierPris
            localStorage.setItem("dobbelMultiplierPris", dobbelMultiplierPris)
        lagDobbelMultiplier()
        
}
}

window.onload = function () {
    money = parseInt(localStorage.getItem("money"));
    moneyGebi.textContent = localStorage.getItem("money") + " kr";
    lager = parseInt(localStorage.getItem("lager"))
    pris = parseInt(localStorage.getItem("pris"))
    autoMakeKjopt = localStorage.getItem("autoMakeKjopt")
    lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager ";
    prisGebi.textContent = localStorage.getItem("pris") + " kr"
 };
 
 setInterval(() => {
    autoMakeKjopt = localStorage.getItem("autoMakeKjopt");
    if (autoMakeKjopt == "true") {
        autoMake();
    }
}, 1000);

setInterval(() => {
    autoSellKjopt = localStorage.getItem("autoSellKjopt");
    if (autoSellKjopt == "true") {
        autoSell();
        console.log("meowww")
    }
}, 1000);

