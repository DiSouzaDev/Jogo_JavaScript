var principio = "<img src='imagens/' /> <h2>O princípio...</h2> <p>No princípio, a deusa da prosperidade Freya com os demais deuses, criaram uma árvore, cujo propósito era sustentar a vida do Mundo.</p> \n<p>Freya designou Seth, deus da guerra e da força para cuidar dela.</p> \n<p>Eras depois, Seth se apaixona por uma humana de seu reino, a mais bela, e desse amor proibido, é gerada uma criança, com cabelos rosas como as flores de cerejeiras, e vermelhos como o magma ardente. Freya foi contra seu nascimento.</p> \n<p>Em uma noite de comemoração, Seth deu uma grande festa, e com exceção de Freya, convidou a todos os deuses para com ele selebrar a grandeza da árvore da vida.</p> \n<p>Freya não aceitou esse tratamento.</p> \n<p>Na mesma noite, após a festa, Freya se passou pela esposa de Seth, e com brutalidade, o assassinou. Ela então, rouba o broto da árvore da vida e o leva para seu território. \n<p>Furiosos, os demais deuses decidiram isolar seu território do restante do continente, transformando-o em uma ilha.</p> \n<p>Com a broto fora de seu lugar de origem, as belezas naturais do reino de Seth começaram a desaparecer, e um processo de desertificação começou.</p> \n<p>O reino foi mergulhado em uma era de escassez, pobreza e fome. Mesmo 20 anos depois, o povo de Seth nunca esqueceu essa dor.</p> <button onclick='carregarConteudo(carta)'>Continuar</button> <button onclick='carregarConteudo(decisaoDificil)'>Carrega o conteudo que eu quiser</button>";

var carta = "<img src='imagens/' /> <h2>A carta...</h2>  <p>conteúdo da carta aqui... + audio bonitim</p> <button onclick='carregarConteudo(inicioJornada)'>Continuar</button>";

var inicioJornada = "<img src='imagens/' />  <h2>O começo da jornada</h2> <p>Maya, após abrir a carta deixada por sua mãe, monta em seu cavalo e vai em direção ao vilarejo mais próximo.</p> \n<p>Ela compra suprimentos e uma espada básica para sua jornada.</p> \n<p>Ferreiro: - Você não irá muito longe só com essa espada. Vá falar com o velho, ele pediu para lhe ver antes de partir.</p> \n<p>Maya então vai ao centro do vilarejo em busca do ancião.</p> \n<p>Ela  o encontra perto de um rio, já seco.</p> \n<p>Maya: - Senhor, o ferreiro disse que queria me ver.</p> \n<p>Ansião: - Sim, eu queria lhe desejar boa sorte em sua jornada, e também lhe contar algo...</p> \n<p>- Nas montanhas gélidas de skadi, existe uma arma, que dizem ser capaz de matar qualquer coisa. Se ela existir, o quanto não poderá te ajudar?</p> \n<p>O velho sorri, deseja-lhe boa sorte novamente e caminha a beira do rio.</p> \n<p>Após ouvir seu conselho, Maya decide:</p> <button onclick='carregarConteudo(montanhasSkadi)'>- Vou seguir para as montanhas de skadi e procurar pela arma.</button>"; //<button onclick='carregarConteudo(capitalHefesto)'>Vou ir direto para a capital de hefesto.</button>

var montanhasSkadi = "<img src='imagens/' /> <h2>Escolha seu caminho</h2>  <p>Depois de andar por um tempo, você Maya encontra uma bifurcação no caminho, para qual lado ela vai?</p> <button onclick='carregarConteudo(caminhoEsquerda)'>Ir pela esquerda</button> <button onclick='carregarConteudo(caminhoDireita)'>Ir pela direita</button>";

var caminhoEsquerda = "<img src='imagens/' /> <h2>Calor sem precedentes</h2>  <p>O caminho escolhido dá para um vulcão, ela não tem escolha a não ser atravessar esse caminho sinuoso.</p> <button onclick='carregarConteudo(vulcao)'>Continuar seu caminho</button>";

var caminhoDireita = "<img src='imagens/' /> <h2>Ataque de saqueadores</h2> <p>Maya luta bravamente, mesmo assim tem suas coisas levadas. Ela então pensa se deve ir atrás dos saqueadores...</p><button onclick='carregarConteudo(naoIrAtras)'>Continuar seu caminho</button> <button onclick='carregarConteudo(irAtras)'>Ir atrás dos saqueadores</button>";

var irAtras = "<img src='imagens/' /> <h2>Um fim trágico</h2> <p>Maya é emboscada por mais ladrões, e não consegue dar conta de todos eles. Ela acaba assassinada.</p><button onclick='carregarConteudo(final)'>Continuar seu caminho</button>"; //completar o final aqui

var naoIrAtras = "<img src='imagens/' /> <h2>Aceitação</h2> <p>Maya aceita que perdeu seu dinheiro, mas pelo menos ainda resta seu equipamento. Ela segue seu caminho.</p><button onclick='carregarConteudo(vulcao)'>Continuar seu caminho</button>";;

var vulcao = "<img src='imagens/' /> <h2>Um ser de lava</h2>  <p>lutinha da maya com o monstro, ela derrota o bicho e libera o poder de fogo. </p> <button onclick='carregarConteudo(fronteiraHefesto)'>Seguir para a fronteira de Hefesto</button>";

// var capitalHefesto = "<img src='imagens/' /> <h2>Longa jornada</h2>  <p>Após ir por um longo caminho, maya para e dorme em um estabelecimento a beira da estrada. De manhã, ela segue seu caminho e encontra uma bifuração na estrada, para qual lado ela vai?</p> <button onclick='carregarConteudo(caminhoEsquerda)'>Ir pela esquerda</button> <button onclick='carregarConteudo(capitalDireita)'>Ir pela direita</button>";

// var capitalDireita = "<img src='imagens/' /> <h2>Longo caminho</h2> <p>Ela continua seu caminho até o anoitecer. De manhã ela se aproxima da fronteira.</p> <button onclick='carregarConteudo(frontHefesto)'>Continuar</button>";

// var frontHefesto = "<img src='imagens/' /> <h2>Fronteiras de Hefesto</h2> <p>Ela continua seu caminho até o anoitecer. De manhã ela se aproxima da fronteira. Segue rumo Freya</p> <button onclick='carregarConteudo(fronteiraHefesto)'>Continuar</button>";

// var finalRuim = "<img src='imagens/' /> <h2>Um final trágigo</h2> <p>No caminho para Fryea, Maya é atacada por ladrões. já sem forças para lutar, acaba sendo derrotada e morta.</p> <button onclick='carregarConteudo(fronteiraHefesto)'>Continuar</button>";

var fronteiraHefesto = "<img src='imagens/' /> <h2>Fronteiras de Hefesto</h2>  <p>Maya chegou as fronteiras de hefesto, Ela descansa e no dia seguinte vende algumas peles que juntou durante a viagem, junta mais suprimentos e segue seu caminho para as montanhas gélidas de Skadi</p> <button onclick='carregarConteudo(SubindoMontanhasSkadi)'>Continuar</button>";

var SubindoMontanhasSkadi = "<img src='imagens/' /> <h2>Montanhas de Skadi</h2>  <p>Maya atravessa Hefesto, e chega as montanhas gélidas de Skadi</p> \n<p>Ela encontra a caverna e adentra para conseguir a arma</p> <button onclick='carregarConteudo(lutaArma)'>Continuar</button>";

var lutaArma = "<img src='imagens/' /> <h2>Um ser de Gelo</h2> <p>Maya luta com um golem de gelo guardião da arma, ela vence e adquire o arco de Hefesto</p> <button onclick='carregarConteudo(temploSkadi)'>Continuar</button>";

var temploSkadi = "<img src='imagens/' /> <h2>Uma pausa para orar</h2> <p>Ao sair da caverna, Maya já está em Skadi. Ela avista um templo, mas não tem certeza se deve entrar nele...</p> <button onclick='carregarConteudo(entrarTemploSkadi)'>Entrar no templo</button> <button onclick='carregarConteudo(naoEntrar)'>Seguir seu caminho.</button>";

var entrarTemploSkadi = "<img src='imagens/' /> <h2>Uma deusa no caminho</h2> <p>Maya encontra com a Deusa Skadi, que usa um feitiço para converter Maya, ela agora é uma servidora fervorosa da Deusa Skadia. Todos saudem Skadia</p> <button onclick='carregarConteudo(final)'>Continuar</button>"; //completar o final aqui

var naoEntrar = "<img src='imagens/' /> <h2>Rumo a Hefesto</h2> <p>Maya segue seu caminho para a capital de Hefesto.</p> <button onclick='carregarConteudo(CapitalHefesto)'>Continuar</button>";

var CapitalHefesto = "<img src='imagens/' /> <h2>Uma capital tecnológica</h2>  <p>Depois de muito tempo de caminhada, maya chega a capital, ela então avista uma taberna. Ela então ve alguns jogadores e lembra de seu tempo de apostas em Seth. Ela se pergunta se deve jogar algumas partidas...</p> <button onclick='carregarConteudo(jogou)'>Jogar</button> <button onclick='carregarConteudo(naoJogou)'>Não Jogar</button>";

var jogou = "<img src='imagens/' /> <h2>A sorte favorece os corajosos</h2>  <p>Maya, como eximio jogadora que era, vence todas as partidas e consegue um bom dinheiro. Ela o usa para fazer um bom aprimoramento em seus equipamentos</p> <button onclick='carregarConteudo(portoFreya)'>Continuar</button>";

var naoJogou = "<img src='imagens/' /> <h2>Upgrade</h2> <p>Maya vai fazer um upgrade em suas armas. Como o dinheiro era curto, ela faz apenas o básico</p> <button onclick='carregarConteudo(portoFreya)'>Continuar</button>";

var portoFreya = "<img src='imagens/' /> <h2>Porto pra Freya</h2> <p>Maya chega no porto para freya. Ela pega um barco clandestino e desembarca em Freya.</p> <button onclick='carregarConteudo(magoElfo)'>Continuar</button>";

var magoElfo = "<img src='imagens/' /> <h2>Um senhor mago elfo</h2> <p>Maya conversa com um mago elfo, que diz sobre um templo onde contem as memorias de freya. Ela então decide...</p> <button onclick='carregarConteudo(buscarMemorias)'>Ir ao templo das memórias secretas</button> <button onclick='carregarConteudo(irCastelo)'>Ir direto para o castelo de Freya</button>";

var buscarMemorias = "<img src='imagens/' /> <h2>O guardião das memórias</h2> <p>Depois de muito caminhar, maya encontra o templo de Freya. Ao adentrar, encontra o guardião das memórias de freya. Eles lutam, ela vence, e adquire então as memórias de freya. Descobre o segredo de Freya.</p> <button onclick='carregarConteudo(vasculharMemorias)'>Vasculhar memórias</button>";

var vasculharMemorias = "<img src='imagens/' /> <h2>Um amor não compreendido</h2> <p>Maya descobre a dor de freya, por ter seu amor por Seth negado por eras a fio. Essa dor culminou em ódio, quando ele prefere se casar com uma mortal a aceitar seu amor. E a gota d'agua foi Seth ter negado Freya em sua comemoração a arvore da vida.</p> <button onclick='carregarConteudo(casteloFreya)'>Continuar</button>";

var irCastelo = "<img src='imagens/' /> <h2>Uma vegetação densa</h2> <p>Maya segue seu caminho rumo ao castelo de Freya. No caminho, encontra diversas criaturas exóticas, e alguns saqueadores. Mais forte, ela vence os confrontos.</p> <button onclick='carregarConteudo(casteloFreya)'>Continuar</button>";

var casteloFreya = "<img src='imagens/' /> <h2>O castelo</h2> <p>Maya chega aos portões do castelo de Freya, ela já a esperava. O comfronto tem início</p> <button onclick='carregarConteudo(decisaoDificil)'>Iniciar comfronto</button>";

var decisaoDificil = "<img src='imagens/' /> <h2>Ódio ou benevolência?</h2> <p>Com seu poder de fogo despertado, e a arma ancestral, Maya derrota Freya. Ela está caida na sua frente, você tem o poder para matá-la de uma vez por todas...</p> <button onclick='carregarConteudo(matarFreya)'>Matar Freya</button> <button onclick='carregarConteudo(pouparFreya)'>Poupar Freya</button>";

var matarFreya = "<img src='imagens/' /> <h2>Sangue frio</h2> <p>Maya, por fim, atira uma flexa em freya, e termina o que começou. Ela então, usa um receptáculo para levar a árore da vida de volta para seu território.</p> \n<p>Os demais deuses, levam isso como um acerto de contas. Maya então, traz novamente a glória antiga de seth, e é coroada Rainha do reino. E a paz prosperou.</p> \n<p>Por enquanto...</p><button onclick='carregarConteudo(final)'>Continuar</button>"; //completar o final aqui

var pouparFreya = "<img src='imagens/' /> <h2>Deusa da benevolência</h2> <p>Maya, percebe que a amargura de Freya por sí só já a consumia, ela então não dá o golpe final, vai até árvore da vida, pega um pequeno broto que crescia a parte, e vai embora, retornando a Seth.</p> \n<p>Os demais deuses, a denominam deusa da benevolencia, e ela se torna a nova deusa de Seth.</p><button onclick='carregarConteudo(final)'>Continuar</button>";

var final = "<img src='imagens/' /> <h2>Obrigado por jogar</h2> <p>Agradecemos por jogar nosso jogo, ainda há mais finais para desbravar.</p><button onclick='carregarConteudo(inicioJornada)'>Continuar</button>";

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
carregarConteudo(principio)