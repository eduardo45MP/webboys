function sendEmail() {
    let conteudo = document.getElementById("email").value + " " + document.getElementById("dprojeto").value;
    Email.send({
      Host: "smtp.gmail.com",
      Username: "webboys.freela@gmail.com",
      Password: "iJGE9Nzz9NkXEDU",
      To: "eduardopeixoto45@outlook.com",
      From: "webboys.freela@gmail.com",
      Subject: document.getElementById("projeto").value,
      Body: conteudo 
    }).then(
      message => alert("E-mail enviado com sucesso!")
    );
  }
  