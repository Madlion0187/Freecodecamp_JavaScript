// Initial data (user inputs and default values)
const rawScoreInput = "1250.75xp";
const rawMultiplierInput = "1.5";
let playerCoins = 50;
let playerLevel = 1;
const isVIPMember = true;
const targetScore = 1000;

let score = parseFloat(rawScoreInput);

if (isNaN(score)) {
    score = 0;
}

let multiplier = parseInt(rawMultiplierInput);
/* console.log(score);
console.log(multiplier);
console.log(isNaN(multiplier)); */

let playerScore = (Math.trunc(score) * multiplier) + 100;
playerCoins += 25;
++playerLevel;

const hasReachedTarget = playerScore >= targetScore;
/* console.log(hasReachedTarget);
console.log(playerCoins);
console.log(playerLevel << 1); */

let bonus = 0;
if (isVIPMember && hasReachedTarget) {
    bonus += 500;
}else if (isVIPMember || hasReachedTarget) {
    bonus += 200;
}

//console.log(playerScore);

let statusMessage = (hasReachedTarget) ? "Nyertes" : "Próbáld újra";
//console.log(statusMessage);

/* console.log(Math.floor(playerScore));
console.log(Math.ceil(playerScore));
console.log(Math.trunc(playerScore));
console.log(playerScore.toFixed()); */

let luckyNumber = Math.floor(Math.random() * 10) + 1;
playerScore = playerScore + bonus + luckyNumber;
//console.log(playerScore);
/* console.log(luckyNumber);

console.log(Math.max(100, 500, playerScore));
 */
let rang = "";

switch (true) {
    case playerLevel < 2:
        rang = "Kezdő";
        break;
    case playerLevel <= 6:
        rang = "Haladó";
        break;
    case playerLevel > 6:
        rang = "Profi";
        break;
    default:
        rang = "Ismeretlen";
}

console.log("=== JÁTÉKTERMI EREDMÉNYJELZŐ ===");
console.log(`Beolvasott pontszám: ${score} (Típus ellenőrizve)`);
console.log(`Formázott pontszám (2 tizedes): ${score.toFixed(2)}`);
console.log(`Lefejezetlen pontszám (trunc): ${Math.trunc(score)}`);
console.log(`Kerekített értékek -> Lefelé: ${Math.floor(score)} | Felfelé: ${Math.ceil(score)}`);

console.log(`Játékos szintje: ${playerLevel} (Rang: ${rang})`);
console.log(`Érmék száma: ${playerCoins}`);
console.log(`Jutalom Bónusz: ${bonus} pont`);
console.log(`Státusz: ${statusMessage}`);