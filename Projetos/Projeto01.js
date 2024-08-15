const prompt = require('prompt-sync')();

let listaDeCompras = [];

function exibirMenu() {
    console.log("\nMenu de Opções:");
    console.log("1. Adicionar um item");
    console.log("2. Remover um item");
    console.log("3. Pesquisar item");
    console.log("4. Ordenar a lista");
    console.log("5. Exibir lista");
    console.log("6. Limpar a lista");
    console.log("7. Encerrar programa");
}

function adicionarItem() {
    const item = prompt('Digite o nome do item para adicionar: ');
    listaDeCompras.push(item);
    console.log(`${item} foi adicionado à lista de compras.`);
}

function removerItem() {
    const item = prompt('Digite o nome do item para remover: ');
    const index = listaDeCompras.indexOf(item);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${item} foi removido da lista de compras.`);
    } else {
        console.log(`${item} não encontrado na lista de compras.`);
    }
}

function pesquisarItem() {
    const item = prompt('Digite o nome do item para pesquisar: ');
    if (listaDeCompras.includes(item)) {
        console.log(`${item} está na lista de compras.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
}

function ordenarLista() {
    listaDeCompras.sort();
    console.log("Lista de compras ordenada.");
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

function limparLista() {
    listaDeCompras = [];
    console.log("A lista de compras foi limpa.");
}

function main() {
    let opcao;
    do {
        exibirMenu();
        opcao = prompt('Escolha uma opção: ');
        switch (opcao) {
            case '1':
                adicionarItem();
                break;
            case '2':
                removerItem();
                break;
            case '3':
                pesquisarItem();
                break;
            case '4':
                ordenarLista();
                break;
            case '5':
                exibirLista();
                break;
            case '6':
                limparLista();
                break;
            case '7':
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '7');
}

main();
