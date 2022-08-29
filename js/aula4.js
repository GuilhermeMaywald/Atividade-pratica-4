const prompt = require('prompt-sync')();

let letraAlfabeto = prompt('Digite uma letra do alfabeto: ');
if (letraAlfabeto == 'a'
    || letraAlfabeto == 'e'
    || letraAlfabeto == 'i'
    || letraAlfabeto == 'o'
    || letraAlfabeto == 'u') {
        return console.log('Letra digitada é uma vogal!');
    } else if (letraAlfabeto = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']) {
        return console.log('A letra é uma consoante!');
    } else {
        console.log('Digite uma letra!!!');
    }