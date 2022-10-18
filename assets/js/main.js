/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.  
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

gridGenerator(cellsNumber, containerEl);
function gridGenerator(maxCellNumb, domEl){
    buttonEl.addEventListener('click', function(){
        for (let i=0; i < maxCellNumb; i++){
            const numb = i + 1;
            console.log(numb);
            const cellMarkup = `<div class="cell">${numb}</div>`;
            domEl.innerHTML += cellMarkup; 
            console.log(cellMarkup);     
        }
        let cellListEl = document.querySelectorAll('.cell');
        for (let i=0; i < cellListEl.length; i++){
            let currentCell = cellListEl[i];
            console.log(currentCell);
            currentCell.addEventListener('click', function(){
                currentCell.classList.toggle('light_blue');
                const currentNumb = i+1;
                console.log(currentNumb);
            })
        }
    })
} 
    

