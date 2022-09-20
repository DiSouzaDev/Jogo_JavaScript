var conteudoA = "<img src='imagens/' /> <h2>O princípio...</h2> <p>No princípio, a deusa da prosperidade Freya com os demais deuses, criaram uma árvore, cujo propósito era sustentar a vida do Mundo.</p> \n<p>Freya designou Seth, deus da guerra e da força para cuidar dela.</p> \n<p>Eras depois, Seth se apaixona por uma humana de seu reino, a mais bela, e desse amor proibido, é gerada uma criança, com cabelos rosas como as flores de cerejeiras, e vermelhos como o magma ardente. Freya foi contra seu nascimento.</p> \n<p>Em uma noite de comemoração, Seth deu uma grande festa, e com exceção de Freya, convidou a todos os deuses para com ele selebrar a grandeza da árvore da vida.</p> \n<p>Freya não aceitou esse tratamento.</p> \n<p>Na mesma noite, após a festa, Freya se passou pela esposa de Seth, e com brutalidade, o assassinou. Ela então, rouba o broto da árvore da vida e o leva para seu território. \n<p>Furiosos, os demais deuses decidiram isolar seu território do restante do continente, transformando-o em uma ilha.</p> \n<p>Com a broto fora de seu lugar de origem, as belezas naturais do reino de Seth começaram a desaparecer, e um processo de desertificação começou.</p> \n<p>O reino foi mergulhado em uma era de escassez, pobreza e fome. Mesmo 20 anos depois, o povo de Seth nunca esqueceu essa dor.</p> <button onclick='carregarConteudo(conteudoB)'>Continuar</button>";

var conteudoB = "<img src='imagens/' /> <h2>A carta...</h2>  <p>conteúdo da carta aqui... + audio bonitim</p> <button onclick='carregarConteudo(conteudoC)'>Continuar</button>";

var conteudoC = "<img src='imagens/' />  <h2>O começo da jornada</h2> <p>Maya, após abrir a carta deixada por sua mãe, monta em seu cavalo e vai em direção ao vilarejo mais próximo.</p> \n<p>Ela compra uma suprimentos e uma espada básica para sua jornada.</p> \n<p>Ferreiro: -Você não irá muito longe só com essa espada. Vá falar com o velho sábio, ele pediu para lhe ver antes de partir.</p> \n<p>Maya então vai ao centro do vilarejo em busca do ancião.</p> \n<p>Ela  o encontra perto de um rio, já seco.</p> \n<p>Maya: - Senhor ancião, o ferreiro me pediu para te ver.</p> \n<p>Ansião: - Sim, eu queria lhe desejar boa sorte em sua jornada, e também lhe contar algo...</p> \n<p>- Existe uma arma, montanhas de skadi, que poderia ajudar muito a jovem garota. Após ouvir o que o velho tinha a dizer, maya tem duas Decisões.</p><button onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>";

var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo) {
    elemento.innerHTML = conteudo;
}

function mudarEstilos() {
    //Dentro dessa função, escreva o codigo para alterar o estilo do elemento com o id "text". 
    //A cor do texto deve ser verde, o tamanho do texto deve ser 15px e a fonte escolhida deve ser Arial;
    //Escreva sua resposta no espaço abaixo.  
    //Um exemplo de alteração de estilos por javascript: text.style.fontFamily = "Comic Sans MS";
    // font-family: banana;

    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "white";
    text.style.padding = "20";
    text.style.backgroundColor = "#333";

}

function modoEscuro() {
    var corpo = document.getElementById('corpo');
    corpo.classList.toggle('black');
}

/*function modobranco () {
    var corpo = document.getElementById('corpo');
    corpo.classList.remove('black');
}   e add outras propiedades. 
*/
carregarConteudo(conteudoA)