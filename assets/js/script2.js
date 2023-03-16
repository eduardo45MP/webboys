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
   console.log(emailData)

   emailjs.send('service_liq9ztn', 'template_whxr6ae', emailData)
      .then(function (response) {
         console.log('Email enviado com sucesso:', response.status, response.text);
         alert("Email enviado!")
      }, function (error) {
         console.log('Ocorreu um erro ao enviar o email:', error);
         alert("Algum erro ocorreu, tente novamente mais tarde.")
      });
}