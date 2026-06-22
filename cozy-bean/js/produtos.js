// ================================
// BASE DE DADOS - PRODUTOS
// ================================

const produtos = [
    // CAFÉS
    {
        id: 1,
        nome: "Espresso Puro",
        categoria: "cafes",
        descricao: "Café espresso 100% arábica, intenso e encorpado",
        preco: 8.50,
        tamanho: "30ml"
    },
    {
        id: 2,
        nome: "Cappuccino Artesanal",
        categoria: "cafes",
        descricao: "Espresso com espuma de leite vaporizado, toque de chocolate",
        preco: 12.00,
        tamanho: "240ml"
    },
    {
        id: 3,
        nome: "Latte Premium",
        categoria: "cafes",
        descricao: "Café com leite quente e suave, arte latte incluído",
        preco: 13.50,
        tamanho: "250ml"
    },
    {
        id: 4,
        nome: "Macchiato Italiano",
        categoria: "cafes",
        descricao: "Espresso com pequena quantidade de espuma de leite",
        preco: 11.00,
        tamanho: "35ml"
    },
    {
        id: 5,
        nome: "Café com Leite Tradicional",
        categoria: "cafes",
        descricao: "Clássico coador coado na hora, coado manualmente",
        preco: 9.00,
        tamanho: "250ml"
    },
    {
        id: 6,
        nome: "Cortado Perfeito",
        categoria: "cafes",
        descricao: "Café forte com um pouco de leite, equilíbrio perfeito",
        preco: 10.50,
        tamanho: "120ml"
    },

    // BEBIDAS QUENTES
    {
        id: 7,
        nome: "Chocolate Quente Premium",
        categoria: "bebidas",
        descricao: "Chocolate belga derretido com leite quente, marshmallow",
        preco: 14.00,
        tamanho: "250ml"
    },
    {
        id: 8,
        nome: "Chai Latte",
        categoria: "bebidas",
        descricao: "Chá especiado com leite vaporizado e canela",
        preco: 12.50,
        tamanho: "250ml"
    },
    {
        id: 9,
        nome: "Chá Camomila",
        categoria: "bebidas",
        descricao: "Chá camomila orgânico, relaxante e aromático",
        preco: 8.00,
        tamanho: "250ml"
    },
    {
        id: 10,
        nome: "Café com Canela",
        categoria: "bebidas",
        descricao: "Café espresso com toque de canela e leite",
        preco: 11.50,
        tamanho: "240ml"
    },

    // BEBIDAS FRIAS
    {
        id: 11,
        nome: "Iced Coffee Premium",
        categoria: "frios",
        descricao: "Café espresso gelado com leite e gelo, refrescante",
        preco: 13.00,
        tamanho: "350ml"
    },
    {
        id: 12,
        nome: "Cold Brew",
        categoria: "frios",
        descricao: "Café preparado a frio por 12 horas, suave e encorpado",
        preco: 14.50,
        tamanho: "350ml"
    },
    {
        id: 13,
        nome: "Frappuccino Caramelo",
        categoria: "frios",
        descricao: "Café batido com leite, gelo, calda de caramelo",
        preco: 15.50,
        tamanho: "400ml"
    },
    {
        id: 14,
        nome: "Iced Tea Limão",
        categoria: "frios",
        descricao: "Chá gelado com limão fresco, bebida refrescante",
        preco: 9.50,
        tamanho: "350ml"
    },
    {
        id: 15,
        nome: "Smoothie Morango",
        categoria: "frios",
        descricao: "Smoothie de morango, iogurte e mel, nutritivo",
        preco: 16.00,
        tamanho: "400ml"
    },

    // DOCES & SALGADOS
    {
        id: 16,
        nome: "Brownie Belga",
        categoria: "doces",
        descricao: "Brownie de chocolate belga, úmido e delicioso",
        preco: 12.00,
        tamanho: "1 un"
    },
    {
        id: 17,
        nome: "Croissant Francês",
        categoria: "doces",
        descricao: "Croissant folhado crocante, ótimo com café",
        preco: 10.50,
        tamanho: "1 un"
    },
    {
        id: 18,
        nome: "Bolo de Cenoura",
        categoria: "doces",
        descricao: "Bolo caseiro de cenoura com calda de chocolate",
        preco: 8.50,
        tamanho: "1 fatia"
    },
    {
        id: 19,
        nome: "Bolo Floresta Negra",
        categoria: "doces",
        descricao: "Bolo clássico com chocolate, cerejas e chantilly",
        preco: 18.00,
        tamanho: "1 fatia"
    },
    {
        id: 20,
        nome: "Macarrão Francês",
        categoria: "doces",
        descricao: "Macaron variado sabores, delicado e colorido",
        preco: 14.00,
        tamanho: "3 un"
    },
    {
        id: 21,
        nome: "Bolo de Chocolate",
        categoria: "doces",
        descricao: "Bolo de chocolate meio amargo, cobertura ganache",
        preco: 9.00,
        tamanho: "1 fatia"
    },
    {
        id: 22,
        nome: "Pão de Queijo",
        categoria: "doces",
        descricao: "Pão de queijo quente recém-saído do forno",
        preco: 7.50,
        tamanho: "1 un"
    },
    {
        id: 23,
        nome: "Tortinha de Maçã",
        categoria: "doces",
        descricao: "Tortinha caseira com maçã e canela, quentinha",
        preco: 11.00,
        tamanho: "1 un"
    },
    {
        id: 24,
        nome: "Cupcake Decorado",
        categoria: "doces",
        descricao: "Cupcake com cobertura decorada, vários sabores",
        preco: 10.00,
        tamanho: "1 un"
    },
];

// ================================
// VARIÁVEIS GLOBAIS
// ================================

let carrinho = [];
let produtosFiltrados = [...produtos];

// ================================
// INICIALIZAÇÃO
// ================================

document.addEventListener('DOMContentLoaded', function() {
    renderizarProdutos();
    inicializarFiltros();
    inicializarBusca();
    carregarCarrinho();
});

// ================================
// RENDERIZAR PRODUTOS
// ================================

function renderizarProdutos() {
    const grid = document.getElementById('produtosGrid');
    const semResultado = document.getElementById('semResultado');

    grid.innerHTML = '';

    if (produtosFiltrados.length === 0) {
        semResultado.style.display = 'block';
        return;
    }

    semResultado.style.display = 'none';

    produtosFiltrados.forEach(produto => {
        const card = criarCardProduto(produto);
        grid.appendChild(card);
    });

    // Animar cards ao aparecer
    document.querySelectorAll('.produto-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ================================
// CRIAR CARD PRODUTO
// ================================

function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'col-lg-3 col-md-6 col-12 fade-in';
    
    const nomeCategoria = obterNomeCategoria(produto.categoria);

    card.innerHTML = `
        <div class="produto-card">
            <div class="produto-imagem">
                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #C67A42 0%, #a65f2f 100%); display: flex; align-items: center; justify-content: center;">
                    <i class="bi bi-cup-straw" style="font-size: 4rem; color: rgba(255,255,255,0.6);"></i>
                </div>
                <span class="produto-categoria">${nomeCategoria}</span>
            </div>
            <div class="produto-body">
                <h6 class="produto-titulo">${produto.nome}</h6>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-info">
                    <span class="produto-tamanho">
                        <i class="bi bi-cup"></i>${produto.tamanho}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
                </div>
                <div class="produto-footer mt-3">
                    <div class="btn-quantidade">
                        <button onclick="decrementarQuantidade(this)">-</button>
                        <input type="number" value="1" min="1" readonly>
                        <button onclick="incrementarQuantidade(this)">+</button>
                    </div>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho(${produto.id}, this)">
                        <i class="bi bi-bag-plus me-1"></i>Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

// ================================
// FUNÇÕES DE QUANTIDADE
// ================================

function incrementarQuantidade(button) {
    const input = button.parentElement.querySelector('input');
    input.value = parseInt(input.value) + 1;
}

function decrementarQuantidade(button) {
    const input = button.parentElement.querySelector('input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// ================================
// ADICIONAR AO CARRINHO
// ================================

function adicionarAoCarrinho(produtoId, button) {
    const input = button.parentElement.querySelector('input');
    const quantidade = parseInt(input.value);
    const produto = produtos.find(p => p.id === produtoId);

    if (!produto) return;

    // Buscar se já existe no carrinho
    const itemCarrinho = carrinho.find(item => item.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produtoId,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: quantidade
        });
    }

    // Feedback visual
    const iconeBefore = button.innerHTML;
    button.innerHTML = '<i class=\"bi bi-check-circle me-1\"></i>Adicionado!';
    button.style.background = '#28a745';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = iconeBefore;
        button.style.background = '';
        button.disabled = false;
        input.value = 1;
    }, 1500);

    // Salvar carrinho
    salvarCarrinho();
    atualizarCarrinho();
    atualizarBadgeCarrinho();
}

// ================================
// GERENCIAR CARRINHO
// ================================

function atualizarCarrinho() {
    const carrinhoContent = document.getElementById('carrinhoContent');

    if (carrinho.length === 0) {
        carrinhoContent.innerHTML = `
            <div class="alert alert-info text-center">
                <i class="bi bi-emoji-smile me-2"></i>
                Seu carrinho está vazio. Adicione produtos para começar!
            </div>
        `;
        document.getElementById('totalCarrinho').textContent = '0.00';
        return;
    }

    let html = '<div class="table-responsive"><table class="table">';
    let total = 0;

    carrinho.forEach((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        html += `
            <tr>
                <td>
                    <div>
                        <strong>${item.nome}</strong><br>
                        <small class="text-muted">R$ ${item.preco.toFixed(2)}</small>
                    </div>
                </td>
                <td>
                    <div class="btn-quantidade">
                        <button onclick="atualizarQuantidadeCarrinho(${index}, -1)">-</button>
                        <input type="number" value="${item.quantidade}" readonly>
                        <button onclick="atualizarQuantidadeCarrinho(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="text-end">
                    <div>
                        <strong>R$ ${subtotal.toFixed(2)}</strong><br>
                        <button class="btn btn-sm btn-danger mt-2" onclick="removerDoCarrinho(${index})\">\n                            <i class=\"bi bi-trash\"></i>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n        `;\n    });\n\n    html += '</table></div>';\n\n    carrinhoContent.innerHTML = html;\n    document.getElementById('totalCarrinho').textContent = total.toFixed(2);\n}\n\nfunction atualizarQuantidadeCarrinho(index, delta) {\n    carrinho[index].quantidade += delta;\n\n    if (carrinho[index].quantidade <= 0) {\n        removerDoCarrinho(index);\n        return;\n    }\n\n    salvarCarrinho();\n    atualizarCarrinho();\n    atualizarBadgeCarrinho();\n}\n\nfunction removerDoCarrinho(index) {\n    carrinho.splice(index, 1);\n    salvarCarrinho();\n    atualizarCarrinho();\n    atualizarBadgeCarrinho();\n}\n\nfunction atualizarBadgeCarrinho() {\n    const badge = document.querySelector('.cart-count');\n    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);\n\n    if (totalItens > 0) {\n        badge.style.display = 'inline-block';\n        badge.textContent = totalItens;\n    } else {\n        badge.style.display = 'none';\n    }\n}\n\nfunction salvarCarrinho() {\n    localStorage.setItem('carrinho_cozybean', JSON.stringify(carrinho));\n}\n\nfunction carregarCarrinho() {\n    const saved = localStorage.getItem('carrinho_cozybean');\n    if (saved) {\n        carrinho = JSON.parse(saved);\n        atualizarBadgeCarrinho();\n    }\n}\n\n// ================================\n// FILTROS\n// ================================\n\nfunction inicializarFiltros() {\n    const radioButtons = document.querySelectorAll('input[name=\"categoria\"]');\n\n    radioButtons.forEach(radio => {\n        radio.addEventListener('change', function() {\n            filtrarProdutos();\n        });\n    });\n}\n\nfunction filtrarProdutos() {\n    const categoriaSelecionada = document.querySelector('input[name=\"categoria\"]:checked').value;\n    const termoBusca = document.getElementById('searchInput').value.toLowerCase();\n\n    produtosFiltrados = produtos.filter(produto => {\n        const matchCategoria = categoriaSelecionada === 'todos' || produto.categoria === categoriaSelecionada;\n        const matchBusca = produto.nome.toLowerCase().includes(termoBusca) || \n                          produto.descricao.toLowerCase().includes(termoBusca);\n        return matchCategoria && matchBusca;\n    });\n\n    renderizarProdutos();\n}\n\n// ================================\n// BUSCA\n// ================================\n\nfunction inicializarBusca() {\n    const searchInput = document.getElementById('searchInput');\n    let timeoutId;\n\n    searchInput.addEventListener('input', function() {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => {\n            filtrarProdutos();\n        }, 300);\n    });\n}\n\n// ================================\n// UTILITÁRIOS\n// ================================\n\nfunction obterNomeCategoria(categoria) {\n    const nomes = {\n        'cafes': 'Cafés',\n        'bebidas': 'Quentes',\n        'frios': 'Gelados',\n        'doces': 'Doces'\n    };\n    return nomes[categoria] || categoria;\n}\n