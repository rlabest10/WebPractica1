function muestraMensaje() {
    alert('Gracias por pinchar y Cerrar','Sistema');
  }

  function VerEstadoMesa(Numeromesa){
      if (1) {
          alert("Mesa Ocupada")
      } else {
          alert('Mesa Desocupada')
      }
  }

  //Cerrar y Abrir Windows Provisional
  var myWindow;

  function openWin() {
    myWindow = window.open("", "myWindow", "width=400, height=200");    
  }
  
function closeWin() {
    alert('Cerrar Sistema')    
    this.close();
}