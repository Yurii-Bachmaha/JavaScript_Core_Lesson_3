function camelize(string) {
    let array = [];
    array = string.split("-");

    for (i = 1; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }

    let newString = array.join('');
    console.log(newString);
}

let string = 'my-short-string';
camelize(string);