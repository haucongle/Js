function sides(literals, ...expressions) {
    let a = expressions[0];
    let p = expressions[1];
    let s1 = (p + Math.sqrt(p * p - 16 * a)) / 4;
    let s2 = (p - Math.sqrt(p * p - 16 * a)) / 4;
    return [s1, s2].sort();
}

const s1 = 10;
const s2 = 14;

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);