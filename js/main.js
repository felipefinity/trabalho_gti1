$(document).ready(function() {

  setTimeout(() => {

    //Carousel desktop
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      smartSpeed: 450,
      autoplay: true,
      dots: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      stagePadding: 0,
      responsiveClass:true,
    });
  
  }, 400);
 
});

const caminho = window.location.href;

// Lojas
$(document).on('change', '#cidade', function() { //Ação executada no evento de clique no elemento com ID = "efeito"
  let cidadeSel = $('#cidade').val()
  if (cidadeSel === 'sjdr') {
    $(".loja-sjdr").css({"display": "block"});
    $(".sel-cidade").css({"display": "none"});
    $(".loja-stcruz").css({"display": "none"});
    $(".loja-tiradentes").css({"display": "none"});
    $(".loja-barroso").css({"display": "none"});
    $(".loja-saotiago").css({"display": "none"});
  } else if (cidadeSel === 'scm') {
    $(".loja-stcruz").css({"display": "block"});
    $(".sel-cidade").css({"display": "none"});
    $(".loja-sjdr").css({"display": "none"});
    $(".sel-cidade").css({"display": "none"});
    $(".loja-tiradentes").css({"display": "none"});
    $(".loja-barroso").css({"display": "none"});
    $(".loja-saotiago").css({"display": "none"});
  } else if (cidadeSel === 'tiradentes') {
    $(".loja-tiradentes").css({"display": "block"});
    $(".sel-cidade").css({"display": "none"});
    $(".loja-sjdr").css({"display": "none"});
    $(".loja-stcruz").css({"display": "none"});
    $(".loja-barroso").css({"display": "none"});
    $(".loja-saotiago").css({"display": "none"});
  } else if (cidadeSel === 'barroso') {
    $(".loja-barroso").css({"display": "block"});
    $(".sel-cidade").css({"display": "none"});
    $(".loja-sjdr").css({"display": "none"});
    $(".loja-stcruz").css({"display": "none"});
    $(".loja-tiradentes").css({"display": "none"});
    $(".loja-saotiago").css({"display": "none"});
  } else if (cidadeSel === 'saotiago') {
    $(".loja-saotiago").css({"display": "block"});
    $(".sel-cidade").css({"display": "none"});
    $(".loja-sjdr").css({"display": "none"});
    $(".loja-stcruz").css({"display": "none"});
    $(".loja-tiradentes").css({"display": "none"});
    $(".loja-barroso").css({"display": "none"});
  } else if (cidadeSel === 'selecione') {
    $(".sel-cidade").css({"display": "block"});
    $(".loja-sjdr").css({"display": "none"});
    $(".loja-stcruz").css({"display": "none"});
    $(".loja-tiradentes").css({"display": "none"});
    $(".loja-barroso").css({"display": "none"});
    $(".loja-saotiago").css({"display": "none"});
  }
});

if (caminho == "https://x2b.com.br/esquinao/pages/contato.html" || caminho == "http://127.0.0.1:5500/pages/contato.html")
document.getElementById("formulario-contato").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.init("HeE6IDZPEYCtEzmFl");

  const name = document.getElementById("inputNome").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const suggestion = document.getElementById("inputArea").value.trim();

  const templateParams = {
    from_name: name,
    from_email: email,
    message: suggestion
  };

  // Envio do e-mail usando o EmailJS
  emailjs.send("service_aipysl5", "template_ibkuu5o", templateParams)
      .then(function(response) {
          alert("Email enviado com sucesso!");
      }, function(error) {
          console.log(error)
          alert("Erro ao enviar o email");
      });

})