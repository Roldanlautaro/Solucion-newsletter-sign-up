document.getElementById('subscribe-button').addEventListener('click', function(event) {
  event.preventDefault();
  
  var emailInput = document.getElementById('email');
  var errorMessage = document.getElementById('error-message');
  var email = emailInput.value;
  
  if (validateEmail(email)) {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error');
    
    // Mostrar el contenedor del mensaje de éxito
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('success-container').style.display = 'block';
    document.getElementById('success-email').textContent = email;
  } else {
    errorMessage.style.display = 'block';
    emailInput.classList.add('error');
    emailInput.focus();
  }
});

document.getElementById('dismiss-button').addEventListener('click', function() {
  // Ocultar el contenedor del mensaje de éxito y mostrar el formulario nuevamente
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('success-container').style.display = 'none';
  
  // Reiniciar los estilos del formulario
  var emailInput = document.getElementById('email');
  emailInput.classList.remove('error');
  emailInput.value = '';
  document.getElementById('error-message').style.display = 'none';
});

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

