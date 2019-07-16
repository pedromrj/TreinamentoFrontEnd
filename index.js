function validacao() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var re_senha = document.getElementById("re-senha").value;
    var cpf = document.getElementById("cpf").value;
    var errors = 0;

    if (!nome) {
        document.getElementById("nome").style.border="1px solid red";
        errors++;
    }
    if (!email) {
        document.getElementById("email").style.border="1px solid red";
        errors++;
    }
    if (!cpf) {
        document.getElementById("cpf").style.border="1px solid red";
        errors++;
    }
    if (!senha) {
        document.getElementById("senha").style.border="1px solid red";
        errors++;
    }
    if (!re_senha) {
        document.getElementById("re-senha").style.border="1px solid red";
        errors++;
    }
    if (senha != re_senha) {
        document.getElementById("senha").style.border="1px solid red";
        document.getElementById("re-senha").style.border="1px solid red";
        errors++;
    }

    if (senha.lenght < 5 || re-senha.lenght < 5) {
        document.getElementById("senha").style.border="1px solid red";
        document.getElementById("re-senha").style.border="1px solid red"
        errors++;
    }

    if (errors != 0) {
        document.getElementById("msg").innerHTML = "preencher todos os campos corretamente!!";
        return false;
    }    
}