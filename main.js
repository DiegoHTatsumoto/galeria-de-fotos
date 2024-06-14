$(document).ready(function(){
    console.log(document.querySelector("header button"));
    console.log($('#botao-cancelar'));

    $("header button").click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#url-da-img').val();
        const novoItem = $('<li style="display: none;"></li>'); // Item inicialmente oculto
        
        // Criação correta do elemento <img> com interpolação de string
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        // Adição do link com a imagem
        $(`
            <div class="img-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" alt="ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(); // Exibir o novo item com efeito de fade-in
        $('#url-da-img').val(''); // Limpar o campo de entrada
    });
});

