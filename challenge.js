const textArea = document.querySelector(".text_area");
const mensagem = document.querySelector(".mensagem");
const paragrafo = document.querySelector(".container_digite");
const subtitulo = document.querySelector(".mensagem_aviso");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
//console.table(matrizCodigo)
//console.log(textArea.value);

//const mensagemInicial = document.querySelector('.text_area');


 
//Função do botão para criptografar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);

    if (!/^[a-z ]+$/.test(textoEncriptado)) {
        alert("Por favor, digite apenas letras minúsculas,espaços e sem acento!.");  
        return;
    }
    mensagem.value = textoEncriptado;
    textArea.value = ""
    ocultarImagem();
    ocultarMensagem();
    console.log(textArea.value);
        }
function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
    return;
}

//Função do botão de desencriptar
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = ""
    ocultarMensagem();
    ocultarImagem();
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

//Função do botão de copiar o texto da área de entrada
function btnCopiar() {
    const mensagemFinal = mensagem;
    navigator.clipboard.writeText(mensagemFinal.value).then(() => {
        alert('Cópia efetuada - digite CTRL-V para descriptograr o texto!');
    }).catch(err => {
        alert('Erro ao copiar o texto.');
    });
}

//Função criada para coultar a mensagem da caixa de criptografia ao serem clicados os botões
function ocultarMensagem() {
    const mensagem = document.querySelector('.mensagem_aviso');
    const paragrafo = document.querySelector('.container_digite');

    if (mensagem) {
        mensagem.style.display = 'none';
    }
    if (paragrafo) {
        paragrafo.style.display = 'none';
    }
}
//Função criada para ocultar a imagem da boneca da caixa de criptografia ao serem clicados os botões
function ocultarImagem() {
    const figura = document.querySelector('.mensagem')
    mensagem.style.backgroundImage = "none";
}   
