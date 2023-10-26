function createAccount () {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value 
    
    
    if  (name == "" || email == "" || password == "") {
        alert("Todos os campos devem ser preenchidos."); 
        
    }

    else if (password.length < 8) {
        window.alert("A senha tem que possuir tamanho mínimo de 8 caracteres");
    }                       
    else {
        alert("Cadastro realizado!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        alert('Agora acesse sua conta clicando em "Login"');
      }     

}

function login () {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if  (email == "" || password == "") {
        alert("Todos os campos devem ser preenchidos."); 
    }

    else if (email != "admin@email.com.br" || password != "#dw1UTFPR#") {
        alert("Não foi possível realizar a autenticação de sua conta. Verifique se o email ou a senha estão corretos!");
    }

    else {
        alert("Autenticação realizada com sucesso!");
        
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        
    }

}