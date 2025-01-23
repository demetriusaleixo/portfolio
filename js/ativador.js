const acordeonAtivador = document.querySelectorAll('.acordeon .ativador');

acordeonAtivador.forEach((ativador) => {
    ativador.addEventListener('click', (e) => {
        const acordeon = ativador.parentElement;
        const isAtivo = acordeon.classList.contains('ativo');

        if (isAtivo) {
            acordeon.classList.remove('ativo');
        } else {
            acordeon.classList.add('ativo');
        }
    })
})