function soma() {
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const n3 = document.getElementById("n3");
  const resultado = document.getElementById("resultado");

  let num1 = Number(n1.value);
  let num2 = Number(n2.value);
  let num3 = Number(n3.value);

  let calculo = num1 + num2 + num3;
  resultado.innerHTML = `A soma dos números acima é ${calculo}`;
}
