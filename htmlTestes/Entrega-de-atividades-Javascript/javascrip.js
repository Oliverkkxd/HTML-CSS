//mudar a cor de determinado ID
function mudarCor(){
  document.getElementById('fla').style.background = 'red'
  document.getElementById('sccp2').style.background = 'black'
}

//funçao para resetara cor para branco chamando pelo id
function resetarCor(id){
  document.getElementById(id).style.background = 'white'
  
}

//ao colocar o mouse o backgorund ficara verde chamado pelo id
function mouseover(id){
  document.getElementById(id).style.background = 'green'
}

//ao colocar o mouse o backgorund voltara a cor original
function mouseout(id){
  document.getElementById(id).style.background = ''
}

//Funcção para aumentar a fonte
function letragrande(id){
  document.getElementById(id).style.fontSize = '36px'
}

//Funçao para diminuir a fonte
function letramiuda(id){
  document.getElementById(id).style.fontSize = '16px'
}

//Função para puxar a data de hoje
function dataDeHoje(id){
  document.getElementById(id).innerHTML = Date()
}
//Função de alerta
function TesteDeAlerta(id) {
  alert('Primeiro colocado Flamengo!')
}

