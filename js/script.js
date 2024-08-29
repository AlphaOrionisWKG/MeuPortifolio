function mostrarSecao(id) {
    // Esconder todas as seções
    var secoes = document.querySelectorAll('section');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // Mostrar a seção correspondente ao ID clicado
    document.getElementById(id).style.display = 'block';

    // Animação ao clicar
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    document.getElementById('nav-' + id).classList.add('active');
}

// Mostrar a primeira seção por padrão
document.getElementById('port').style.display = 'block';

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    document.getElementById("mensagem").style.display = "block"; // Exibe a mensagem de agradecimento
});

