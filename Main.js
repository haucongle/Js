function isPositive(a) {
    if (a > 0) {
        return 'YES';
    } else if (a < 0) {
        throw new Error('Negative Error');
    } else {
        throw new Error('Zero Error');
    }
}

try {
    // console.log(isPositive(-1));
    // console.log(isPositive(0));
    console.log(isPositive(1));
} catch (e) {
    console.log(e.message);
}