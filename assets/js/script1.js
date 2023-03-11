function sendEmail(event) {
  emailjs.init("Uf-oO0lZ6F79nLi9w");
  event.preventDefault();
  
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let assunto = document.getElementById('assunto').value;
  let mensagem = document.getElementById('mensagem').value;
  let contato = document.getElementById('contato').value;
  
  let emailData = {
  to_name: 'WebBoys',
  from_name: nome,
  from_email: email,
  subject: assunto,
  message: mensagem,
  };
  
  emailjs.sendForm('service_liq9ztn', 'contato', emailData)
  .then(function() {
      console.log('SUCCESS!');
  }, function(error) {
      console.log('FAILED...', error);
  });
  /*emailjs.send('service_liq9ztn', contato, emailData)
  .then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
  alert('Seu email foi enviado com sucesso!');
  }, function(error) {
  console.log('FAILED...', error);
  alert('Ocorreu um erro ao enviar o seu email. Por favor, tente novamente mais tarde.');
  });*/

  }
  