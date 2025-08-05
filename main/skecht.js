document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const reiniciarFonte = document.getElementById('reinicia-fonte');
    let messageFonte = document.getElementById('aviso-fonte');
    let tamanhoAtualFonte = 1;
    let imagemFundo = true;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        if(tamanhoAtualFonte > 5){
            tamanhoAtualFonte = 5;
            messageFonte.textContent = "Limite máximo de fonte atingido";
        }else{messageFonte.textContent = `Tamanho aumentado para ${tamanhoAtualFonte}`}
    })
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        if(tamanhoAtualFonte < 0.2){
            tamanhoAtualFonte = 0.2;
            messageFonte.textContent = "Limite mínimo de fonte atingido";
        }else{messageFonte.textContent = `Tamanho diminuido para ${tamanhoAtualFonte}`}
    })
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })
    reiniciarFonte.addEventListener('click', function(){
        tamanhoAtualFonte = 1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        messageFonte.textContent = "";
    })
})
ScrollReveal().reveal('#Home', { delay: 500 });
ScrollReveal().reveal('#News', { delay: 500 });
ScrollReveal().reveal('#Contact', { delay: 500 });