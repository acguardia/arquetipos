// Questions data
const questions = [
    "Eu coleto informações sem fazer julgamentos.",
    "Eu me sinto desorientado por tanta mudança em minha vida.",
    "O processo de minha própria autocura me permite ajudar a curar outros.",
    "Eu decepcionei outras pessoas.",
    "Eu me sinto seguro.",
    "Eu deixo o medo de lado e faço o que precisa ser feito.",
    "Eu coloco as necessidades dos outros antes das minhas.",
    "Eu tento ser autêntico onde quer que esteja.",
    "Quando a vida fica monótona, eu gosto de agitar as coisas.",
    "Eu encontro satisfação cuidando dos outros.",
    "Os outros me veem como divertido.",
    "Eu me sinto sexy.",
    "Eu acredito que as pessoas realmente não pretendem machucar umas às outras.",
    "Quando criança, fui negligenciado ou vitimizado.",
    "Dar me faz mais feliz do que receber.",
    "Eu concordo com a afirmação: 'É melhor ter amado e perdido do que nunca ter amado'.",
    "Eu abraço a vida plenamente.",
    "Eu mantenho uma perspectiva tomando uma visão de longo prazo.",
    "Eu estou no processo de criar minha própria vida.",
    "Eu acredito que existem muitas boas maneiras de olhar para a mesma coisa.",
    "Eu não sou mais a pessoa que pensava que era.",
    "A vida é uma dor de cabeça após a outra.",
    "A ajuda espiritual é responsável pela minha eficácia.",
    "Eu acho mais fácil fazer pelos outros do que fazer por mim mesmo.",
    "Eu encontro realização através de relacionamentos.",
    "As pessoas olham para mim em busca de direção.",
    "Eu temo aqueles em posição de autoridade.",
    "Eu não levo as regras muito a sério.",
    "Eu gosto de ajudar as pessoas a se conectarem umas com as outras.",
    "Eu me sinto abandonado.",
    "Eu tenho momentos de alta realização que parecem sem esforço para mim.",
    "Eu tenho qualidades de liderança.",
    "Eu estou procurando maneiras de me melhorar.",
    "Eu posso contar com outros para cuidar de mim.",
    "Eu prefiro estar no comando.",
    "Eu tento encontrar verdades por trás das ilusões.",
    "Mudar meus pensamentos internos muda minha vida externa.",
    "Eu desenvolvo recursos, humanos ou naturais.",
    "Eu estou disposto a correr riscos pessoais para defender minhas crenças.",
    "Eu não posso ficar parado e deixar um erro passar sem desafiá-lo.",
    "Eu me esforço pela objetividade.",
    "Minha presença é frequentemente um catalisador para mudança.",
    "Eu gosto de fazer as pessoas rirem.",
    "Eu uso disciplina para alcançar objetivos.",
    "Eu me sinto amoroso em relação às pessoas em geral.",
    "Eu sou bom em combinar as habilidades das pessoas com as tarefas a serem feitas.",
    "É essencial para mim manter minha independência.",
    "Eu acredito que todos e tudo no mundo estão interconectados.",
    "O mundo é um lugar seguro.",
    "Pessoas em quem confiei me abandonaram.",
    "Eu me sinto inquieto.",
    "Eu estou deixando ir coisas que não se encaixam mais para mim.",
    "Eu gosto de 'alegrar' pessoas que são muito sérias.",
    "Um pouco de caos é bom para a alma.",
    "Sacrificar-me para ajudar outros me fez uma pessoa melhor.",
    "Eu estou calmo.",
    "Eu enfrento pessoas ofensivas.",
    "Eu gosto de transformar situações.",
    "A chave para o sucesso em todos os aspectos da vida é a disciplina.",
    "A inspiração vem facilmente para mim.",
    "Eu não correspondo às minhas expectativas para mim mesmo.",
    "Eu tenho a sensação de que um mundo melhor me espera em algum lugar.",
    "Eu assumo que as pessoas que encontro são confiáveis.",
    "Eu estou experimentando transformar meus sonhos em realidades.",
    "Eu sei que minhas necessidades serão atendidas.",
    "Eu sinto vontade de quebrar algo.",
    "Eu tento gerenciar situações com o bem de todos em mente.",
    "Eu tenho dificuldade em dizer não.",
    "Eu tenho muito mais grandes ideias do que tempo para agir sobre elas.",
    "Eu estou procurando por pastos mais verdes.",
    "Pessoas importantes em minha vida me decepcionaram.",
    "O ato de procurar algo é tão importante para mim quanto encontrá-lo."
];

// Archetype data
const archetypes = [
    {
        name: "Buscador",
        subtitle: "Procurando por seu verdadeiro Eu",
        description: "O Buscador é uma força a ser considerada. Este arquétipo incorpora o indivíduo rústico interior que está disposto a enfrentar a solidão e o isolamento em busca de novos caminhos. Eles são frequentemente oposicionais e iconoclastas, ajudando-nos a descobrir nossa singularidade, perspectivas e vocações. Mas cuidado, este arquétipo também pode levar a um caminho perigoso de autodestruição e alienação daqueles ao seu redor."
    },
    {
        name: "Inocente",
        subtitle: "Permanece ingênuo, evita responsabilidade",
        description: "Você está preso em um ciclo de decepção e traição? O arquétipo do Inocente pode estar sabotando sua vida sem que você perceba. Este padrão enganosamente perigoso o mantém vulnerável, dependente e constantemente procurando alguém para resolver seus problemas. Embora prometa segurança e simplicidade, o arquétipo do Inocente na verdade o deixa indefeso contra as duras realidades da vida."
    },
    {
        name: "Órfão",
        subtitle: "Quer se encaixar",
        description: "O arquétipo do Órfão não é apenas uma construção literária, é uma realidade que vive dentro de cada um de nós. É a criança ferida interior, aquela que espera muito pouco da vida e aprendeu a sobreviver através da empatia, realismo e esperteza de rua. Mas não se engane, este arquétipo não deve ser subestimado. Ele tem o poder de controlar e lentamente arruinar sua vida e relacionamentos se você não aprender a integrá-lo."
    },
    {
        name: "Bobo (Palhaço)",
        subtitle: "Vive o momento",
        description: "Você está usando humor para se esconder de seus problemas reais? O arquétipo do Bobo está sabotando sua vida transformando tudo em piada, incluindo seu próprio potencial de grandeza. Enquanto você está ocupado entretendo outros e evitando responsabilidade, seus sonhos estão escapando e sua vida está se tornando um show de comédia permanente sem substância real."
    },
    {
        name: "Sábio",
        subtitle: "Busca a verdade",
        description: "O arquétipo do Sábio pode parecer um farol de sabedoria e iluminação, mas cuidado, é uma espada de dois gumes. Aqueles que não integram completamente o arquétipo do Sábio correm o risco de serem consumidos pela busca implacável da verdade e conhecimento, sacrificando seus relacionamentos e bem-estar pessoal no processo."
    },
    {
        name: "Rei",
        subtitle: "Cria ordem a partir do caos",
        description: "Você está falhando como líder em sua própria vida? O arquétipo do Rei revela uma verdade dura: você está governando com sabedoria ou destruindo tudo através do controle tirânico. A maioria das pessoas que exercem este arquétipo se tornam ditadores em seus relacionamentos, locais de trabalho e famílias, deixando um rastro de ressentimento e rebelião em seu caminho."
    },
    {
        name: "Criador",
        subtitle: "Se expressa",
        description: "Seus sonhos criativos estão morrendo dentro de você? O arquétipo do Criador é tanto seu maior presente quanto seu mais cruel torturador. Enquanto outros veem produtos acabados e sucesso, você está preso em um ciclo infinito de perfeccionismo, autodúvida e paralisia criativa que está lentamente matando sua alma artística."
    },
    {
        name: "Rebelde (Destruidor)",
        subtitle: "Deixa ir quem ele era para se tornar quem ele pode ser",
        description: "O arquétipo do Destruidor é uma força a ser considerada. Ele incorpora a raiva e ira reprimidas que todos sentimos em relação às estruturas em nossas vidas que não nos servem mais, sejam normas sociais ou nossas próprias escolhas conscientes. O Destruidor é um personagem implacável, que não para diante de nada para derrubar essas estruturas e abrir caminho para um novo crescimento."
    },
    {
        name: "Mago",
        subtitle: "Se transforma para alcançar a iluminação",
        description: "A busca do Mago não é realizar truques de mágica, mas verdadeiramente transformar algo ou alguém de forma profunda. No entanto, a tentação de usar seu poder de forma manipulativa pode ser avassaladora e levar a consequências desastrosas. O Mago deve superar essa tentação e usar seu poder para o bem, caso contrário se tornará uma força de destruição."
    },
    {
        name: "Cuidador",
        subtitle: "Cuida dos outros",
        description: "O arquétipo do Cuidador é uma força poderosa, que pode levar indivíduos a grandes atos de altruísmo e compaixão. Mas também pode levar a um caminho perigoso de martírio e comportamentos facilitadores. É um caminho que pode lentamente corroer o próprio tecido da vida e relacionamentos de alguém, deixando-os uma sombra de seu eu anterior."
    },
    {
        name: "Amante",
        subtitle: "Segue sua felicidade",
        description: "Por que seus relacionamentos continuam falhando? O arquétipo do Amante pode estar destruindo suas chances de amor verdadeiro sem que você perceba. Esta força poderosa o leva a obsessar sobre paixão e intimidade, mas também está preparando você para uma desilusão devastadora e padrões de relacionamento tóxicos que o deixarão mais sozinho do que nunca."
    },
    {
        name: "Guerreiro",
        subtitle: "Supera obstáculos. Quer vencer",
        description: "Você está lutando batalhas que não pode vencer? O arquétipo do Guerreiro está transformando sua vida em um campo de batalha onde todos se tornam inimigos, incluindo as pessoas que você mais ama. Sua necessidade implacável de 'vencer' em tudo está na verdade fazendo você perder o que importa: relacionamentos, paz de espírito e felicidade genuína."
    }
];

let currentQuestionIndex = 0;
let answers = {};

// Initialize the quiz
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quiz-form')) {
        loadQuestions();
        setupEventListeners();
    }
    
    if (document.querySelector('.archetype-list')) {
        loadArchetypes();
    }
});

function loadQuestions() {
    const form = document.getElementById('quiz-form');
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <div class="question-text">${question}</div>
            <div class="options">
                ${[1, 2, 3, 4, 5].map(value => `
                    <label class="option">
                        <input type="radio" name="q${index}" value="${value}">
                        <span>${value}</span>
                    </label>
                `).join('')}
            </div>
        `;
        form.appendChild(questionDiv);
    });
    
    // Show submit button after all questions are loaded
    document.getElementById('submit-quiz').style.display = 'block';
}

function loadArchetypes() {
    const container = document.querySelector('.archetype-list');
    
    archetypes.forEach(archetype => {
        const card = document.createElement('div');
        card.className = 'archetype-card';
        card.innerHTML = `
            <h3>${archetype.name}</h3>
            <div class="subtitle">${archetype.subtitle}</div>
            <p>${archetype.description}</p>
        `;
        container.appendChild(card);
    });
}

function setupEventListeners() {
    // Handle radio button changes
    document.addEventListener('change', function(e) {
        if (e.target.type === 'radio') {
            const questionIndex = e.target.name.replace('q', '');
            answers[questionIndex] = parseInt(e.target.value);
            
            // Update visual feedback
            const questionDiv = e.target.closest('.question');
            questionDiv.classList.remove('unanswered');
            
            // Update option styling
            const options = questionDiv.querySelectorAll('.option');
            options.forEach(option => option.classList.remove('selected'));
            e.target.closest('.option').classList.add('selected');
            
            updateSubmitButton();
        }
    });
    
    // Handle form submission
    document.getElementById('submit-quiz').addEventListener('click', function(e) {
        e.preventDefault();
        submitQuiz();
    });
}

function updateSubmitButton() {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    
    // Mark unanswered questions
    const questionDivs = document.querySelectorAll('.question');
    questionDivs.forEach((div, index) => {
        if (!answers.hasOwnProperty(index)) {
            div.classList.add('unanswered');
        }
    });
    
    // Enable/disable submit button
    const submitButton = document.getElementById('submit-quiz');
    if (answeredQuestions === totalQuestions) {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Resposta';
    } else {
        submitButton.disabled = true;
        submitButton.textContent = `Responda todas as questões (${answeredQuestions}/${totalQuestions})`;
    }
}

function submitQuiz() {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    
    if (answeredQuestions < totalQuestions) {
        alert('Por favor, responda a todas as questões antes de enviar.');
        
        // Scroll to first unanswered question
        const firstUnanswered = document.querySelector('.question.unanswered');
        if (firstUnanswered) {
            firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Calculate results
    const results = calculateResults();
    displayResults(results);
}

function calculateResults() {
    const archetypeScores = {};

    archetypes.forEach((archetype, index) => {
        archetypeScores[index] = 0;
    });

    Object.values(answers).forEach((value, index) => {
        const archetypeIndex = index % archetypes.length;
        archetypeScores[archetypeIndex] += value;
    });

    const sortedArchetypes = Object.entries(archetypeScores).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

    const topArchetype1 = parseInt(sortedArchetypes[0][0]);
    const topArchetype2 = parseInt(sortedArchetypes[1][0]);

    const totalPossible = Math.ceil(questions.length / archetypes.length) * 5;

    const percentage1 = Math.round((sortedArchetypes[0][1] / totalPossible) * 100);
    const percentage2 = Math.round((sortedArchetypes[1][1] / totalPossible) * 100);

    return {
        topArchetype1: { archetype: archetypes[topArchetype1], percentage: percentage1 },
        topArchetype2: { archetype: archetypes[topArchetype2], percentage: percentage2 }
    };
}

function displayResults(results) {
    // Hide the quiz form
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("submit-quiz").style.display = "none";

    // Create results section
    const resultsDiv = document.createElement("div");
    resultsDiv.className = "results";
    resultsDiv.innerHTML = `
        <h2>Seus Resultados</h2>
        <div class="result-archetype">
            <h3>${results.topArchetype1.archetype.name}</h3>
            <div class="result-percentage">${results.topArchetype1.percentage}%</div>
            <p>${results.topArchetype1.archetype.subtitle}</p>
        </div>
        <p>${results.topArchetype1.archetype.description}</p>

        <div class="result-archetype">
            <h3>${results.topArchetype2.archetype.name}</h3>
            <div class="result-percentage">${results.topArchetype2.percentage}%</div>
            <p>${results.topArchetype2.archetype.subtitle}</p>
        </div>
        <p>${results.topArchetype2.archetype.description}</p>

        <a href="archetypes.html" class="button">Ver Todos os Arquétipos</a>
        <button onclick="location.reload()" class="button">Fazer o Teste Novamente</button>
    `;

    // Insert results after the test section
    const testSection = document.querySelector(".archetype-test");
    testSection.appendChild(resultsDiv);

    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: "smooth" });
}

