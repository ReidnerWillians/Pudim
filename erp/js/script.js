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
        if (!estaCadastrado(nomeCliente)) {
            const listaClientes = document.getElementById("lista-clientes");
            const novoCliente = criarElemento("li", "cliente");
            novoCliente.innerText = nomeCliente;
            listaClientes.appendChild(novoCliente);
            salvarCliente(nomeCliente);
            limparFormulario();
        } else {
            alert(`O cliente ${nomeCliente} já está cadastrado.`);
        }
    } else {
        alert("Por favor, preencha o nome do cliente.");
    }
}

function estaCadastrado(nome) {
    const clientes = obterClientes();
    return clientes.includes(nome);
}

function salvarCliente(nome) {
    const clientes = obterClientes();
    clientes.push(nome);
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

function obterClientes() {
    return JSON.parse(localStorage.getItem("clientes")) || [];
}

function limparFormulario() {
    document.getElementById("nome-cliente").value = "";
}

// Funções para gerenciamento de vendas
function cadastrarVenda() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    if (produto !== "" && quantidade !== "") {
        if (!estaVendida(produto, parseInt(quantidade))) {
            const listaVendas = document.getElementById("lista-vendas");
            const novaVenda = criarElemento("li", "venda");
            novaVenda.innerText = `${produto} - ${quantidade}`;
            listaVendas.appendChild(novaVenda);
            salvarVenda(produto, parseInt(quantidade));
            limparFormulario();
        } else {
            alert(`A venda de ${produto} com ${quantidade} unidades já foi registrada.`);
        }
    } else {
        alert("Por favor, preencha o produto e a quantidade.");
    }
}

function estaVendida(produto, quantidade) {
    const vendas = obterVendas();
    return vendas.find((venda) => venda.produto === produto && venda.quantidade === quantidade);
}

function salvarVenda(produto, quantidade) {
    const vendas = obterVendas();
    vendas.push({ produto, quantidade });
    localStorage.setItem("vendas", JSON.stringify(vendas));
}

function obterVendas() {
    return JSON.parse(localStorage.getItem("vendas")) || [];
}

// Funções para gerenciamento do estoque
function cadastrarEstoque() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    if (produto !== "" && quantidade !== "") {
        if (!estaEmEstoque(produto, parseInt(quantidade))) {
            const listaEstoque = document.getElementById("lista-estoque");
            const novoItem = criarElemento("li", "item");
            novoItem.innerText = `${produto} - ${quantidade}`;
            listaEstoque.appendChild(novoItem);
            salvarEstoque(produto, parseInt(quantidade));
            limparFormulario();
        } else {
            alert(`O item de ${produto} com ${quantidade} unidades já está em estoque.`);
        }
    } else {
        alert("Por favor, preencha o produto e a quantidade.");
    }
}

function estaEmEstoque(produto, quantidade) {
    const estoque = obterEstoque();
    return estoque.find((item) => item.produto === produto && item.quantidade === quantidade);
}

function salvarEstoque(produto, quantidade) {
    const estoque = obterEstoque();
    estoque.push({ produto, quantidade });
    localStorage.setItem("estoque", JSON.stringify(estoque));
}

function obterEstoque() {
    return JSON.parse(localStorage.getItem("estoque")) || [];
}

// Eventos
adicionarEvento("click", "#cadastrar-cliente", cadastrarCliente);
adicionarEvento("click", "#cadastrar-venda", cadastrarVenda);
adicionarEvento("click", "#cadastrar-estoque", cadastrarEstoque);

// Inicialização do conteúdo da lista de clientes
const listaClientes = document.getElementById("lista-clientes");
const listaVendas = document.getElementById("lista-vendas");
const listaEstoque = document.getElementById("lista-estoque");

// Carregar dados dos clientes, vendas e estoque
if (obterClientes().length > 0) {
    obterClientes().forEach((nomeCliente) => {
        const novoCliente = criarElemento("li", "cliente");
        novoCliente.innerText = nomeCliente;
        listaClientes.appendChild(novoCliente);
    });
}

if (obterVendas().length > 0) {
    obterVendas().forEach((venda) => {
        const novaVenda = criarElemento("li", "venda");
        novaVenda.innerText = `${venda.produto} - ${venda.quantidade}`;
        listaVendas.appendChild(novaVenda);
    });
}

if (obterEstoque().length > 0) {
    obterEstoque().forEach((item) => {
        const novoItem = criarElemento("li", "item");
        novoItem.innerText = `${item.produto} - ${item.quantidade}`;
        listaEstoque.appendChild(novoItem);
    });
}

