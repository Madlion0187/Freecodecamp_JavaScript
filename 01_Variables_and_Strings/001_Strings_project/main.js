// nyers adatok
const rawUsername = "   Joe_Doe   ";
const rawEmail = "   JOE.DOE@Email.Com   ";
const rawBio = "Szeretek programozni!\nJavaScript a kedvenc nyelvem.\nA JavaScript fantasztikus.";
const badWord = "JavaScript";
const goodWord = "JS";

const cleanUsername = rawUsername.trim();
const cleanEmail = rawEmail.trim().toLowerCase();
const shoutingUsername = cleanUsername.toLocaleUpperCase();
const firstLetter = cleanUsername[0];
console.log(rawBio.includes("programozni"));
console.log(rawBio.indexOf("JavaScript"));
const firstSentence = rawBio.slice(0, rawBio.indexOf("!") + 1);
const updatedBioWithReplace = rawBio.replace("JavaScript", goodWord);
const finalBio = rawBio.replaceAll("JavaScript", goodWord);
const end = "-".repeat(30);

const profileCard = `=== FELHASZNÁLÓI PROFIL ===
Név: ${cleanUsername} (Első betű: ${firstLetter})
E-mail: ${cleanEmail}
    
Életrajz:
${finalBio}
    
Mottó: \"A programozás \\tanulás\\ és alkotás! \"
${end}`;

console.log(profileCard);
