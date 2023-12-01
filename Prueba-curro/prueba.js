const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Pregunta inicial para seleccionar la prueba
rl.question('Which test do you want to select? (1, 2 or 3) \n', (answer) => {
    const numericAnswer = parseInt(answer);
    selectTest(numericAnswer);
});

// Función para seleccionar la prueba basada en la entrada del usuario
function selectTest(answer) {
    switch (answer) {
        case 1:
            filmsTest();
            break;
        case 2:
            fibonacciTest();
            break;
        case 3:
            wordsTest();
            break;
        default:
            console.log('Select either 1, 2 or 3 \n');
            rl.close();
            break;
    }
}

// Prueba 1: Cálculo de la suma total de precios de películas
function filmsTest() {
    const filmsSells = [
        { id: 4, name: "Star Wars", price: 8 },
        { id: 6, name: "Indiana Jones", price: 11 },
        { id: 29, name: "The Godfather", price: 8.95 },
        { id: 30, name: "Akira", price: 21.5 },
    ];
    
    let totalFilmsSells = 0;
    
    filmsSells.forEach((film) => {
        totalFilmsSells += film.price;
    });
    
    console.log(`Total Film sum: ${totalFilmsSells}`);
    rl.close();
}

// Prueba 2: Generar una secuencia de Fibonacci
function fibonacciTest() {
    let precedentNumber = 0;
    let currentNumber = 1;
    
    rl.question('How many Fibonacci numbers? : ', (fibonacciNumber) => {
        const num = parseInt(fibonacciNumber);
        if (isNaN(num)) {
            console.log('Not a number OR undefined');
            rl.close();
        } else {
            for (let i = 0; i < num && i < 10; i++) {
                console.log(precedentNumber);
                [precedentNumber, currentNumber] = [currentNumber, precedentNumber + currentNumber];
            }
            rl.close();
        }
    });
}

// Prueba 3: Sanitización y almacenamiento de palabras
function wordsTest() {
    const words = ["bhSDF843", 'hH2a8eDS', "id8SDG83", "psadi8ED93", "dfdsfsdf", "382733", "SKHSGS"]; 

    words.forEach(word => {
        insertToDatabase(word);
    });

    async function insertToDatabase(word) {
        try {
            const result = await sanitiseWord(word);
            console.log(result);
        } catch (error) {
            console.log('failed:', error);
        }
    }

    function sanitiseWord(word) {
        const sanitizedWord = word.replace(/[0-9]/g, '').toLowerCase();
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    resolve(`${sanitizedWord} : true`);
                } else {
                    reject(`${sanitizedWord} : false`);
                }
            }, 2000);
        });
        return promise;
    }
}
