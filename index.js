function validacao() {
    var dados = document.getElementsByTagName("input");
    var senha1 = dados[3];
    var senha2 = dados[4];
    
    if (senha1 != senha2) {
        document.getElementById("error").innerHTML = "preencher todos os campo para concluir!";
        document.getElementsByName("senha").style.border="solid 1px red";
        document.getElementsByName("resenha").style.border="solid 1px red";
    }
}