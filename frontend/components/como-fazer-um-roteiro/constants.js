import baseImage from "~/utils/baseImage"
import animatedGif2x from "~/static/images/como-fazer-um-roteiro/animated@2x-gif.png"
import animatedGif4x from "~/static/images/como-fazer-um-roteiro/animated@4x-gif.png"

import onceUpon2x from '~/static/images/como-fazer-um-roteiro/once-upon@2x.png'
import onceUpon4x from '~/static/images/como-fazer-um-roteiro/once-upon@4x.png'
import until2x from '~/static/images/como-fazer-um-roteiro/until@2x.png'
import until4x from '~/static/images/como-fazer-um-roteiro/until@4x.png'
import hence2x from '~/static/images/como-fazer-um-roteiro/hence@2x.png'
import hence4x from '~/static/images/como-fazer-um-roteiro/hence@4x.png'
import halfway2x from '~/static/images/como-fazer-um-roteiro/halfway@2x.png'
import halfway4x from '~/static/images/como-fazer-um-roteiro/halfway@4x.png'
import respectfulVilain2x from '~/static/images/como-fazer-um-roteiro/respectful-vilain@2x.png'
import respectfulVilain4x from '~/static/images/como-fazer-um-roteiro/respectful-vilain@4x.png'
import writeAbout2x from '~/static/images/como-fazer-um-roteiro/write-about@2x.png'
import writeAbout4x from '~/static/images/como-fazer-um-roteiro/write-about@4x.png'

export const title = 'Como fazer um roteiro'

export const entryArticle = {
  headerText: "OS DOIS LADOS",
  description: "Sua vida dá uma série?",
  imageSet: baseImage(
    [
      {
        src: `${animatedGif2x}, ${animatedGif2x} 1x`,
        query: "(max-width: 767px)",
      },
      {
        src: `${animatedGif4x}, ${animatedGif4x} 1x`,
        query: "",
      },
    ],
    "Alternative text"
  ),
  footerText: "Eu convidei o Guilherme Quintella, criador e roteirista de Sintonia, pra dar uns toques sobre como montar uma história. Dá uma olhada no que ele ensinou!",
  looseText: "Vc já viveu alguma coisa tão louca ou emocionante que teve vontade de escrever um filme ou uma série sobre ela, mas não soube nem por onde começar? Dá uma olhada no que ele ensinou!"
}

export const cardsList = [
  {
    headerText: "01 <br/> ERA UMA VEZ",
    footerText: "“Tem mil formas de escrever uma história. Claro que existem os manuais, mas cada roteirista tem sua própria maneira. Eu, particularmente, curto usar a narrativa para entrar em algum universo que me interesse. No caso do Sintonia, a religião, o funk e o crime eram esses mundos que eu queria conhecer. É o que acontece também com a vida sexual dos adolescentes, no caso de Sex Education, ou a ficção científica dos anos 1980, de Stranger Things, por exemplo. Depois que eu defino o universo, o passo seguinte é escolher um guia para apresentá-lo. Ele é o protagonista e deve ser meu melhor amigo (ou meu alter ego). Às vezes acontece o contrário também. <br/><br/> O personagem nasce primeiro e, a partir dele, descubro o mundo onde ele vive e age. O ideal, aliás, é quando as duas opções se tornam uma só. Quando eu sei quem são o meu universo e o meu personagem, é hora de apresentá-los, ou seja, de contar a história pra valer. Dizem que existem dois tipos de história: aquela em que há uma pessoa normal fazendo algo incrível e aquelas em que uma pessoa incrível faz algo normal. Vou mostrar aqui as principais etapas de uma narrativa.”",
    imageSet: baseImage(
      [
        {
          src: `${onceUpon2x}, ${onceUpon2x} 2x`,
          query: "(max-width: 767px)",
        },
        {
          src: `${onceUpon4x}, ${onceUpon4x} 1x`,
          query: "",
        },
      ],
      "Alternative text"
    )
  },
  {
    headerText: "02 <br/> até que...",
    footerText: "“Os primeiros momentos dos filmes e das séries apresentam as personagens e onde elas vivem. Mas a história só começa de verdade quando algum evento muda a rotina da protagonista. Pode ser a descoberta de que um asteroide vai acabar com a humanidade, o término do seu relacionamento ou o Doni percebendo que a música dele estourou, mas foi roubada por outra funkeira. A partir daí, as coisas vão mudar e nunca mais serão as mesmas. A protagonista vai sair em uma busca de algo para resolver essa mudança de rumo.”",
    imageSet: baseImage(
      [
        {
          src: `${until2x}, ${until2x} 2x`,
          query: "(max-width: 767px)",
        },
        {
          src: `${until4x}, ${until4x} 1x`,
          query: "",
        },
      ],
      "Alternative text"
    )
  },
  {
    headerText: "03 <br/> eis a questão...",
    footerText: "“Protagonistas podem parecer determinadas, mas, se reparar, elas acham que desejam uma coisa e precisam de outra. Doni, por exemplo, acha que quer ser famoso, mas, no fundo, precisa que o pai o reconheça como funkeiro. O que a personagem quer normalmente é externo, ou seja, aparece nas ações durante a narrativa. O que precisa é interno, psicológico. Para transformar sua vida em história, você vai precisar descobrir essas coisas (alô, analista!) ou criar a partir do que viveu. Será que você (agora personagem) acha que quer namorar, mas precisa reafirmar seu amor próprio?”",
    imageSet: baseImage(
      [
        {
          src: `${hence2x}, ${hence2x} 2x`,
          query: "(max-width: 767px)",
        },
        {
          src: `${hence4x}, ${hence4x} 1x`,
          query: "",
        },
      ],
      "Alternative text"
    )
  },
  {
    headerText: "04 <br/> e no meio do caminho...",
    footerText: "“Aí vão surgir obstáculos (antagonistas) para impedir a protagonista de resolver seus conflitos – de monstros e mães superprotetoras, a ex-namorados... Ela vai precisar de habilidades paranormais para fechar a passagem para o mundo invertido ou mudar de atitude para conquistar amor-próprio. Para vencer, ela precisa superar o conflito interno e, então, o externo. Gosto muito de uma frase que diz: dê à protagonista tudo o que ela mais deseja e faça com que isso seja seu pior pesadelo. Para a sua história, pense no que deixaria seu conflito mais profundo. Uma mãe muito exigente, que só vê defeitos na personagem? O bullying que ela sofria na infância? ”",
    imageSet: baseImage(
      [
        {
          src: `${halfway2x}, ${halfway2x} 2x`,
          query: "(max-width: 767px)",
        },
        {
          src: `${halfway4x}, ${halfway4x} 1x`,
          query: "",
        },
      ],
      "Alternative text"
    )
  },
  {
    headerText: "05 <br/> um vilão de respeito...",
    footerText: "“Antagonistas podem ser vilões típicos ou uma mãe superprotetora. Quanto mais bem-feita essa personagem, melhor a história. Você precisa humanizá-la, gostar dela e entender por que age contra a protagonista. Se sua antagonista é o cara que fazia bullying, você vai precisar tentar entender quais eram os motivos dele. Será que ele apanhava em casa ou se sentia excluído e queria chamar atenção? Assim você cria um dilema moral para o seu espectador e ele fica engajado até o pescoço na história. Claro que, no fim, ele vai torcer para a protagonista.”",
    imageSet: baseImage(
      [
        {
          src: `${respectfulVilain2x}, ${respectfulVilain2x} 2x`,
          query: "(max-width: 767px)",
        },
        {
          src: `${respectfulVilain4x}, ${respectfulVilain4x} 1x`,
          query: "",
        },
      ],
      "Alternative text"
    )
  },
  {
    headerText: "06 <br/> escreva sobre o que você ama...",
    footerText: "“O mais importante, mesmo, é escrever sobre o que te interessa. Aquela coisa que te faz levantar de manhã. No caso do Sintonia, a série é, sim, sobre funk, religião e crime, mas, na verdade, é, acima de tudo, sobre família e amigos. Acho que todos os envolvidos neste projeto sabem disso e vivem para isso. E, por esse motivo, ficou tão claro na relação das nossas três personagens. Afinal, é o que toda a nossa equipe vive.”",
    imageSet: baseImage(
      [
        {
          src: `${writeAbout2x}, ${writeAbout2x} 2x`,
          query: "(max-width: 767px)",
        },
        {
          src: `${writeAbout4x}, ${writeAbout4x} 1x`,
          query: "",
        },
      ],
      "Alternative text"
    )
  },
]

export const forUrKnowledge = {
  headerText: "Pra vc saber",
  knowledgeList: [
    {
      text: "PROTAGONISTA <br/> é a personagem principal da história",
    },
    {
      text: "ANTAGONISTA <br/> cada uma das forças ou personagensque atrapalham a protagonista durante a história.",
    },
    {
      text: "ALTER <br/>- EGO é uma segunda versão de vc, q vira personagem na história. Tb pode ser um duplo da protagonista.",
    },
    {
      text: "MUNDO <br/> COMUM é a parte inicial da narrativa, qdo as personagens e o mundo onde vivem são apresentados.",
    },
    {
      text: "INCIDENTE <br/> INCITANTE é aquele acontecimento q tira as coisas do lugar e dá início à história.",
    },
    {
      text: "CONFLITO <br/> INTERNO são as motivações psicológicas da personagem, aquilo que dá sentido à existência dela.",
    },
    {
      text: "CONFLITO <br/> EXTERNO é aquilo que a personagem acha que precisa. Tipo: salvar o mundo.",
    },
    {
      text: "LOW <br/> POINT é o momento em que a protagonista está mais fraca, ou seja, mais distante da solução dos seus conflitos.",
    },
    {
      text: "PLOT <br/> TWIST é aquele momento em que a gente, como espectador, se surpreende pq tudo muda.",
    },
    {
      text: "CLÍMAX <br/> é o momento de maior tensão da história, qdo a protagonista está prestes a resolver seu conflito, mas a antagonista está fazendo o máximo para impedir q isso aconteça.",
    },
    {
      text: "CLIFFHANGER <br/> tb conhecido como “gancho”, é aquele fim de capítulo q deixa a gte morrendo de curiosidade sobre o q vai acontecer a seguir.",
    }
  ]
}