function calculateRanking(vit,der){
    return vit - der;
}

let winningBalance = calculateRanking(102, 1);
let rank;

if(winningBalance < 10){
    rank = "Ferro";
}else if(winningBalance <= 20){
    rank = "Bronze";
}else if(winningBalance <= 50){
    rank = "Prata";
}else if(winningBalance <= 80){
    rank = "Ouro";
}else if(winningBalance <= 90){
    rank = "Diamante";
}else if(winningBalance <= 100){
    rank = "Lendário";
}else{
    rank = "Imortal";
}

console.log("O Heroí tem saldo de " + winningBalance + " vitórias e está no nível de: " + rank);
