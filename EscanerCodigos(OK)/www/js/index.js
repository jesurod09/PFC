function scanNow(){
    console.log("Entrada en la función scanNow()");
    //Esta función lanza el escáner de cófigos QR.
    intel.xdk.device.scanBarcode();
}
        
//Este evento ocurre cuando el escaneo se completa
document.addEventListener("intel.xdk.device.barcode.scan",function(evt){
    if (evt.success == true) {
        //Si el escaneo se realiza correctamente
        alert(evt.codedata);
        document.getElementById('web').src = evt.codedata;
    }else {
        //Fallo al escanear
        alert("Fallo al escanear. Inténtalo de nuevo.");
    }
},false);
    