function isBalanced(s) {
    let counts = {a: 0, b: 0, c: 0, d: 0};
    for (let i = 0; i < s.length; i++) {
        if (counts.hasOwnProperty(s[i])) {
            counts[s[i]]++;
        }
    }
    return counts.a === counts.c && counts.b === counts.d;
}
console.log(isBalanced('acdbddbbbaaaccdc'));
console.log(isBalanced('abc'));
console.log(isBalanced('bcd'));