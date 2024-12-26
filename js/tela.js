
const inputnu = document.getElementById("inputnu"); 
const selectcss = document.getElementById("selectcss"); 
const nmproduto = document.querySelector(".nmproduto").innerHTML; 
const valorproduto = document.querySelector(".valorproduto").innerHTML; 
const valorqualculado = document.getElementById("valorqualculado"); 
const btcomprar = document.querySelector(".btcomprar"); 


const precoProduto = parseFloat(valorproduto.replace("RS", "").replace(",", "."));


function atualizartolta() {
  const quantidade = parseInt(inputnu.value) || 1;
  const total = quantidade * precoProduto;

  if (quantidade > 0) {
    valorqualculado.innerHTML = `Valor total: R$ ${total.toFixed(2)}`;
  } else {
    valorqualculado.innerHTML = "Por favor, selecione uma quantidade válida.";
  }
}


function comprar() {
  const quantidade = parseInt(inputnu.value) || 1;
  const cor = selectcss.value; 
  const total = quantidade * precoProduto; 

  
  const numeroWhatsApp = "5511937349060";


  const mensagem = `Olá, gostaria de comprar o produto "${nmproduto}" na cor "${cor}", quantidade: ${quantidade}. O valor total é: R$ ${total.toFixed(2)}.`;


  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

 
  window.open(urlWhatsApp, "_blank");
}


inputnu.addEventListener("input", atualizartolta); 
btcomprar.addEventListener("click", comprar);
