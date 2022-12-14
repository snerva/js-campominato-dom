/*L'utente clicca su un bottone che genererĂ  una griglia di gioco quadrata.  
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//creare un bottone in dom, costante e ascolto
//creare dentro bottone, griglia 10x10 con container in dom e costante
//assegnare a ogni cella un numero progressivo
//selezionare tutta la lista di cell e ascolto su singola cell cliccata
//dare background color azzurro a cell cliccata


const buttonEl = document.querySelector('button');
const containerEl = document.querySelector('.container');
const cellsNumber = 100;
let score = 0;

// buttonEl.addEventListener('click', function(){
//     containerEl.innerHTML = '';
//     for (let i=0; i < cellsNumber; i++){
//         const numb = i + 1;
//         //console.log(numb);
//         const cellMarkup = `<div class="cell">${numb}</div>`;
//         containerEl.insertAdjacentHTML('beforeend', cellMarkup) 
//         //console.log(cellMarkup);  
//     }
//     let cellListEl = document.querySelectorAll('.cell');
//     for (let i=0; i < cellListEl.length; i++){
//         let currentCell = cellListEl[i];
//         //console.log(currentCell);
//         currentCell.addEventListener('click', function(){
//         this.classList.toggle('light_blue');
//         const currentNumb = i+1;
//         console.log(currentNumb);
//         })
//     }
// })

gridGenerator(buttonEl, containerEl, cellsNumber)
function gridGenerator(btnElement, containerElement, maxNumbers){
    btnElement.addEventListener('click', function(){
        //console.log('ho cliccato');
        containerElement.innerText = '';
        for (let i=0; i < maxNumbers; i++){
            const cellMarkup = cellEl(i, 'div', 'cell');
            containerElement.insertAdjacentElement('beforeend', cellMarkup);

            cellMarkup.addEventListener('click', function() {
                this.classList.toggle('light_blue');
                console.log(this.innerText);   
            })
        }
    })
}

function cellEl(n, tagEl, classEl){
    const cellMarkup = document.createElement(tagEl);
    cellMarkup.className = classEl;
    cellMarkup.innerText = n + 1;

    return cellMarkup
}
//generare 16 bomb random number (while, if), non ripetuti, tra 1 e cellsNumber
//se (while, if) currentNumb(cellMarkup[i]) Ă© == ad un bombEl, this.toggle('red'), console.log('Game over'), document.getElementById('h1').innerHTML = "Game Over! Sei finito su una bomba"
//else this.toggle('light_blue'), score++

//al termine pc comunica in dom il numero di caselle azzurre cliccate
//document.getELementById('h1').innerHTML = "Total score:" + score;

const bombsList = bombsGenerator(1, cellsNumber);
console.log(bombsList);

function bombsGenerator(min, max){
    const bombsList = [];
    while (bombsList.length !== 16){
        const bombEl = generateRandomNumber(min, max);
        if (!bombsList.includes(bombEl)){
          bombsList.push(bombEl);
        }
    }
    return bombsList
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) +min;
}


