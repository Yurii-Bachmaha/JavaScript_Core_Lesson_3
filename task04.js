function filterRange(array, a, b) {
    let newArray = [];

    if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
        console.log('Entered number is outside the array!');
    } else {
        for (let i = a; i < b; i++) {
            if (!isNaN(array[i])) {
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}

let randomData = ['1', '3', '6', 'CORN', '0', '99', 'MILK', 'ORANGE'];
console.log(filterRange(randomData, 0, 8));