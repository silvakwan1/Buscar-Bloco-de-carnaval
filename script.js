const input1 = document.querySelector("#search");
input1.addEventListener("input", function() {
  const imagem1 = input1.parentNode.querySelector("#imagem1");
  imagem1.parentNode.removeChild(imagem1);
});

const input2 = document.querySelector("#list");
input2.addEventListener("input", function() {
  const imagem2 = input2.parentNode.querySelector("#imagem2");
  imagem2.parentNode.removeChild(imagem2);
});
