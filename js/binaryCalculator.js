function click0() {
    document.getElementById("res").innerHTML += '0';
}

function click1() {
    document.getElementById("res").innerHTML += '1';
}

function clickClr() {
    document.getElementById("res").innerHTML = '';
}

function clickEql() {
    let exp = document.getElementById("res").innerHTML;
    if (exp.includes('+')) {
        let tokens = exp.split('+');
        let left = parseInt(tokens[0], 2);
        let right = parseInt(tokens[1], 2);
        let result = left + right;
        document.getElementById("res").innerHTML = (+result).toString(2);
    } else if (exp.includes('-')) {
        let tokens = exp.split('-');
        let left = parseInt(tokens[0], 2);
        let right = parseInt(tokens[1], 2);
        let result = left - right;
        document.getElementById("res").innerHTML = (+result).toString(2);
    } else if (exp.includes('*')) {
        let tokens = exp.split('*');
        let left = parseInt(tokens[0], 2);
        let right = parseInt(tokens[1], 2);
        let result = left * right;
        document.getElementById("res").innerHTML = (+result).toString(2);
    } else {
        let tokens = exp.split('/');
        let left = parseInt(tokens[0], 2);
        let right = parseInt(tokens[1], 2);
        let result = left / right;
        document.getElementById("res").innerHTML = (+result).toString(2);
    }
}

function clickSum() {
    document.getElementById("res").innerHTML += '+';
}

function clickSub() {
    document.getElementById("res").innerHTML += '-';
}

function clickMul() {
    document.getElementById("res").innerHTML += '*';
}

function clickDiv() {
    document.getElementById("res").innerHTML += '/';
}