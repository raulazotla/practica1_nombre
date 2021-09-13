function getIMC(){
var peso=parseFloat(document.getElementById('Peso').value);
var altura=parseFloat(document.getElementById('Altura').value);
  var imc=peso/(altura*altura);
  document.getElementById("imc").innerHTML=imc;
 
}
