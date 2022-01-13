let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '25%'
email.style.width= '25%'
assunto.style.width = '29%'

function validaNome(){
    let txt = document.querySelector('#alertNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }else if (nome.value.length >= 3){

        alertNome.innerHTML = 'Nome válido'
        alertNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail(){
    let txt = document.querySelector('#alertEmail')
    if(email.value.indexOf('@') == -1){
        txt.innerHTML = 'Email inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Email Válido'
        txt.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto(){
let txt = document.querySelector('#alertAssunto')

if(assunto.value.length >= 100){
txt.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres.'
txt.style.color = "red"
txt.style.display = 'block'
}else{
txt.style.display = 'none'
assuntoOk = true
}
}
function enviar(){

if(nomeOk == true && emailOk == true && assuntoOk == true){
alert('Formulário enviado com sucesso!')

}else{
alert('Preencha todos os campos corretamente.')

}


}


