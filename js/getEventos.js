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

  //Cerrar
  var myWindow;

  function openWin() {
    myWindow = window.open("", "myWindow", "width=400, height=200");
    print('Saludos');
  }
  
  function closeWin() {
    if (myWindow) {
      myWindow.close();
    }
  }
  
  function checkWin() {
    if (!myWindow) {
      document.getElementById("msg").innerHTML = "'myWindow' has never been opened!";
    } else {
      if (myWindow.closed) { 
        document.getElementById("msg").innerHTML = "'myWindow' has been closed!";
      } else {
        document.getElementById("msg").innerHTML = "'myWindow' has not been closed!";
      }
    }
  }