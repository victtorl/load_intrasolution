function EjecutaAccion(Accion) {

    if (Accion == "Load") {
        //this will hide the waiting.gif
        document.getElementsByClassName("loader")[0].style.visibility = 'visible';
        frmCargos.Acc.value = Accion;
        frmCargos.submit();
    }
    else {

        document.getElementsByClassName("loader")[0].style.visibility = 'hidden';

    }
}


function getFileName() {
    var x = document.getElementById('entry_value')
    document.getElementById('fileName').innerHTML = x.value.split('\\').pop()
}