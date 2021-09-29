var contador;
var readlinesync = require('readline-sync');
var escolher_numero = require('readline-sync');
var numero;
var peca1 = 0
var peca2 = 0
numero_selecionado = false
var numero = parseInt(readlinesync.question ("=====================MENU=====================\n" +
                                            "Pressione 0 para encerrar programa. \n"+
                                            "Pressione 1 para acrescentar uma peça. \n"+
                                            "Pressione 2 para mostrar a quantidade de pecas. \n"+
                                            "===============================================\n")
                                            )
do{
    if (numero = 0) {  
        numero_selecionado = true
    }
        else if (numero = 1) {
            escolher_numero = parseInt(readlinesync.question ("Adicionar peca 1 ou peca 2?"));}
                else if (escolher_numero = 1) {
                    peca1 = peca1 + 1
                    console.log("Voce tem", peca1 , "pecas do tipo 1.") }
                        else if (escolher_numero = 2){
                            peca2 = peca2 + 1
                            console.log("Voce tem", peca2 , "pecas do tipo 2.")}
                                else {
                                    console.log("Comando inválido.")
                                }
                            }                                                                     
while (numero_selecionado = false) {
    console.log("Comando Inválido.")
    console.log(numero)
}