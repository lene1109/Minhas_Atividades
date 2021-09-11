/*function calculeMedia(nota1, nota2, nota3) {
    const soma = (nota1 + nota2 + nota3) 
    const media = soma/3
    return media
}
console.log(calculeMedia(5,10,8))*/
function MediaAluno(n1, n2){
    
    var media = (n1+n2)/2
   
    if(media >=7 ){
        return 'Parabéns,você foi aprovado(ª)! Sua nota é: ' + media

    }else{
        return 'Triste por você, estude mais! Sua nota é: ' + media 
    }
    
}
console.log( MediaAluno(9,10))