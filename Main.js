function regexVar() {
    return /\d+/g;
}

const re = regexVar();
const r = '102, 1948948 and 1.3 and 4.5'.match(re);

for (const e of r) {
    console.log(e);
}