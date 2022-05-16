

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        /*
            OBJETIVO 1- quando passar o mouse em cima do personagem temos que: 

            - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar animação a ele

            - retirar a classe selecionado do personagem que estava selecionado antes
        */
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        /* 
            OBJETIVO 2- quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande

            - alterar imagem jogador 1

            - alterar nome jogador 1
        */
       
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return; //impedir que o ultron seja uma opção de seleção

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})






