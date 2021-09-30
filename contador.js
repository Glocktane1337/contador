var readlinesync = require('readline-Sync');
var escolher_numero = require('readline-Sync');
var peca1 = 0;
var peca2 = 0;
var numero

do{

    numero = parseInt(readlinesync.question ("=====================MENU=====================\n" +
                                            "Pressione 0 para encerrar programa. \n"+
                                            "Pressione 1 para acrescentar uma peca. \n"+
                                            "Pressione 2 para mostrar a quantidade de pecas. \n"+
                                            "===============================================\n"))
    switch(numero) {
        
        case 0 :
            console.log("Encerrando...")
            break;
        
        case 1 :
            escolher_numero = parseInt(readlinesync.question ("Adicionar peca 1 ou peca 2?"));
                if (escolher_numero == 1) {
                    peca1++
                    console.log("Voce tem", peca1 , "pecas do tipo 1.") 
                }else if (escolher_numero == 2){
                    peca2++
                    console.log("Voce tem", peca2 , "pecas do tipo 2.")
                    console.log(peca2)
                }else {
                    console.log("Comando inválido.")
                    break;
                }                     
            break;            
        case 2:
            console.log("Voce tem", peca1, "pecas do tipo 1 e", peca2, "pecas do tipo 2.")
            break
            
        default:
            console.log("Comando invalido.")
            break;
    }
                
}                                                             
while (numero != 0) 
 //sistema de camadas de if/else pra navegar pelo sistema, adicionar peças e ver o total delas.
 //estudar uso de switch case.