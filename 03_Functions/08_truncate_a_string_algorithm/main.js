function truncateString(text, number) {
    if(text.length > number) {
        text = text.slice(0, -(text.length - number)) + "...";
        return text;
    }else {
        return text;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));