function EjecutaAccion(Accion) {

    if (Accion == "Load") {
        //this will hide the waiting.gif
        
        showSuccess();
        showError();
        document.getElementsByClassName("loader")[0].style.visibility = 'visible';
        document.getElementsByClassName("success-checkmark")[0].style.display = 'none';
        frmCargos.Acc.value = Accion;
        frmCargos.submit();
    }
    else {

        document.getElementsByClassName("loader")[0].style.visibility = 'hidden';
        document.getElementsByClassName("success-checkmark")[1].style.visibility = 'hidden';

    }
}
//funcion para obtener el archivo
function getFileName() {
    var x = document.getElementById('entry_value')
    document.getElementById('fileName').innerHTML = x.value.split('\\').pop()
}
//animacion del resultado de la operacion exito o fracaso 
function showSuccess(){
    document.getElementsByClassName("success-msg")[0].style.visibility = 'visible';
}
function showError(){
    document.getElementsByClassName("error-msg")[0].style.visibility = 'visible';
}
  
//uso de libreria jquery
$(function(){
    $(".formGroup").hover(function(){
         $(".bg-color-dblue").css("background-color", "blue");
        },function(){
            $(".bg-color-dblue").css("background-color", "");
        });
});



