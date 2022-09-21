var conteudoA = "<img src='imagens/' /> <h2>O princípio...</h2> <p>No princípio, a deusa da prosperidade Freya com os demais deuses, criaram uma árvore, cujo propósito era sustentar a vida do Mundo.</p> \n<p>Freya designou Seth, deus da guerra e da força para cuidar dela.</p> \n<p>Eras depois, Seth se apaixona por uma humana de seu reino, a mais bela, e desse amor proibido, é gerada uma criança, com cabelos rosas como as flores de cerejeiras, e vermelhos como o magma ardente. Freya foi contra seu nascimento.</p> \n<p>Em uma noite de comemoração, Seth deu uma grande festa, e com exceção de Freya, convidou a todos os deuses para com ele selebrar a grandeza da árvore da vida.</p> \n<p>Freya não aceitou esse tratamento.</p> \n<p>Na mesma noite, após a festa, Freya se passou pela esposa de Seth, e com brutalidade, o assassinou. Ela então, rouba o broto da árvore da vida e o leva para seu território. \n<p>Furiosos, os demais deuses decidiram isolar seu território do restante do continente, transformando-o em uma ilha.</p> \n<p>Com a broto fora de seu lugar de origem, as belezas naturais do reino de Seth começaram a desaparecer, e um processo de desertificação começou.</p> \n<p>O reino foi mergulhado em uma era de escassez, pobreza e fome. Mesmo 20 anos depois, o povo de Seth nunca esqueceu essa dor.</p> <button onclick='carregarConteudo(conteudoB)'>Continuar</button>";

var conteudoB = "<img src='imagens/' /> <h2>A carta...</h2>  <p>conteúdo da carta aqui... + audio bonitim</p> <button onclick='carregarConteudo(conteudoC)'>Continuar</button>";

var conteudoC = "<img src='imagens/' />  <h2>O começo da jornada</h2> <p>Maya, após abrir a carta deixada por sua mãe, monta em seu cavalo e vai em direção ao vilarejo mais próximo.</p> \n<p>Ela compra suprimentos e uma espada básica para sua jornada.</p> \n<p>Ferreiro: - Você não irá muito longe só com essa espada. Vá falar com o velho, ele pediu para lhe ver antes de partir.</p> \n<p>Maya então vai ao centro do vilarejo em busca do ancião.</p> \n<p>Ela  o encontra perto de um rio, já seco.</p> \n<p>Maya: - Senhor, o ferreiro disse que queria me ver.</p> \n<p>Ansião: - Sim, eu queria lhe desejar boa sorte em sua jornada, e também lhe contar algo...</p> \n<p>- Nas montanhas gélidas de skadi, existe uma arma, que dizem ser capaz de matar qualquer coisa. Se ela existir, o quanto não poderá te ajudar?</p> \n<p>O velho sorri, deseja-lhe boa sorte novamente e caminha a beira do rio.</p> \n<p>Após ouvir seu conselho, Maya decide:</p> <button onclick='carregarConteudo(conteudoD1)'>- Vou seguir para as montanhas de skadi e procurar pela arma.</button> <button onclick='carregarConteudo(conteudoD2)'>Vou ir direto para a capital de hefesto.</button>";

var conteudoD1 = "<img src='imagens/' /> <h2>Escolha seu caminho</h2>  <p>Há uma bifurcação no caminho, para qual lado você vai?</p> <button onclick='carregarConteudo(conteudoD1Direita)'>Ir pela direita</button> <button onclick='carregarConteudo(conteudoD1Esquerda)'>Ir pela esquerda</button>";

var conteudoD1Direita = "<img src='imagens/' /> <h2>Saqueadores</h2>  <p>Você é atacada por saqueadores!</p> \n<p>Maya luta bravamente, mesmo assim tem suas coisas levadas. Ela não desiste e segue os bandidos até um vulcão. Você não tem escolha a não ser atravessar esse caminho sinuoso</p> <button onclick='carregarConteudo(conteudoDVulcao)'>Ir pela direita</button>";

var conteudoD1Esquerda = "<img src='imagens/' /> <h2>Calor sem precedentes</h2>  <p>O caminho escolhido dá para um vulcão, você não tem escolha a não ser atravessar esse caminho sinuoso.</p> <button onclick='carregarConteudo(conteudoDVulcao)'>Ir pela direita</button> <button onclick='carregarConteudo(conteudoC)'>Ir pela direita</button>";

var conteudoDVulcao = "<img src='imagens/' /> <h2>Um ser de lava</h2>  <p>lutinha da maya com o monstro, ela derrota o bicho e libera o poder de fogo. </p> <button onclick='carregarConteudo(conteudoD1Direita)'>Ir pela direita</button>";

var conteudoD2 = "<img src='imagens/' /> <h2>--</h2>  <p>--</p> <button onclick='carregarConteudo()'>--</button> <button onclick='carregarConteudo()'></button>"; 

var conteudoE = "<img src='imagens/' /> <h2>Fronteiras de Hefesto</h2>  <p>Você chegou as fronteiras de hefesto</p> <button onclick='carregarConteudo()'>--</button> <button onclick='carregarConteudo()'></button>";

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