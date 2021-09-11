
function MediaAluno(n1, n2){
    
    var media = (n1+n2)/2
   
    if(media >=7 ){
        return 'Parabéns,você foi aprovado(ª)! Sua nota é: ' + media

    }else{
        return 'Triste por você, estude mais! Sua nota é: ' + media 
    }
    
}
console.log( MediaAluno(9,10))
