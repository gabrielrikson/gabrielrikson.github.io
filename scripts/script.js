document.addEventListener("DOMContentLoaded", function() {
        
        // Seleciona o botão pelo ID (que você já tem no HTML)
        const btnToggle = document.getElementById('menuToggle');
        
        // Seleciona o menu (a div que tem os links dentro do nav)
        // Atenção: O seletor abaixo procura a classe .menu-mobile DENTRO de nav
        const menuItens = document.querySelector('nav .menu-mobile');

        // Adiciona o evento de clique
        btnToggle.addEventListener('click', function() {
            // Se o menuItens for encontrado, troca a classe
            if (menuItens) {
                menuItens.classList.toggle('active');
            } else {
                console.log("Erro: Menu não encontrado pelo JS");
            }
        });
    });



    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault(); // Impede o redirecionamento para a página do Formspree
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);

      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado! Sua mensagem foi enviada com sucesso.";
          status.style.color = "green";
          status.style.fontWeight = "bold";
          status.style.marginTop = "10px";
          form.reset(); // Limpa os campos do formulário
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Ops! Ocorreu um erro ao enviar o formulário.";
              status.style.color = "red";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Ops! Ocorreu um erro ao enviar o formulário.";
        status.style.color = "red";
      });
    }

    form.addEventListener("submit", handleSubmit);


    // Script do Contador de Caracteres
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const maxLimit = 500; // Certifique-se de que é o mesmo valor do maxlength no HTML

if(messageInput && charCount){
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCount.textContent = `${currentLength} / ${maxLimit}`;

        // (Opcional) Fica vermelho se atingir o limite
        if (currentLength >= maxLimit) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "#999";
        }
    });
}