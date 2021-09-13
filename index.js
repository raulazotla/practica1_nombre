function getIMC(){
var peso=parseFloat(document.getElementById('Peso').value);
var altura=parseFloat(document.getElementById('Altura').value);
  var imc=peso/(altura*altura);
  document.getElementById("imc").innerHTML=imc;
  var Resultado;
  if (imc<16.00){
    Resultado="Delgadez severa";
  } else if ( imc  >= 16.00 && imc < 19.99){
    Resultado="Delgadez Moderna  ";
  } else if (imc > 17.00 && imc < 18.49){
    Resultado="Delgadez aceptable";
  } else if (imc > 18.50 && imc < 24.99){
    Resultado="Peso Normal";
  } else if (imc > 25.00 && imc < 29.99){
    Resultado=" Pre-Obeso(Riesgo) ";
  } else if (imc > 30.00 && imc<34.99){
    Resultado="Obeso Tipo 1 (Riesgo Moderado)";
  } else if (imc > 35.00 && imc < 39.99){
    Resultado="Obeso tipo 2 (Riesgo Severo)"
  } else if (imc > 40.00){
    Resultado="Obeso tipo 3(Riesgo muy severo)";
}
  {
  document.getElementById("imc").innerHTML=imc;
  alert(Resultado);

}
