<template>
  <main class="has-background-blue no-overflow">
    <div class="container">
      <img class="vector" src="/images/com-tempo-irmao/vector.svg" alt="">

      <header class="p-t-32 header">
        <h4 class="is-size-8 has-text-centered p-t-8 top-title">
          TÉDIO NA QUARENTENA 
        </h4>
        <h1 class="title has-text-centered m-t-8 m-b-16">
          Com tempo, irmão
        </h1>
      </header>

      <section>
        <div class="card m-x-a m-b-16">
          <img src="/images/com-tempo-irmao/larissa.png" alt="" class="larissa">

          <p class="description has-background-green has-text-centered p-x-16 p-t-8 p-b-16">
            Ninguém sabia que passaríamos tanto tempo em casa esse ano. Resta a gente se inspirar em Ana, de Modo Avião, que ficou na casa do avô  pra  encontrar umas ocupações nessa quarentena infinita... 
          </p>
        </div>

        <div class="card has-background-pink m-x-a m-b-48 radius-20">
          <p class="description has-text-centered is-size-7 p-x-16 p-y-20 m-t-0 no-border">
            Gente, essa nem a Madama Brona previu. Não teve ninguém pra avisar que passaríamos tanto tempo em casa esse ano. Resta a gente se inspirar naquela temporada que a Ana, de Modo Avião, ficou na casa do avô em Modo Avião pra encontrar umas ocupações nessa “quarentena” infinita...e decidi também pedir umas dicas para uns outros migues pq haja hora livre
          </p>
        </div>
      </section>

      <section class="content has-text-centered p-b-32">
        <img src="/images/com-tempo-irmao/airplane.svg" alt="ícone de avião" class="airplane m-x-a m-b-60">

        <div class="carousel-box m-t-32 m-x-a m-b-60 p-y-4">
          <CardSlider :queries="slider_config" class="m-b-56">
            <div v-for="(content, index) in carousel_content" :key="index" class="card-box p-x-32 p-t-48 p-b-32 has-text-centered">
              <div class="ellipse m-x-a has-background-pink" v-html="index+1" />
              <h2 class="m-t-16 m-b-20" v-html="content.title" />
              <p v-html="content.description" />
            </div>
          </CardSlider>
        </div>

        <img src="/images/com-tempo-irmao/detox.svg" alt="detox digital">
      
        <div class="dive has-text-centered m-x-a m-t-32">
          <h3 class="p-y-20 dive-title m-b-0">
            Mergulhe+!
          </h3>
          <p class="p-y-32 p-x-48 dashed-bottom dive-description m-b-0">
            + de 60 anos nas costas ajudando a gente com um mar de passatempos <br> @coquetel
          </p>
          <p class="p-y-32 p-x-48 dive-description">
            clássico dos clássicos, pioneira no rolê dos baralhos no Brasil. Se vc não conhece Uno, procure saber ;) <br> @copagoficial
          </p>
        </div>
      </section>

      <Share />
    </div>
  </main>
</template>

<script>
export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'Com tempo irmão',
        description: ''
      },
      null, 
      this.$route.path, 
      null
    );
  },
  data(){
    return{
      slider_config:[
        {
          max_width: 9999, // apply config below 1025px
          config: {
            initialIndex: 0,
            cellAlign: 'left',
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: true,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
          }
        }
      ],
      carousel_content: [
        {
          title: 'Tira da gaveta!',
          description: 'A Ana aproveitou o tempo de desintoxicação do celular e das redes sociais pra retomar as criações como estilista. Será que não rola por aí tb um talento que ficou escanteado nos últimos tempos que valha ser recuperado? Desenhar, compor, costurar, organizar uma coleção que ficou empoeirada.'
        },
        {
          title: 'Td em família',
          description: 'Ah, família é tudo, né? Qq que seja a configuração. A prima Maísa me contou que ela e os pais têm usado esse tempo em casa para conversar mais, ver uns filmes e séries juntos – tipo Warrior Nun e Disque Amiga Para Matar – e ainda tão se jogando na cozinha experimentando umas receitas.'
        },
        {
          title: 'Vai, vc consegue',
          description: 'Ah, e arriscar dar uma atualizada numas camisetas e blusas com tie dye? Acho que vale como passatempo, hein? Se não ficar bom, é só usar de pijama...afinal, né? Kkkkk'
        },
        {
          title: 'Lembra, haverá futuro',
          description: 'Rola fazer uns planos de viagens tb. Pesquisar e listar uns lugares e lanchessss que quer conhecer e provar. Dá uma olhadinha no Street Food do meu catálogo e já anota tudo o que vai experimentar no primeiro rolê depois que tudo isso passar.'
        },
        {
          title: 'Viva o conhecimento',
          description: 'Ler, ler e ler. Acho um jeito super estimulante de preencher o tempo. Dá pra aprender um tanto de coisa nova, se enredar nas histórias. O Christian Malheiros (o Nando, de Sintonia) indicou pra gente o Quarto de Despejo, da Carolina Maria de Jesus. E o Danilo Mesquita, que faz o Teto em Ricos de Amor, aproveitou a quarentena para ler (e recomenda demais) Memórias de um sobrevivente, de Luis Alberto Mendes.'
        },
        {
          title: 'Offline e Feliz',
          description: 'Desconectar um pouco do celular pode ser uma experiência legal. A Thalita Rebouças topou um desafio de ficar um dia sem olhar o dela (será que vc conseguiria?) e aproveitou para curtir um pôr do sol sem se preocupar em fazer fotinhos. Só aproveitou o momento.'
        },
        {
          title: 'Abraça o novo',
          description: 'Ainda dá pra tentar aprender algo novo. Tipo, sempre quis e nunca tive tempo? A Ana mesmo, em Modo Avião, quando chegou noavô não sabia o que era uma chave de roda? Depois virou praticamente uma ajudante de mecânico.'
        },
        {
          title: 'Tudumzar até umas horas',
          description: 'E, claro, maratonar o Almanaque TuDum todinho de cabeça pra baixo, até achar os easter eggs, curiosidades e também ficar na contagem para o TuDum ao vivo.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/overrides";

.header{
  .top-title{
    font-family: Netflix Sans;
    font-weight: 500;
  }

  .title{
    color: #00A651;
    font-weight: bold;
    font-size: 80px;
    line-height: 70px;
    //border: 1.2px solid #000000;
    -webkit-text-stroke: 1.2px #000000;
  }
}

.card{
  max-width: 375px;
  width: 100%;
  border: 2px solid #000000;
  background-color: #000;
  border-radius: 6px;

  .larissa{
    height: 250px;
    width: 100%;
    transform: scale(1.01);
  }

  .description{
    width: 100%;
    /* height: 140px; */
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    color: #000;
    margin-top: -8px;
    border-radius: 0px 0px 6px 6px;
  }
}

.content{
  width: 100%;
  .airplane{
    transform: translateX(64px);
    height: 73px;
  }

  .carousel-box{
    max-width: 100%;
    //margin: 0px 16px;

    .card-box{
      background-color: #FCF1E5;
      height: 570px;
      width: 372px;
      border-top: 2px solid #000000;
      border-bottom: 2px solid #000000;
      
      &:first-child{
        border-left: 2px solid #000000;
        border-top: 2px solid #000000;
        border-radius: 20px 0px 0px 20px;
      }

      &:last-child{
        border-right: 2px solid #000000;
        border-top: 2px solid #000000;
        border-radius: 0px 20px 20px 0px;
      }

      &:not(:last-child){
        border-right: 1.5px dashed #000000;
      }

      .ellipse{
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #000000;
        font-size: 26px;
      }

      h2{
        font-weight: 500;
      }

      p{
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
      }
    }
  }

  .dive{
    background-color: #FCF1E5;
    width: 375px;
    border-radius: 20px;
    border: 2px solid #000000;

    &-title{
      background-color: #BDBEBF;
      border-radius: 16px 16px 0px 0px;
      border: 1.5px solid #000000;
      font-weight: normal;
      transform: scale(1.005);
    }
    &-description{
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
    }
    .dashed-bottom{
      border-bottom: 1.5px dashed #000000;
    }
  }
}

.vector{
  position: absolute;
  top: 200px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 

  @media(max-width: 570px)and(min-width: 381px){
    top: 270px;
  }
  @media(max-width: 380px){
    top: 420px;
  }
}

.no-overflow{
  overflow-x: hidden;
}

.radius-20{
  border-radius: 20px !important;
}

.no-border{
  border: none !important;
}

.has-background-blue{
  background-color: #2474DF;
  background-image: url('/images/com-tempo-irmao/grid.svg');
  background-size: 50%;

  @include touch{
    background-size: 100%;
  }
}

.has-background-green{
  background-color: #00A651;
}

.has-background-pink{
  background-color: #F5ADCC;
}

/deep/.flickity-viewport{
  overflow: visible;
}

/deep/.flickity-page-dots{
  .dot{
    background: #ffffff;
  }
}

</style>

<style lang="scss">
.scroll-top-btn {
  background: #00A651;;
}

</style>