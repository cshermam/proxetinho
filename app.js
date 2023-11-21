function validarformulario(){
    const nome = document.getElementById('Nome').value
    const email = document.querySelector('#email').value
    const senha = document.getElementById('Senha').value

    if(nome == '' || email == '' || senha == ''){
        alert("Não deixe o campo vazio")
    }
    const emailregex = /^ [^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailregex.test(email)){
        alert('Por favor, insira um email válido!')
    }

        if(senha.length > 8){
            alert('Limite de caracteres exedidos!')
        }
}