function iniciar() {
    setDiaMin();
    document.laReserva.addEventListener("input", controlar, false);
}
function setDiaMin() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //Enero es  0!!!!
    let yyyy = today.getFullYear();

    if (dd < 10) { // Normalizo DIA: Agrego un 0 adelante a los dias menores a 10
        dd = '0' + dd;
    }

    if (mm < 10) { // Normalizo MES: Agrego un 0 adelante a los meses menores a 10
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("t_fecha").setAttribute("min", today); //EL ATRIBUTO MIN ESTA AUTOMATIZADO
}
function controlar(e) {
    var elemento = e.target;
    if (elemento.validity.valid) {
        elemento.style.background = 'white';
    } else {
        elemento.style.background = "#F1BDB1";
    }
}
function enviarMensaje() {

        const valorEntrada = 1500;
        let cantidad = document.getElementById("t_numero").value;
        let nombre = document.getElementById("t_nombre").value;
        let espectaculo = document.getElementById("t_espectaculo").value;
        let fecha = document.getElementById("t_fecha").value;
        let mail = document.getElementById("t_correo").value;
        alert(nombre + " ha reservado " + cantidad + " tickets para ver " + espectaculo + " el día " + fecha + " por valor $ " + (valorEntrada * cantidad) + ". Recibira un mail a " + mail);
   
}
window.addEventListener("load", iniciar, false);
