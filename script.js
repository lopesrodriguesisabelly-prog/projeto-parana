// Banco de dados da sala: "A Diáspora Europeia e Asiática"
const bancoDeDadosSala = {
    nomeSala: "A Diáspora Europeia e Asiática",
    
    // Conteúdo formatado para estilo de Museu (Rico, Dinâmico e Empolgante)
    conteudo: {
        historia: `
            <p>Imagine cruzar oceanos rumo ao desconhecido, deixando para trás tudo o que conhece. Entre o <strong>século XIX e o início do século XX</strong>, o mundo testemunhou um dos maiores movimentos migratórios da história humana. Milhões de almas corajosas partiram da Europa e da Ásia, impulsionadas por <strong>crises económicas devastadoras</strong>, pelas incertezas das unificações italiana e alemã, pela superpopulação rural no Japão e pelos violentos conflitos que assolavam a Europa Central e Oriental. O destino? Uma nova oportunidade de vida nas terras tropicais do Brasil.</p>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Immigrantes_italianos_na_Hospedaria_de_Imigrantes_em_S%C3%A3o_Paulo_1907.jpg" alt="Imigrantes no Brasil" style="max-width:100%; height:auto; margin:15px 0; border-radius:5px;">
            
            <p>Ao desembarcarem, estes povos espalharam sementes de cultura, resiliência e transformação. No Brasil, destacamos a saga de grupos extraordinários que moldaram a nossa identidade:</p>
            <ul>
                <li><strong>Italianos e Alemães:</strong> Os verdadeiros pioneiros na colonização do Sul, desbravando florestas e fundando cidades que hoje respiram as suas tradições.</li>
                <li><strong>Poloneses e Ucranianos:</strong> Com uma força cultural inabalável, estabeleceram raízes profundas na <strong>região de Curitiba e arredores</strong>, marcando a paisagem com as suas igrejas de madeira e tradições centenárias.</li>
                <li><strong>Japoneses:</strong> Protagonistas de uma epopeia de adaptação hercúlea, revolucionando a nossa agricultura com determinação e sabedoria.</li>
            </ul>
            <p>Mais do que sobreviver, estes imigrantes preservaram a sua <strong>identidade e memória</strong> através de festividades coloridas, dialetos ancestrais e uma gastronomia rica, fundindo o velho mundo com o pulsar da nova terra.</p>
        `,
        geografia: `
            <p>A chegada dos fluxos migratórios redesenhou completamente o mapa socioeconómico e o <strong>espaço agrário brasileiro</strong>. O território foi transformado de forma dinâmica: enquanto a <strong>Região Sudeste</strong> canalizava a força de trabalho inicialmente para a pujante economia cafeeira, a <strong>Região Sul</strong> vivenciou uma interiorização única através da criação de colónias agrícolas autónomas.</p>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Colonos_italianos_na_colonia_Caxias_1885.jpg" alt="Colonos e o espaço agrário" style="max-width:100%; height:auto; margin:15px 0; border-radius:5px;">
            
            <p>Se olharmos de perto para a <strong>Região Metropolitana de Curitiba (RMC)</strong>, descobrimos um fascinante mosaico étnico. Municípios vizinhos como <strong>São José dos Pinhais, Colombo e Araucária</strong> foram estruturados ao redor destas colónias, um planeamento que dita até hoje o desenho urbano, as paisagens rurais e a demografia atual da região.</p>
            <p>Na economia, a grande revolução deu-se nas técnicas agrícolas. A antiga agricultura de subsistência deu lugar a inovações que transformaram o Brasil num celeiro de diversidade:</p>
            <ul>
                <li>A introdução da <strong>policultura</strong> e da rotação de culturas, garantindo a saúde da terra.</li>
                <li>O avanço da <strong>viticultura</strong> trazida pelos italianos e da <strong>horticultura</strong> aperfeiçoada pelos japoneses.</li>
                <li>O nascimento do <strong>cooperativismo</strong>, uma força associativa onde o trabalho conjunto garantiu a prosperidade de comunidades inteiras.</li>
            </ul>
        `,
        arte: `
            <p>O encontro entre os imigrantes e o Brasil provocou um verdadeiro <strong>choque de paisagens</strong>. Na memória daqueles que chegavam, viviam os tons frios, as névoas densas e as estações rigorosamente marcadas da Europa e da Ásia. Ao desembarcarem, foram impactados por uma realidade visual avassaladora: a <strong>luz intensa do clima tropical</strong>, a vegetação exuberante e uma paleta de cores vibrantes nunca antes vista por eles.</p>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Antonieta_Feio_-_Retrato_de_Mulher.jpg" alt="Obra de Antonieta Feio" style="max-width:100%; height:auto; margin:15px 0; border-radius:5px;">
            
            <p>Para ilustrar esta fusão luminosa, cruzamos caminhos com a genialidade de <strong>Antonieta Feio</strong>. Esta prestigiada pintora paraense dominava o uso impressionista da luz, utilizando uma <strong>paleta solar e cores vivas</strong> para capturar a vibrante atmosfera do Norte do Brasil. A sua arte é a chave para transformar o olhar sobre o Sul.</p>
            
            <p><strong>🎨 Proposta de Releitura Prática – Atividade de Museu:</strong></p>
            <p>Convidamos os alunos a tornarem-se artistas desta exposição! A proposta é criar uma composição artística (desenho ou pintura) que retrate as colónias paranaenses — com a sua arquitetura típica, moinhos e plantações —, mas aplicando a <strong>identidade visual de Antonieta Feio</strong>. O grande desafio é "aquecer" a fria paisagem sulista com a luz solar e a vivacidade das cores paraenses, gerando um diálogo cultural e visual absolutamente único e inovador!</p>
        `
    }
};

/**
 * Função para injetar o conteúdo no HTML
 * @param {string} seccao - Pode ser 'historia', 'geografia' ou 'arte'
 */
function injetarConteudoSala(seccao) {
    // Procura o contentor onde o texto do museu vai ser exibido
    const painelExibicao = document.getElementById('painel-museu');
    const tituloSala = document.getElementById('titulo-sala');
    
    if (bancoDeDadosSala.conteudo[seccao]) {
        // Atualiza o título e o conteúdo com animação/transição dinâmica
        tituloSala.innerHTML = `🏛️ ${bancoDeDadosSala.nomeSala} - <span style="text-transform: capitalize;">${seccao}</span>`;
        painelExibicao.innerHTML = bancoDeDadosSala.conteudo[seccao];
        
        // Efeito visual suave de entrada
        painelExibicao.style.opacity = 0;
        setTimeout(() => {
            painelExibicao.style.opacity = 1;
            painelExibicao.style.transition = 'opacity 0.5s ease-in-out';
        }, 50);
    } else {
        console.error("Secção não encontrada no banco de dados.");
    }
}
