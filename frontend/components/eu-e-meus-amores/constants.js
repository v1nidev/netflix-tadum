import baseImage from "~/utils/baseImage";
import firstLooseImage2x from '~/static/images/eu-e-meus-amores/firstLooseImage@2x.png'
import firstLooseImage4x from '~/static/images/eu-e-meus-amores/firstLooseImage@4x.png'

export const title = 'Eu e meus amores'
export const description = 'Tem Amor pra Todes'

export const looseCard = {
  headerText: "Quando a gente divide o tempo entre crush e migues, 24horas parece pouco, né? Mas bora lá que esse problema é do tipo “vira essa boca pra cá”. Se organizar direitinho, isso só acontece nas séries e filmes.",
  imageSet: baseImage(
    [
      {
        src: `${firstLooseImage4x}, ${firstLooseImage4x} 2x`,
        query: "(max-width: 767px)",
      },
      {
        src: `${firstLooseImage2x}, ${firstLooseImage2x} 2x`,
        query: "",
      },
    ],
    "Alternative text"
  )
}

export const cardsList = [
  {
    headerText: "Mike & Will & Lucas & Eleven & Max de Stranger Things",
    footerText: 'Jogar <i>Dungeons & Dragons</i> - aquele momento super da galera – com a cabeça totalmente nos crushes. O resultado? O único amigo sem crush chats, bem chats. Will não conseguiu lidar com o fato de ter “perdido” Mike e Lucas. Mas, gente, tem espaço na vida pra todes.',
    videoId: 'kqiDy4vfwZw',
  },
  {
    headerText: "Elle & Lee & Rachel, de A Barraca do Beijo 1 e 2",
    footerText: "Primeiro é a Elle que quer esconder do Lee a paixão pelo irmão mais velho dele. Depois, é ele quem não consegue conciliar o namoro com a Rachel e a amizade com a Elle, que ocupa um grande espaço na sua vida. Sobra amor, falta sinceridade. Várias mentirinhas aqui e ali, quando o melhor era mandar a real logo.",
    videoId: 'CxPWp_epymA',
  },
  {
    headerText: "Vanya & Número 5 & Sissy, de The Umbrella Academy",
    footerText: "Vanya e Número 5 têm a maior discussão porque ele encontra um jeito de levá-la pra casa, mas ela só aceita se puder levar a Sissy, sua paixão, junto. <3",
    videoId: '9kI7mMGFkho',
  },
  {
    headerText: "Puleng & Wade & KB, de Sangue & Água",
    footerText: "Mais um tal de mente daqui e mente dali. Puleng inventa uma desculpinha bem da esfarrapada pra não falar pro amigo q ia ficar com o crush. Precisa disso, gente?",
    videoId: 'hnKCuZrtJeo',
  }
]