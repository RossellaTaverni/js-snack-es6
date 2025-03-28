/* Snack 1 Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare in console la bici con peso minore. */

// 1. Creiamo l'array di oggetti.
let biciDaCorsa = [
    { nome: 'Giant TCR Advanced SL 0', peso: 6.4 },
    { nome: 'Scott Addict RC Ultimate', peso: 5.9 },
    { nome: 'Specialized S-Works Aethos/Sram Red Etap AXS', peso: 6.34 },
    { nome: 'Wilier Triestina Verticale SLR', peso: 6.5 },
    { nome: 'Orbea Orca M10iLTD Replica', peso: 6.7 }
]

// 2. Inizializziamo una variabile con il primo ggetto dell'array: biciDaCorsa.
let biciPesoMinore = biciDaCorsa[0];

// 3. Creiamo un ciclo per scorrere l'array e confrontare i pesi.
for (let i = 1; i < biciDaCorsa.length; i++){
    if(biciDaCorsa[i].peso < biciPesoMinore.peso){
        biciPesoMinore = biciDaCorsa[i];
    }
}

// 4. Stampiamo in console la bici con il peso minore.
console.log('Bici con il peso minore:', biciPesoMinore);


/* Snack2 Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. 
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// 1. Creiamo l'array di oggetti di squadre di calcio.
let squadre = [
    {nome:'Salernitana', puntiFatti: 0, falliSubiti: 0},
    {nome:'Napoli', puntiFatti: 0, falliSubiti: 0},
    {nome:'Juventus', puntiFatti: 0, falliSubiti: 0},
    {nome:'Bayern Monaco', puntiFatti: 0, falliSubiti: 0},
    {nome:'Paris Saint-Germain (PSG)', puntiFatti: 0, falliSubiti: 0},
]

// 2. Genera numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Primo for genera numeri random x i punti fatti.
for(let i = 0; i < squadre.length; i++){
    if(squadre[i].puntiFatti === 0){
        squadre[i].puntiFatti = Math.floor(Math.random() * 50);
    }
}

// Secondo for genera numeri random x i falli subiti.
for(let i = 0; i < squadre.length; i++){
    if(squadre[i].falliSubiti === 0){
        squadre[i].falliSubiti = Math.floor(Math.random() * 50);
    }
}

console.log(squadre)