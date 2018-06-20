function regexVar() {
    return /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/;
}

const re = regexVar();
console.log(!!'Er.Dr.'.match(re));