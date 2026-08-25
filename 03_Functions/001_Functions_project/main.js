// ==================== 1. Email Verification and Masking ====================

function processCustomerEmail(email, targetDomain) {
    if (email.slice(email.length - targetDomain.length) === targetDomain) {
        const atIndex = email.indexOf('@');
        const userName = email.slice(0, atIndex);
        const firstChar = userName[0];
        const lastChar = userName[userName.length - 1];
        const domain = email.slice(atIndex);
        const stars = "*".repeat(userName.length - 2);

        return `${firstChar}${stars}${lastChar}${domain}`;
    } else {
        return "ERROR: Invalid domain!";
    }
}

/* console.log(processCustomerEmail("john.doe@smartshop.hu", "@smartshop.hu"));
console.log(processCustomerEmail("hacker@otherdomain.com", "@smartshop.hu")); */

// ==================== 2. Temperature Converter ====================

function checkDeliveryTemperature(celsius) {
    const fahrenheit = celsius * (9 / 5) + 32;

    if (fahrenheit > 40) {
        return `ALERT: ${fahrenheit} °F - Temperature too high!`;
    } else {
        return `OK: ${fahrenheit} °F`;
    }
}

/* console.log(checkDeliveryTemperature(2));
console.log(checkDeliveryTemperature(5)); */

// ==================== 3. Loyalty Point Manager ====================

let loyaltyPoints = 0;

function updateLoyaltyPoints(actionCode) {

    if (actionCode === "BUY_PREMIUM") {
        loyaltyPoints += 15;
    } else if (actionCode === "BUY_STANDARD") {
        loyaltyPoints += 5;
    } else if (actionCode === "USE_DISCOUNT") {
        loyaltyPoints -= 10;
    }

    if (loyaltyPoints >= 30) {
        return `${loyaltyPoints} Point - VIP Status`;
    } else {
        return `${loyaltyPoints} Point - Normal Status`;
    }
}

/* console.log(updateLoyaltyPoints("BUY_STANDARD"));
console.log(updateLoyaltyPoints("BUY_PREMIUM"));
console.log(updateLoyaltyPoints("BUY_PREMIUM"));
console.log(updateLoyaltyPoints("USE_DISCOUNT"));  */

// ==================== 4. Leap Year Checker ====================

function isBonusYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        return true;
    } else {
        return false;
    }
}

console.log(isBonusYear(2024));
console.log(isBonusYear(1900));
console.log(isBonusYear(2000));

// ==================== 5. Receipt Abbreviation ====================

function formatReceiptItem(productName, maxLength) {
    if (productName.length > maxLength) {
        return productName.slice(0, maxLength - 3) + "...";
    } else {
        return productName;
    }
}

/* console.log(formatReceiptItem("Cream Chocolate", 10));
console.log(formatReceiptItem("Milk", 10)); */
