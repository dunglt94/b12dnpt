let arr = [-3, 5, 1, 3, 2, 10];
document.write(`original: ${arr} <br>`);
arr.sort(function(a, b) {
    return a - b
})
document.write(`sorted: ${arr} <br>`);
arr.reverse();
document.write(`reversed: ${arr}`);