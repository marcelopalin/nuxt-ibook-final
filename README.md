# nuxt-ibook-new

## Rodando com Docker

Podemos construir a imagem e nomeá-la de nuxt:nginx

```s
docker build -t nuxt:nginx .
```

e depois rodá-la com o comando:

```s
docker run --name basic_nuxt --rm -d -p 3333:80 nuxt:nginx
```

ou simplemente rodar o comando:

```s
docker-compose up -d --build
```

# Template Pronto

Coloquei o projeto no GitHub e adicionei a Site Base para marcar até onde ainda não estava com o Vuex e Axios.

```s
git tag -a vsSiteBase -m "Apenas parte de Estrutura sem Dados do Backend"
git push --tags
```

Vuex + Typescript + NuxtAxios


https://axios.nuxtjs.org/setup

```s
npm install @nuxtjs/axios
```

No arquivo nuxt.config.js coloque:
```s
 modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  axios: {
    baseURL: process.env.NOV_ENV === 'production' ? '' : 'http://localhost:3333'
  },
```

Ná página Nuxt Typescript que indica utilizarmos o pacote vuex-module-decorators
https://typescript.nuxtjs.org/pt/cookbook/store#vuex-module-decorators

Crie o arquivo plugins\accessor.ts
```s
import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
```

No arquivo nuxt.config.js coloque:

```s
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor'],
```

Crie o arquivo utils\nuxt-instance.ts que é o que foi pedido aqui em  https://typescript.nuxtjs.org/pt/cookbook/store#vuex-module-decorators na seção 3
utils/api.ts (que trocamos o nome para nuxt-instance.ts)

```s
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }
```


Instalando Vuex e Vuex Module Decorators


```s
    "vuex": "^3.6.2",
    "vuex-module-decorators": "^2.0.0",
```

```s
npm install vuex@3.6.2
npm install --save vuex-module-decorators --force
```

Se tentar instalar as últimas versões NÃO FUNCIONARÁ!

# Solução do Erro de Depreciação

```
ERROR  (node:21489) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at /home/mpi/www/nuxt-ibook-final/node_modules/vuex/package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
```

Entre no pacote vuex dentro de node_modules/vuex e edite o arquivo package.json
alterando a linha 12 de
`"./": "./"` para  `"./*": "./*"`

Pronto! Não aparecerá mais o erro!
Terá que fazer isto toda vez que instalar o projeto do Zero!

## PACOTES DESATUALIZADOS

```s
npm outdated
Package                           Current  Wanted  Latest  Location                                       Depended by
@nuxtjs/eslint-config-typescript    8.0.0   8.0.0   9.0.0  node_modules/@nuxtjs/eslint-config-typescript  nuxt-ibook-final
sass-loader                        10.2.1  10.2.1  12.6.0  node_modules/sass-loader                       nuxt-ibook-final
vue                                2.6.14  2.6.14  3.2.33  node_modules/vue                               nuxt-ibook-final
webpack                            4.46.0  4.46.0  5.72.0  node_modules/webpack                           nuxt-ibook-final
```


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
