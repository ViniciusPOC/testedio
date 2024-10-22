// variavel para armazenar nome e xp 

let nomeHeroi = " bob "
let quantidadeXp = 3000


let nivelHeroi; 
    {
if (quantidadeXp < 1000){
    nivelHeroi = "Ferro";
}   else if (quantidadeXp <=2000) {
    nivelHeroi = "Bronze";
}   else if (quantidadeXp <=5000) {
    nivelHeroi = "Prata" ; 
}   else if (quantidadeXp <= 7000) {
    nivelHeroi = "Ouro" ; 
}   else if ( quantidadeXp <=8000) {
    nivelHeroi ="Platina"; 
}   else if (quantidadeXp <= 9000) {
    nivelHeroi = "Ascendente" ; 
}   else if ( quantidadeXp <=10000) {
    nivelHeroi ="Imortal"; 
}   else
    nivelHeroi = "Radiante";
}

// validaçao para impressão 

console.log('O Heroi' +(nomeHeroi)+'esta no nivel ' +(nivelHeroi) )