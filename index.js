function validacao() {
    var dados = document.getElementsByTagName("input");
    var errors = 0;
    const msg = "preencher todos os campos corretamente!!";

    if (!dados[0].value) {
        document.getElementById("nome").style.border="1px solid red";
        errors++;
    }
    if (!dados[1].value) {
        document.getElementById("email").style.border="1px solid red";
        errors++;
    }
    if (!dados[2].value) {
        document.getElementById("cpf").style.border="1px solid red";
        errors++;
    }
    if (!dados[3].value) {
        document.getElementById("senha").style.border="1px solid red";
        errors++;
    }
    if (!dados[4].value) {
        document.getElementById("re-senha").style.border="1px solid red";
        errors++;
    }
    if (dados[4].value != dados[3].value) {
        document.getElementById("senha").style.border="1px solid red";
        document.getElementById("re-senha").style.border="1px solid red";
        errors++;
    }
    
    if (dados[4].value.length < 5 || dados[3].value.length < 5) {
        document.getElementById("senha").style.border="1px solid red";
        document.getElementById("re-senha").style.border="1px solid red";
        errors++;
    }

    if (errors > 0) {
        document.getElementById("msg").innerHTML = msg;
    }    
}