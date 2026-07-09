// Funções para manipulação de DOM
function criarElemento(tag, classe) {
    const elemento = document.createElement(tag);
    if (classe) {
        elemento.className = classe;
    }
    return elemento;
}

function adicionarEvento(evento, callback) {
    documento.addEventListener(evento, callback);
}

// Funções para gerenciamento de clientes
function cadastrarCliente() {
    const nomeCliente = document.getElementById("nome-cliente").value;
    if (nomeCliente !== "") {
        const listaClientes = document.getElementById("lista-clientes");
        const novoCliente = criarElemento("li", "cliente");
        novoCliente.innerText = nomeCliente;
        listaClientes.appendChild(novoCliente);
        limparFormulario();
    }
}

function limparFormulario() {
    document.getElementById("nome-cliente").value = "";
}

// Funções para gerenciamento de vendas
function cadastrarVenda() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    if (produto !== "" && quantidade !== "") {
        const listaVendas = document.getElementById("lista-vendas");
        const novaVenda = criarElemento("li", "venda");
        novaVenda.innerText = `${produto} - ${quantidade}`;
        listaVendas.appendChild(novaVenda);
        limparFormulario();
    }
}

// Funções para gerenciamento do estoque
function cadastrarEstoque() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    if (produto !== "" && quantidade !== "") {
        const listaEstoque = document.getElementById("lista-estoque");
        const novoItem = criarElemento("li", "item");
        novoItem.innerText = `${produto} - ${quantidade}`;
        listaEstoque.appendChild(novoItem);
        limparFormulario();
    }
}

// Eventos
adicionarEvento("click", "#cadastrar-cliente", cadastrarCliente);
adicionarEvento("click", "#cadastrar-venda", cadastrarVenda);
adicionarEvento("click", "#cadastrar-estoque", cadastrarEstoque);

// Inicialização do conteúdo da lista de clientes
const listaClientes = document.getElementById("lista-clientes");
const listaVendas = document.getElementById("lista-vendas");
const listaEstoque = document.getElementById("lista-estoque");

// Teste para popular as listas com alguns itens
const clientes = ["João", "Maria", "Pedro"];
const vendas = ["Produto 1 - 10", "Produto 2 - 20"];
const estoque = ["Item 1 - 5", "Item 2 - 15"];

clientes.forEach((cliente) => {
    const novoCliente = criarElemento("li", "cliente");
    novoCliente.innerText = cliente;
    listaClientes.appendChild(novoCliente);
});

vendas.forEach((venda) => {
    const novaVenda = criarElemento("li", "venda");
    novaVenda.innerText = venda;
    listaVendas.appendChild(novaVenda);
});

estoque.forEach((item) => {
    const novoItem = criarElemento("li", "item");
    novoItem.innerText = item;
    listaEstoque.appendChild(novoItem);
});
