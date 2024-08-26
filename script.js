// Seleciona os elementos da imagem, texto e botão
const imagem = document.getElementById('imagem');
const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');
const texto = document.getElementById('texto');
const botaocrip = document.getElementById('botaocrip');
const botaodescrip = document.getElementById('botaodescrip');
const copiar = document.getElementById('copiar');
const resultado = document.getElementById('resultado');

// Função para alternar entre a imagem e o texto
function alternarConteudo() {
    // Verifica se a imagem está visível
    if (imagem.style.display !== 'none') {
        // Oculta a imagem e mostra o texto
        imagem.style.display = 'none';
        titulo.style.display = 'none';
        paragrafo.style.display = 'none';  
        resultado.style.display = 'block';  
        copiar.style.display = 'block';
        //texto.textContent = 'Clique para ver a imagem'; // Atualiza o texto do botão
    } 
}

function tratarObjetos() {
    // Verifica se a imagem está visível
        // Oculta a imagem e mostra o texto
        imagem.style.display = 'block';
        titulo.style.display = 'block';
        paragrafo.style.display = 'block';  
        resultado.style.display = 'none';  
        copiar.style.display = 'none';
        //texto.textContent = 'Clique para ver a imagem'; // Atualiza o texto do botão
}

function criptografar() {
    let texto = document.getElementById("texto").value;
    let textoCriptografado = texto
        .toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").textContent = textoCriptografado;
    alternarConteudo();
}

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let textoDescriptografado = texto
        .toLowerCase()
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").textContent = textoDescriptografado;
    alternarConteudo();
}

function copiarTexto() {
    let textoResultado = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(textoResultado)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch((err) => {
            alert("Falha ao copiar o texto: ", err);
        });
    tratarObjetos();
}

// Adiciona um ouvinte de evento ao botão para alternar o conteúdo ao ser clicado
//botao.addEventListener('click', alternarConteudo);