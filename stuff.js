var data_evento = (22)

var data_atual = window.prompt("Qual é o dia de hoje?")

//Pede a data para o usuário.

var dia_ok = false

var idade_ok = false

var idade_data_certas = false

var inscritos_anteriores = 50

var inscritos_max = 100

var idade_minima = 18

//Todas variáveis declaradas anteriormente.

if (data_evento > data_atual) {
    dia_ok = true
        if (dia_ok = true) {
            var idade_usuario = window.prompt("Qual é a sua idade?")
                if (idade_usuario >= idade_minima) { 
                    idade_ok = true
                    idade_data_certas = true   
                        if (idade_data_certas = true) {
                            alert("Idade e data de inscrição válidas!");
                            alert("Verificando base de dados para cadastros anteriores...")
                            //A esse ponto, o script iria procurar na database a quantidade de inscrições anteriores,
                            //mas como não sei esse comando, vou considerar 50 participantes já inscritos.
                                if (inscritos_anteriores < inscritos_max) {
                                    alert("Inscrição feita com sucesso!")
                                    alert("O evento será dia 22 de Setembro, não falte!")}
                                        else{
                                            alert("Cadastro invalidado, quantidade limite de participantes já atingida.")}
                                        }
                                    
                                }
                                else {
                                    alert("Idade inválida!")
                                    idade_data_certas = false} 
                        }


                }
                else {
                    alert("Data inválida!")
                    idade_data_certas = false}
        