# Markdown syntax guide

## Rodando o projeto
Recomendamos o uso do gerenciador yarn.

```
# instale as dependencias
yarn

# rode o projeto em modo dev
yarn dev
```

## Adicionando uma nova página
Novas páginas devem ser adicionadas na pasta frontend/components/ seguindo o padrão kebab-case, exemplo: `/nova-pagina/index.vue`

- Use a pasta nova-pagina/ para guardar todo componente não compartilhado com outras páginas.
- Todo arquivo index.vue dentro de components/ poderá ser considerado uma página.
- Após criar o arquivo da página, acesse pelo browser, exemplo: `localhost:3000/nova-pagina/`

## Observações
A importação automática de components/ está ativada nesse projeto. Saiba mais:
- https://nuxtjs.org/guides/directory-structure/components#components-discovery
- https://fullstackworld.com/2020-06-01-auto-import-components-in-nuxtjs/

Utilizamos o bulma e o buefy no projeto, então existem diversas classes e componentes prontos, veja as documentações:
- https://bulma.io/
- https://buefy.org/

## 

## Componentes
Lista dos componentes compartilhados e uso básico. Para mais detalhes, verifique o componente dentro do projeto.
### ResponsiveImage
Utilizado para carregar diferentes imagens em diferentes viewport breakpoints. Uso:
```
<template>
  <ResponsiveImage :sources="image.src" :lazyload="false" :alt="image.alt" />
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      image: baseImage([
        {src:'/images/page_1/section_1/mobile.png, /images/page_1/section_1/mobile@2x.png 2x', query: '(max-width: 1023px)'},
        {src:'/images/page_1/section_1/desktop.png, /images/page_1/section_1/desktop@2x.png 2x', query: ''}
      ], 'Alternative text'),
    }
  }
}
</script>
```
### LazyImage
```
<template>
  <LazyImage :src="image2.src" alt="" role="presentation" class="icon-image" />
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      image2: baseImage('/images/shared/success.svg', 'Success', 'Success'),
    }
  }
}
</script>
```
### CardSlider
Apesar do nome, o CardSlider não se limita apenas à cards. Para ver todas as opções de configuração, visite a página da lib usada: https://flickity.metafizzy.co/options.html
```
<template>
  <CardSlider :queries="slider_config" class="m-b-56">
    <div v-for="index in 10" :key="index" class="p-12">
      <div class="generic-card">
        {{ index }}
      </div>
    </div>
  </CardSlider>
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      slider_config:[
        {
          max_width: 1024, // apply config above 1025px
          config: {
            imagesLoaded:false,
            cellAlign: 'left',
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: true,
            wrapAround: false,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        },
        {
          max_width: 9999, // apply config to all sizes, except to <1024
          config: {
            imagesLoaded:false,
            cellAlign: 'center',
            initialIndex: 1,
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        }
      ]
    }
  }
}
</script>
```
### LazyImage
```
<template>
  <LazyImage :src="image2.src" alt="" role="presentation" class="icon-image" />
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      image2: baseImage('/images/shared/success.svg', 'Success', 'Success'),
    }
  }
}
</script>
```
### Spotify Embed
Informação completa: https://developer.spotify.com/documentation/widgets/generate/embed/
```
<template>
  <iframe
    src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
    width="300"
    height="380"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
</template>

<script>
export default { }
</script>
```