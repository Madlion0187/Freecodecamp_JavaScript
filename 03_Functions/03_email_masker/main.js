function maskEmail(email) {
    const atIndex = email.indexOf("@");
    const userName = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    const firstChar = userName[0];
    const lastChar = userName[userName.length - 1];
    const stars = "*".repeat(userName.length - 2);

    return firstChar + stars + lastChar + domain;
}

let email1 = "apple.pie@example.com";
console.log(maskEmail(email1));

let email2 = "freecodecamp@example.com";
console.log(maskEmail(email2));

let email3 = "info@test.dev";
console.log(maskEmail(email3));

let email4 = "user@domain.org";
console.log(maskEmail(email4));
