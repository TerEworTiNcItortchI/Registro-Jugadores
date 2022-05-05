function capturar() {
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var celular = document.getElementById("celular").value;
    var direccion = document.getElementById("direccion").value;
    var cedula = document.getElementById("cedula").value;
    var correo = document.getElementById("correo").value;
    var contrasena_correo = document.getElementById("contrasena_correo").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var expedicion = document.getElementById("expedicion").value;
    var observaciones = document.getElementById("observaciones").value;
    var profesion = document.getElementById("profesion").value;

    let jugador = [
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        celular,
        direccion,
        cedula,
        profesion,
        correo,
        contrasena_correo,
        nacimiento,
        expedicion,
        observaciones
    ];
    // console.log(jugador)
    return jugador;
}

function guardar_txt() {
    let jugador = capturar();

    var nacimiento = convertDateFormat(jugador[10])
    var expedicion = convertDateFormat(jugador[11])

    let arr_nac = nacimiento.split("/")
    let arr_exp = expedicion.split("/")
    console.log(arr_nac)
    // titulo archivo
    var nombre_archivo = "jugador_" + jugador[0] + "_" + jugador[2];
    // script
    var texto = "::nom::" + jugador[0] + "{tab}" + jugador[1] + "{tab}" + jugador[2] + "{tab}" + jugador[3]
        + "\n::cel::" + jugador[4]
        + "\n::dir::" + jugador[5]
        + "\n::ced::" + jugador[6]
        + "\n::pro::" + jugador[7]
        + "\n::cor::" + jugador[8]
        + "\n::con::" + jugador[9]
        + "\n::nac::" + nacimiento
        + "\n::exp::" + expedicion
        + "\n::obs::" + jugador[12]
        + "\n::pos::541030"
        + "\n!1::send "+arr_nac[0] + "{tab}" + arr_nac[1] + "{tab}" + arr_nac[2]
        + "\n!2::send "+arr_exp[0] + "{tab}" + arr_exp[1] + "{tab}" + arr_exp[2]
        // + "\n!2::send "+
        // + "\n!3::send "+
        // + "\n!4::send "+arr_exp[0]
        // + "\n!5::send "+arr_exp[1]
        // + "\n!6::send "+arr_exp[2]
    guardarArchivoDeTexto(texto, nombre_archivo);
}

const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: "code/ahk" });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
};


// convertir fecha aaaa/mm/dd to dd/mm/aaaa
function convertDateFormat(string) {
    var info = string.split('-').reverse().join('/');
    return info;
}
