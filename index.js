function validacao() {
    var dados = document.getElementsByClassName("fields");
    var senha1 = dados[3].value;
    var senha2 = dados[4].value;
    var vazio = false;

    for (let i = 0; i < dados.length; i++) {
        if (!dados[i]) {
            document.getElementsById("error").innerHTML = "preencher todos os campo para concluir!";
            document.getElementsById(dados[i].getElementsById).style.border="1px solid red";
            vazio = true;
        }
    }

    if (vazio == false) {
        if (senha1.lenght < 5 || senha2.lenght < 5) {
            document.getElementsById("senha").style.border="1px solid red";
            document.getElementsById("re-senha").style.border="1px solid red";
            document.getElementsById("error").innerHTML = "Tamanho maximo 5";
            return false;
        }
    
        if (senha1 != senha2) {
            document.getElementsById("error").innerHTML = "preencher todos os campo para concluir!";
            document.getElementsById("senha").style.border="1px solid red";
            document.getElementsById("re-senha").style.border="1px solid red";
            return false;
        }
    }
}