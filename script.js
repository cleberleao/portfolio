/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var assunto = document.getElementById("assunto");
  
    // verificar se o nome está vazio
    if (nome.value == "") {
    document.getElementById("msgemail").innerHTML="<font color='red'>Nome não informado!!</font>";
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
   
    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }
   
    if (assunto.value == "") {
      alert("Não contém nenhum assunto informado");
      document.getElementById("msgemail").innerHTML="<font color='red'>Não contém nenhum assunto informado!!</font>";
      assunto.focus();
      return;
    }
    
    alert("Formulário enviado!");
    //form.submit();
    document.getElementById("form").reset();
    // envia o formulário
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1))  {
    document.getElementById("msgemail").innerHTML="E-mail válido";
    alert("E-mail valido");
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido!! </font>";
    alert("E-mail invalido");
    }
}