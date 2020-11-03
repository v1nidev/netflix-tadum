<template>
  <main class="mistery m-0-a p-t-8">
    <slot />
    <div v-if="showHead" class="head-container container">
      <MisterioFelipeCastanhariHead />
    </div>
    <div v-if="showBody" class="body">
      <section class="container">
        <p class="has-text-centered paragraph border-top is-size-7 p-t-8">
          Convidei o Felipe pra contar pra gente um pouco mais sobre ele. Sem mistérios... kkkk. Fiquei sabendo até que a carreira dele poderia ter sido bem diferente se ele não tivesse falado não para uma superproposta de trampo.
        </p>
        <p class="paragraph m-y-20 is-size-7">
          “Em 2012, já fazia um ano que eu insistia nos meus vídeos na internet, rolavam só uns 300 acessos e eu tava torrando todas as economias que tinha. Até que um blog postou um dos vídeos e tive 15 mil visualizações. Nesse mesmo dia, o estúdio de onde tinha pedido demissão pra me dedicar ao meu sonho ligou oferecendo um vaga de diretor de animação, com salarião e tudo mais. No mesmo dia mesmo! <br><br> Foi uma superencruzilhada. Acreditei no potencial do que tava fazendo no Canal Nostalgia e a decisão de seguir com meu conteúdo
          acabou mudando minha vida.” Esse ponto sem retorno parece coisa escrita por algum roteirista do meu catálogo, mas foi o que rolou real oficial com o Felipe Castanhari. Ainda bem que ele não desencanou do que realmente tava a fim de fazer da vida.
        </p>
      </section>

      <section class="container">
        <LetteringBanner 
          class="is-relative banner" 
          :lettering="'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'"
        >
          <ResponsiveImage 
            class="banner-light"
            :sources="images[3].src" 
            :lazyload="false" 
            :alt="images[3].alt" 
          />
          <ResponsiveImage 
            class="banner-robot"
            :sources="images[4].src" 
            :lazyload="false" 
            :alt="images[4].alt" 
          />
        </LetteringBanner>

        <p class="paragraph m-t-20 m-b-24 is-size-7">
          Se não, quem é que estaria nos ajudando a saber todos aqueles lances sobre o Triângulo das Bermudas, lobos e cachorros, inteligência artificial e mais um monte de coisa? No Mundo Mistério, do meu catálogo, o Felipe explica tanta parada importante com a ajuda de cientistas que é como um EAD com efeitos especiais. E no canal dele, que já tem mais de 13 milhões de inscritos, sempre rolam explicações de vários fenômenos e acontecimentos bacanas também. Ciência e história pra gte como a gnt. <br><br> A conexão entre o Felipe e eu vai superalém da nossa série juntos. A gente conversou um tanto sobre se ele tem uma personagem que é ele todinho (quem não? rs), o que ele anda assistindo, o que ele quer em 2021 e também um pouco (pq a gente não aguenta) sobre Mundo Mistério.
        </p>
        <div class="has-text-centered">
          <ResponsiveImage 
            :sources="images[5].src" 
            :lazyload="false" 
            :alt="images[5].alt" 
          />
        </div>
      </section>

      <section class="container m-t-20">
        <h4 class="quote border-top p-t-8 m-b-24 has-text-centered">
          “O deserto do Atacama. Lá, não importa o que aconteça, eu sei que, a partir das nove da noite, fico hipnotizado por aquele céu. É maravilhoso. Como é o deserto mais seco do mundo, acaba sendo um dos melhores para vc observar as estrelas e tudo mais”
        </h4>

        <p class="paragraph border-top has-text-centered m-b-20 p-t-8 p-x-24 is-size-7">
          Quem é aquela personagem que qndo aparece faz vc pensar “sou mto eu”?
        </p>

        <p class="paragraph m-b-48 is-size-7">
          Ah, o BoJack, do BoJack Horseman. Temos uns dilemas em comum, como entender a relação dele com o trabalho. Acho que a gente acaba se apegando mais ao lado mais frágil dos personagens, que é onde a gente é vulnerável.
        </p>

        <div class="has-text-centered">
          <ResponsiveImage 
            :sources="images[6].src" 
            :lazyload="false" 
            :alt="images[6].alt" 
          />
        </div>
      </section>

      <section class="container m-t-24">
        <p class="paragraph border-top has-text-centered p-t-8 p-x-24 m-b-16 is-size-7">
          Tem algum momento da trajetória dele em que você veja um paralelo com a sua?
        </p>

        <p class="paragraph m-t-4 m-b-32 is-size-7">
          Tem vários. Um deles foi quando ele estava se sentindo meio perdido com o tanto de coisa que estava acontecendo na carreira, não sabia exatamente para onde ir e acaba fugindo pro México. Ele tá no meio das gravações de um filme e some, vai atrás de uma garota que ele conheceu na infância. O engraçado é que no começo dessas gravações ele assinou uma autorização que permitia que usassem uma versão 3-D dele exatamente pq sabiam como ele tava instável. E no final, ele é indicado pro Oscar, sendo que não foi exatamente ele que atuou.
        </p>

        <p class="paragraph border-top has-text-centered p-t-8 p-x-24 m-b-16 is-size-7">
          Se vc fosse fazer como ele fez e dar uma escapada para algum lugar, qual seria?
        </p>

        <p class="paragraph m-t-4 m-b-24 is-size-7">
          O deserto do Atacama. Lá, não importa o que aconteça, eu sei que, a partir das nove da noite, fico hipnotizado por aquele céu. É maravilhoso. Como é o deserto mais seco do mundo, acaba sendo um dos melhores para vc observar as estrelas e tudo mais. Pra mim, é um lugar de meditação. Quando fui, ficava horas olhando pro céu. Isso é minha grande paixão. Me acalma, é relaxante.
        </p>
      </section>

      <section class="container">
        <LetteringBanner 
          class="is-relative banner" 
          :height="300"
          :lettering="'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'"
        >
          <ResponsiveImage 
            class="banner-glacier"
            :sources="images[7].src" 
            :lazyload="false" 
            :alt="images[7].alt" 
          />
        </LetteringBanner>

        <p class="paragraph border-top has-text-centered p-t-8 m-b-16 is-size-7">
          Sem qq plot twist nessa temporada?
        </p>

        <p class="paragraph m-t-4 m-b-32 is-size-7">
          Pode ter... Hahaha! Mas fica mais fácil encarar se a gente tá com os alicerces bem sólidos. Sou contra essa coisa de ficar falando que tem uma vida perfeita. Pelo contrário. Acho que, qnto mais eu falo dos meus problemas, das minhas dificuldades, mais isso gera identificação, mais as pessoas olham e entendem que todo mundo passa por eles. Mostrar a  realidade mesmo. É importante.
        </p>

        <p class="paragraph border-top has-text-centered p-t-8 m-b-16 is-size-7">
          E sobre Mundo Mistério, o que te deixa mais animado agora que já tá na íntegrano catálogo?
        </p>

        <p class="paragraph m-t-4 is-size-7">
          Foram dois anos de trabalho. É mto bom ver pronto. O objetivo é apresentar a ciência de forma divertida, simples, assim, atrair o pessoal pro tema. Acho que tá dando certo. Pra produção dos roteiros, fiquei o tempo inteiro em contato com cientistas e pesquisadores em busca de explicações, entendendo os conceitos científicos e aprendendo coisas novas a cada dia. Tudo isso pra gente mostrar que ciência e história podem ser tão legais quanto sua série ou seu filme preferido. 
        </p>
      </section>

      <MyList :cards="myList" />

      <Share />
    </div>
  </main>
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'Mistério Felipe Castanhari',
        description: 'Mistério Felipe Castanhari'
      }
    );
  },

  props: {
    showHead: {
      type: Boolean,
      default: true
    },
    showBody: {
      type: Boolean,
      default: true
    }
  },

  data(){
    return{
      images: [
        baseImage([
          {src:'/images/misterio-felipe-castanhari/star.png, /images/misterio-felipe-castanhari/star@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/planet.png, /images/misterio-felipe-castanhari/planet@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/felipe_1.png, /images/misterio-felipe-castanhari/felipe_1@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/light.png, /images/misterio-felipe-castanhari/light@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/robot.png, /images/misterio-felipe-castanhari/robot@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/felipe_2.png, /images/misterio-felipe-castanhari/felipe_2@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/felipe_3.png, /images/misterio-felipe-castanhari/felipe_3@2x.png 2x'}
        ], 'Alternative text'),
        baseImage([
          {src:'/images/misterio-felipe-castanhari/geleira.png, /images/misterio-felipe-castanhari/geleira@2x.png 2x'}
        ], 'Alternative text'),
      ],

      myList: [
        {
          img: baseImage([
            {src:'/images/misterio-felipe-castanhari/rick_morty.png, /images/misterio-felipe-castanhari/rick_morty@2x.png 2x'}
          ], 'Alternative text'),
          title: 'Sem maturidade pra isso',
          description: '“Tô achando sensacional. Tô me relacionando mto pq é a história de um casal tendo que enfrentar os perrengues do dia a dia, aquela síndrome de qndo vc chega aos 30 anos.”'
        },
        {
          img: baseImage([
            {src:'/images/misterio-felipe-castanhari/never_have.png, /images/misterio-felipe-castanhari/never_have@2x.png 2x'}
          ], 'Alternative text'),
          title: 'Rick&Morty',
          description: '“É, deu pra ver que gosto muito de animações. Antes de começar o projeto do Mundo Mistério estava até trabalhando na criação de uma.”'
        },
        {
          title: 'Outros',
          description: 'BoJack Horseman Baki, o Campeão El Camino Power Breaking Bad O Irlândes'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/overrides";

.mistery{
  background-color: #00A651;

  .container{
    padding: 0px 20px;
  }

  .banner{
    &-light{
      position: absolute;  
      top: 75px;
      //left: 60px;
      left: 2.5rem;
    }

    &-robot{
      position: absolute;
      bottom: 0px;
      right: 0.2rem;
    }

    &-glacier{
      width: 220px;
      height: 160px;
      position: absolute;
      margin: auto;
      left: 0; 
      right: 0; 
      top: 0;
      bottom: 0;
    }
  }

  .explanation{
    font-family: $family-primary;
    color: #000;
    font-size: 17px;
    line-height: 21px;
    margin: 20px auto 30px;
  }

  .quote{
    font-weight: normal;
    font-size: 32px;
    line-height: 39px;
    color: #000;
  }

  .border-top{
    border-top: 2px #000 dotted;
    padding-top: 10px;
  }

  .paragraph{
    color: #000;
    line-height: 26px;
  }

  /* .title{
    line-height: 74px;
    font-size: 85px;
    color: #000;
    -webkit-line-clamp: 6;
    overflow: hidden;
    max-height: 445px;
  } */

  .top{
    width: 45px;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

}
</style>