let s = Number(1234);
try {
    let r = s.split("").reverse().join("");
    console.log(r);
} catch (e) {
    console.log(e.message);
    console.log(s);
}