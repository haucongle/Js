function regexVar() {
    return /^([aeiou]).*\1$/;
}

const re = regexVar();
console.log(re.test('bcd'));