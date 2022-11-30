let styles = ['JAZZ', 'BLUES'];
console.log(styles);

styles.push('ROCK-N-ROLL');
console.log(styles);

styles.splice(-2, 1, 'CLASSIC');
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('RAP', 'REGGAE');
console.log(styles);