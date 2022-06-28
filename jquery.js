document.querySelector(".botao-cadastro").onclick = function () {
  console.log("clicado em cadastro");
};

document.querySelector(".acessar-botao").onclick = function () {
  console.log("OK, Login efetuado");

  document.getElementsByTagName("main").textContent = "";
};
