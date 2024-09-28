function sendEmail(event) {
    emailjs.init("0b2s8H36UmrQsKvND");  // Inicializando o EmailJS com seu User ID
    event.preventDefault();  // Prevenindo comportamento padrão de envio do formulário

    // Coletando os valores do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let assunto = document.getElementById('assunto').value;
    let mensagem = document.getElementById('mensagem').value;

    // Validação simples para garantir que todos os campos estão preenchidos
    if (!nome || !email || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de e-mail com regex simples
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    // Montando o objeto com os dados do e-mail
    let emailData = {
        to_name: 'WebBoys',
        from_name: nome,
        from_email: email,
        subject: assunto,
        message: mensagem,
    };

    console.log(emailData);  // Exibindo os dados no console para depuração

    // Enviando o e-mail via EmailJS
    emailjs.send('service_4k4gbop', 'template_vvyw5tw', emailData)
        .then(function (response) {
            console.log('Email enviado com sucesso:', response.status, response.text);
            alert("Email enviado com sucesso!");
        }, function (error) {
            console.log('Ocorreu um erro ao enviar o email:', error);
            alert("Erro ao enviar o email, tente novamente mais tarde.");
        });
}
