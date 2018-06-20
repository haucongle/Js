function getMaxLessThanK(n, k) {
    let max = -1;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
           let tmp = i & j;
           if (tmp > max && tmp < k) {
               max = tmp;
           }
        }
    }
    return max;
}

console.log(getMaxLessThanK(2, 2));