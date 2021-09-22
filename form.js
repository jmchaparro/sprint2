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

function checkNombre() {
  var validanombre = document.getElementById('nombre');
  if (validanombre.value.length == 0) {
      validanombre.style.border= '1px solid #f50808'; 
      alert("false 1");
      return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(validanombre.value)) {
      validanombre.style.border= '1px solid #f50808'; 
      alert("false 2");
      return false;
  } else {
      validanombre.style.border= '1px solid #dee2e6'; 
      alert("true");
      return true;
  }
}

function validate() {
  checkCorreo();
  checkNombre();
}

module.exports = { checkCorreo, checkNombre }
