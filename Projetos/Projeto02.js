const prompt = require('prompt-sync')({sigint: true});
let filmesParaAssistir = [];
let filmesAssistidos = [];

function adicionarFilme() {
    let titulo = prompt('Digite o título do filme: ');
    let ano = prompt('Digite o ano de lançamento do filme: ');
    filmesParaAssistir.push({titulo: titulo, ano: ano});
    console.log(`Filme "${titulo}" adicionado à lista de filmes para assistir.`);
}

function ordenarFilmes() {
    let criterio = prompt('Deseja ordenar por título ou ano? (Digite "titulo" ou "ano"): ');
    if (criterio === 'titulo') {
        filmesParaAssistir.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (criterio === 'ano') {
        filmesParaAssistir.sort((a, b) => a.ano - b.ano);
    } else {
        console.log('Critério inválido. Tente novamente.');
    }
    console.log('Lista de filmes ordenada.');
}

function pesquisarFilme() {
    let titulo = prompt('Digite o título do filme que deseja pesquisar: ');
    let encontrado = filmesParaAssistir.some(filme => filme.titulo === titulo);
    if (encontrado) {
        console.log(`O filme "${titulo}" está na lista de filmes para assistir.`);
    } else {
        console.log(`O filme "${titulo}" não foi encontrado na lista.`);
    }
}

function exibirListas() {
    console.log('\nFilmes para assistir:');
    filmesParaAssistir.forEach(filme => console.log(`${filme.titulo} (${filme.ano})`));
    
    console.log('\nFilmes assistidos:');
    filmesAssistidos.forEach(filme => console.log(`${filme.titulo} (${filme.ano})`));
}

function marcarFilmeComoAssistido() {
    if (filmesParaAssistir.length > 0) {
        let filme = filmesParaAssistir.shift();
        filmesAssistidos.push(filme);
        console.log(`Filme "${filme.titulo}" marcado como assistido.`);
    } else {
        console.log('Não há filmes na lista para assistir.');
    }
}

function removerFilme() {
    let titulo = prompt('Digite o título do filme que deseja remover: ');
    let index = filmesParaAssistir.findIndex(filme => filme.titulo === titulo);
    if (index !== -1) {
        filmesParaAssistir.splice(index, 1);
        console.log(`Filme "${titulo}" removido da lista de filmes para assistir.`);
    } else {
        console.log(`O filme "${titulo}" não foi encontrado na lista.`);
    }
}

function menu() {
    console.log('\nMenu de Opções:');
    console.log('1. Adicionar Filme');
    console.log('2. Ordenar Filmes');
    console.log('3. Pesquisar Filme');
    console.log('4. Exibir Listas');
    console.log('5. Marcar Filme como Assistido');
    console.log('6. Remover Filme');
    console.log('7. Encerrar Programa');
    
    let opcao = prompt('Escolha uma opção: ');
    return opcao;
}

function executarPrograma() {
    let opcao = '';
    while (opcao !== '7') {
        opcao = menu();
        switch(opcao) {
            case '1':
                adicionarFilme();
                break;
            case '2':
                ordenarFilmes();
                break;
            case '3':
                pesquisarFilme();
                break;
            case '4':
                exibirListas();
                break;
            case '5':
                marcarFilmeComoAssistido();
                break;
            case '6':
                removerFilme();
                break;
            case '7':
                console.log('Encerrando o programa...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

executarPrograma();
