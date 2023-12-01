//fizzbuzz

function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

fizzbuzz(100);


// mostrando pr pantall 
function fizzbuzzz(n) {
    let outputHTML = '';
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        outputHTML += `<p>${output || i}</p>`;
    }
    return outputHTML;
}

document.getElementById('fiz').innerHTML = fizzbuzzz(100);