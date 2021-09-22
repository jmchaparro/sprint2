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

function validate() {
  checkCorreo();
}


// esto es una prueba de git

