// PEDRA, PAPEL E TESOURA


const criaP = () => {
    let p = document.createElement('p');
    return p;
}


const escolhaDoUsuario = () => {
    let userInput = prompt("Escolha pedra, papel ou tesoura!!!")

    if(userInput.toLowerCase() == 'pedra') {
        userInput = 0;
    }else if(userInput.toLowerCase() == 'papel') {
        userInput = 1;
    }else if(userInput.toLowerCase() == 'tesoura') {
        userInput = 2;
    }else{
        alert("Valor inválido, por favor digite apenas: pedra, papel ou tesoura!!!");
        userInput = 3;
    }


    return userInput
}

const escolhaDoComputador = () => {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let result = Math.floor(Math.random() * (max - min)) + min;

    return result
}

const determineVencedor = (escolhaDoUsuario, escolhaDoComputador) => {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if(escolhaDoUsuario === escolhaDoComputador) {
        p.innerHTML = "Empatou!";
        p.classList.add('draw');
        resultado.appendChild(p)
    }else if(escolhaDoUsuario === 0 && escolhaDoComputador === 1) {
        p.innerHTML = "Você perdeu!"
        p.classList.add('lose');
        resultado.appendChild(p)
    }else if(escolhaDoUsuario === 0 && escolhaDoComputador === 2) {
        p.innerHTML = "Você ganhou!!"
        p.classList.add('win');
        resultado.appendChild(p)
    }else if(escolhaDoUsuario === 1 && escolhaDoComputador === 0) {
        p.innerHTML = "Você ganhou!!"
        p.classList.add('win');
        resultado.appendChild(p)
    }else if(escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
        p.innerHTML = "Você perdeu!!"
        p.classList.add('lose');
        resultado.appendChild(p)
    }else if(escolhaDoUsuario === 2 && escolhaDoComputador === 0) {
        p.innerHTML = "Você perdeu!!"
        p.classList.add('lose');
        resultado.appendChild(p)
    }else if(escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
        p.innerHTML = "Você ganhou!!"
        p.classList.add('win');
        resultado.appendChild(p)
    }
}

const iniciarJogo = () => {
    let userChoice = escolhaDoUsuario();
    let computerChoice = escolhaDoComputador();

    determineVencedor(userChoice, computerChoice)
}

iniciarJogo();