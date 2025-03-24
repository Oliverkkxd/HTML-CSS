//mudar a cor de determinado ID
function mudarCor(id){
  document.getElementById('colunaFla').style.background = 'red'
  document.getElementById('colunaSccp').style.background = 'black'
  document.getElementById('colunaVasco').style.background = 'white'
  document.getElementById('colunaCru').style.background = 'blue'
  document.getElementById('colunaPal').style.background = 'green'

}

//funçao para resetara cor para branco chamando pelo id
function resetarCor(id){
  document.getElementById('colunaFla').style.background = 'white'
  document.getElementById('colunaSccp').style.background = 'white'
  document.getElementById('colunaVasco').style.background = 'white'
  document.getElementById('colunaCru').style.background = 'white'
  document.getElementById('colunaPal').style.background = 'white'
  
}

//ao colocar o mouse o backgorund ficara verde chamado pelo id
function mouseover(id){
  document.getElementById(id).style.background = 'lightblue'
}

//ao colocar o mouse o backgorund voltara a cor original
function mouseout(id){
  document.getElementById(id).style.background = ''
}

//Função para aumentar a fonte
function letragrande(id){
       // Pega o elemento pelo id
   var elemento = document.getElementById(id);
    
   // Pega o tamanho atual da fonte
   var tamanhoFonte = window.getComputedStyle(elemento).fontSize;
   
   // Converte o valor para número (removendo o 'px' da string)
   tamanhoFonte = parseFloat(tamanhoFonte);
   
   // Diminui o tamanho da fonte em 2px
   if (tamanhoFonte > 10) { // Definir um limite mínimo para o tamanho da fonte
       elemento.style.fontSize = (tamanhoFonte + 2) + 'px';
   } 
}


//Funçao para diminuir a fonte
function letramiuda(id){
   // Pega o elemento pelo id
   var elemento = document.getElementById(id);
    
   // Pega o tamanho atual da fonte
   var tamanhoFonte = window.getComputedStyle(elemento).fontSize;
   
   // Converte o valor para número (removendo o 'px' da string)
   tamanhoFonte = parseFloat(tamanhoFonte);
   
   // Diminui o tamanho da fonte em 2px
   if (tamanhoFonte > 10) { // Definir um limite mínimo para o tamanho da fonte
       elemento.style.fontSize = (tamanhoFonte - 2) + 'px';
   }
}




//Função para puxar a data de hoje
function dataDeHoje(id){
  document.getElementById(id).innerHTML = Date()
}
//Função de alerta
function TesteDeAlerta(id) {
  alert('Primeiro colocado Flamengo!')
}

