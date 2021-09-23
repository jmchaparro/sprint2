function checkNombre() {
  var validanombre = document.getElementById("nombre");
  if (validanombre.value.length == 0) {
    validanombre.style.border = "1px solid #f50808";
    alert("false 1");
    return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(validanombre.value)) {
    validanombre.style.border = "1px solid #f50808";
    alert("false 2");
    return false;
  } else {
    validanombre.style.border = "1px solid #dee2e6";
    alert("true");
    return true;
  }
}

function checkApellido() {
  var validaApellido = document.getElementById("apellido");
  if (validaApellido.value.length == 0) {
    validaApellido.style.border = "1px solid #f50808";
    alert("false 1");
    return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(validaApellido.value)) {
    validaApellido.style.border = "1px solid #f50808";
    alert("false 2");
    return false;
  } else {
    validaApellido.style.border = "1px solid #dee2e6";
    alert("true");
    return true;
  }
}

function checkTelefono() {
  var telefono = document.getElementById("telefono").value;
  if (!isNaN(telefono) && telefono.length === 7) {
    alert("Exitoso!");
    return true;
  } else {
    alert("Deben ser 7 digitos!");
    return false;
  }
}

function checkCorreo() {
  let email = document.getElementById("correo").value;
  let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (email == null || email.length == 0) {
    alert("Campo correo es obligatorio");
    return false;
  } else if (regex.test(email) == false) {
    alert("ingrese un correo valido");
    return false;
  } else {
    return true;
  }
}

function mostrarContrasena() {
  var tipo = document.getElementById("password");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}

function checkContrasena() {
  var validapass = document.getElementById("password");
  if (
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,25}$/gm.test(validapass.value)
  ) {
    document.getElementById("seguridad").innerHTML = "Clave segura!";
    console.log(true);
    // alert("true");
    return true;
  } else {
    document.getElementById("seguridad").innerHTML =
      "<div class='error'>Debe ingresar por lo menos  una letra mayúscula,  una minúscula, un número  y con una longitud  mayor o igual a 8 dígitos</div>";
    console.log(false);
    // alert("false");
    return false;
  }
}

function validate() {
  checkNombre();
  checkApellido();
  checkTelefono();
  checkCorreo();
  checkContrasena();
}

module.exports = { checkNombre,   checkApellido, checkTelefono, checkCorreo, checkContrasena };
