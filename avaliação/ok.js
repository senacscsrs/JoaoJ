let mensagem = [];
function adicionarMensagem() {
    const input = document.getElementById("textoUsuario");
    const resultado = document.getElementById("resultado");

    let texto= input.value; 
if (texto === "") {

    resultado.innerText="digite algo primeiro"; 
    
 } else {
    mensagem.push(texto);
    resultado.innerText= " Mensagens digitadas:" + mensagem.join(",");
}
    input.value="";
}
    
document.getElementById("btnEnviar").addEventListener("click", adicionarMensagem);

let texto= input.value;
if (texto === "") {
    resultado.innerText="digite algo primeiro"; 
  
} else { 
    mensagem.push(texto);
resultado.innerText= " mensagens digitadas:" + mensagem.join (",");
}
input.value="";
 