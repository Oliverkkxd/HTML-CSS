function Calcular(){

  //Armazena o input dentro da varial valor1 com o id. value
  var  valor1 = parseInt(document.getElementById("teste01").value);
  var  valor2 = parseInt(document.getElementById("teste02").value);

  //armazena o input que o usuario digitou +, -, /
  var operacao = document.getElementById("teste03").value;

  //Armazena o total que esta dentro do switch case 
  var total;

  
  
  //Operação do switch case
  switch(operacao) {

    //CASO DE + 
    case '+':
      total = valor1 + valor2;
    break;
    
    //CASO DE -
    case '-':
      total = valor1 - valor2;
    break;

    //CASO DE /
    case '/':
      total = valor1 / valor2;
    break; 

    //CASO DE *
    case '*':
      total = valor1 * valor2;
    break;

    //CASO DE NAO SER NENHUMA
    default:
      // code block
      total = "OPERAÇÃO INVALIDA"
      break;
  }

  //IMPRIMI NA TELA HTML 
  document.getElementById('Resultado').innerHTML = total;
  
}








