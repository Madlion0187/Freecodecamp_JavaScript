let count = 0;

function cardCounter(card) {
    
    if(card > 1 && card < 7) {
        count++;
    }else if (card === 7 || card === 8 || card === 9) {
    count += 0;
    } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
    }

    if(count > 0) {
        return `${count} Bet`;
    }else {
        return `${count} Hold`;
    }
}

/* console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6)); */

/* console.log(cardCounter(7));
console.log(cardCounter(8));
console.log(cardCounter(9)); */

/* console.log(cardCounter(10));
console.log(cardCounter("J"));
console.log(cardCounter("Q"));
console.log(cardCounter("K"));
console.log(cardCounter("A")); */

/* console.log(cardCounter(3));
console.log(cardCounter(7));
console.log(cardCounter("Q"));
console.log(cardCounter(8));
console.log(cardCounter("A")); */

/* console.log(cardCounter(2));
console.log(cardCounter("J"));
console.log(cardCounter(9));
console.log(cardCounter(2));
console.log(cardCounter(7)); */

/* console.log(cardCounter(2));
console.log(cardCounter(2));
console.log(cardCounter(10)); */

console.log(cardCounter(3));
console.log(cardCounter(2));
console.log(cardCounter("A"));
console.log(cardCounter(10));
console.log(cardCounter("K"));