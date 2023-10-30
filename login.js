

function handleCredentialResponse(response) {
   
  const token = response.credential; 
  const tokenData = JSON.parse(atob(token.split('.')[1])); 
  const fullname = tokenData.name;
  const id = tokenData.sub;
  const email = tokenData.email;
  const verifiedEmail = tokenData.email_verified;


    
    //verifica se teve resposta e se o email eh verificado
    if (response.credential && verifiedEmail) {
      // Aqui vou salvar o nome e sub em um cookie
      localStorage.setItem('user_id', id);
      localStorage.setItem('user_name', fullname);
      
      // Se for meu id de administrador me leva para pagina de adm
      if(id == 104042383727619940911){
        window.location.href = "admin.html";
        }
      else{
       //Redirecionar o usuário para a página de loading
      window.location.href = "loading.html";
    }
  }

  console.log(fullname)
  console.log(id)
  console.log(email)
  console.log(verifiedEmail)
  console.log(data)
    
    
}
window.onload = function () {
google.accounts.id.initialize({
client_id: "66209331717-1hs33bg8n8ksag5vi3hnkvt5jk423o3o.apps.googleusercontent.com",
callback: handleCredentialResponse
});
google.accounts.id.renderButton(
document.getElementById("buttonDiv"),
{ theme: "outline", size: "large", logo_alignment:"center" }  // customization attributes
);
google.accounts.id.prompt(); // also display the One Tap dialog
}
