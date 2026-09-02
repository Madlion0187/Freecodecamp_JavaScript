let lunches = [];

// Add a lunch to the end
function addLunchToEnd(arr, lunchItem) {
    arr.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return arr;
}

//console.log(addLunchToEnd(lunches, "Taco"));
//console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

// Add a lunch to the start
function addLunchToStart(arr, lunchItem) {
    arr.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return arr;
}

//console.log(addLunchToStart(lunches, "Sushi"));
//console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

// Remove a lunch from the end
function removeLastLunch(arr) {
    if(arr.length > 0) {
        let lastLunch = arr.pop();
        console.log(`${lastLunch} removed from the end of the lunch menu.`);
    }else {
        console.log("No lunches to remove.");
    }
    return arr;
}

//console.log(removeLastLunch(lunches));
//console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
//console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

// Remove a lunch from the start
function removeFirstLunch(arr) {
    if(arr.length > 0) {
        let firstLunch = arr.shift();
        console.log(`${firstLunch} removed from the start of the lunch menu.`);
    }else {
        console.log("No lunches to remove.");
    }
    return arr;
}

//console.log(removeFirstLunch(lunches));
//console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
//console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

// Select random lunch
function getRandomLunch(arr) {
    if(arr.length > 0) {
        let randomLunch = arr[(Math.floor(Math.random() * arr.length))];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }else {
        console.log("No lunches available.");
    }
}

//console.log(getRandomLunch(lunches));
//console.log(getRandomLunch(["Sushi", "Pizza", "Burger"]));

// Show lunch menu
function showLunchMenu(arr) {
    if(arr.length > 0) {
        console.log(`Menu items: ${arr.join(", ")}`);
    }else {
        console.log("The menu is empty.");
    }
}

//console.log(showLunchMenu(lunches));
//console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
//console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));


