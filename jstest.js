//#1 ---------------------------------------------
console.log ("#1------------------------");

function byttOm(text) {
    const lengde = text.length;
    const erGjevn = length % 2 === 0;
    
    const midtFinner = erGjevn ? lengde / 2 : (lengde - 1) / 2;
    
    const forsteDel = text.slice(0, midtFinner);
    const andreDel = text.slice(midtFinner);
    
    return andreDel + forsteDel;
}


console.log(byttOm("Skibidi Toilet is awesome")); 
console.log(byttOm("Jeg er en sigma"));  
console.log(byttOm("GYATTRIZZ"));  

//#2 ---------------------------------------------
console.log ("#2------------------------");

function storEllerLiten (text, upperCase) {
    if (upperCase){
        return text.toUpperCase();
    }
    else {
        return text.toLowerCase();
    }
}
console.log(storEllerLiten("Skibidi toilet", true));
console.log(storEllerLiten("Skibidi toilet", false));

//#3 ---------------------------------------------
console.log ("#3------------------------");

function skibididag(dag) {
    let dagFormat = dag.toLowerCase();

    switch (dagFormat){
        case "mandag":
        console.log("En slitsom dag");
        break;
     
        case "tirsdag":
        console.log("Du er bare to dager inn, lykke til");
        break;

        case "onsdag":
        console.log("Halvveis! Dette klarer du");
        break;
     
        case "torsdag":
        console.log("Fy faen, nå nærmer det seg");
        break;
       
        case "fredag":
        console.log("DET ER FREDAG! Pulings, Drikkings, Hele skaiten!");
        break;

        case "lørdag":
        console.log("PARTYET EKKE FERDIG, GÅ BERSERK");
        break;
     
        case "søndag":
        console.log("Nå må du kulen kjakan, ikke gjør no dumt nå");
        break;
    }
} 

skibididag("MaNDag");
skibididag("FREdag");
skibididag("tirsdag");
skibididag("sønDAG");
skibididag("toRSdag");

//#4 ---------------------------------------------
console.log ("#4------------------------");

function sammeBokstav (text){

    let trimDetNed = text.trim().toLowerCase();

return trimDetNed [0] === trimDetNed [trimDetNed.length - 1];
}

console.log (sammeBokstav ("Skibidi"));

//#5 ---------------------------------------------
console.log ("#5------------------------");

//#6 ---------------------------------------------
console.log ("#6------------------------");
function slaaSammenForsteOgSiste(words) {

    const forsteOrd = words[0];
    const sisteOrd = words[words.length - 1];
    
    return forsteOrd + sisteOrd;
}

console.log(slaaSammenForsteOgSiste(["What", "The", "Sigma", "Is", "Happening"])); 
console.log(slaaSammenForsteOgSiste(["Bæsj","er","Ikke","Godt"])); 


//#7 ---------------------------------------------
console.log ("#7------------------------");
function sammenlignSetninger(text1, text2){
    const forsteSetning = text1.toLowerCase();
    const andreSetning = text2.toLowerCase();

    if (forsteSetning === andreSetning){
    return "De er like"; 
    } else {
    return "De er ulike";
    }
}
console.log(sammenlignSetninger("Skibidi Sigma","SKIBIDI sigma"));
console.log(sammenlignSetninger("Pepsi er godt","Pepsi suger balle"));

//#8 ---------------------------------------------
console.log ("#8------------------------");
function finnerJavaScript(text) {
    const lowerCaseText = text.toLowerCase();
    return lowerCaseText.indexOf("javascript") !== -1;
}

console.log(finnerJavaScript("Tenk, java er lik script på et vis...")); 
console.log(finnerJavaScript("Har du sett på JavaScript koden jeg sendte til deg? Den er ganske sigma.")); 

//#9 ---------------------------------------------
console.log ("#9------------------------");

function aldersjekk (num) {

    if (num < 13) {
        return "Barn";

    } else if (num >= 13 && num <=19) {
        return "Tenåring";
    } else if (num >= 20 && num <=64) {
        return "Voksen";
    } else if (num >=65){
        return "Pensjonist"
    } else {
        return "Galt Input";
    } 
}

console.log(aldersjekk (15));
console.log(aldersjekk (35));
console.log(aldersjekk (70));
console.log(aldersjekk (5));
//#10 ---------------------------------------------
console.log ("#10------------------------");

function sjekkVokal(bokstav) {
    
    const lowerCaseLetter = bokstav.toLowerCase();
    
    const vokaler = "aeiou";
    
    if (vokaler.includes(lowerCaseLetter)) {
        return "Vokal";
    } else {
        return "Konsonant";
    }
}

console.log(sjekkVokal("A")); 
console.log(sjekkVokal("b")); 

//#11 ---------------------------------------------
console.log ("#11------------------------");
function getSeason(maaned) {
    const lowerCaseMaaned = maaned.toLowerCase();

    switch (lowerCaseMaaned) {
        case "desember":
        case "januar":
        case "februar":
            return "Vinter";
        case "mars":
        case "april":
        case "mai":
            return "Vår";
        case "juni":
        case "juli":
        case "august":
            return "Sommer";
        case "september":
        case "oktober":
        case "november":
            return "Høst";
        default:
            return "Ugyldig måned"; 
    }
}
console.log(getSeason("Desember"));
console.log(getSeason("April"));
console.log(getSeason("Juli"));
console.log(getSeason("Oktober"));

//#12 ---------------------------------------------
console.log ("#12------------------------");
