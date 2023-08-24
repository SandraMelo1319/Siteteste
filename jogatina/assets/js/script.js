let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

/*

function validarNome() {
 if ( nome.value.length < 3)
  alert('Nome inválido! Digite um nome com mais de 3 letras')
}


function validarEmail  () {
    if (email.value.indexOf ("@") == -1) 
     alert('Email inválido, coloque "@" para validar')
   }

*/

function validarNome() {
  let txtNome = document. querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Valido'
    txtNome.style.color = 'red'

  } else { 
    txtNome.innerHTML = 'Nome Valido'
    txtNome.style.color='blue'
  }

}

function validarEmail() {
  let txtEmail = document. querySelector('#txtEmail')
  if (email.value.indexOf ("@") == -1) {
    txtEmail.innerHTML = 'email inválido'
    txtEmail.style.color = 'red'

  } 
  
  else { 
    txtEmail.innerHTML = 'Email validado'
    txtEmail.style.color='blue'
  }

}

function validarAssunto() {
  let txtAssunto = document. querySelector('#txtAssunto')
  if (assunto.value.length > 100) {
    txtAssunto.innerHTML = 'Assunto Invalido'
    txtAssunto.style.color = 'red'

  } 

  else { 
    txtAssunto.innerHTML = 'Assunto validado'
    txtAssunto.style.color='blue'
  }

}