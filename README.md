# nuxt-ibook-new

Exemplo já implementado deste projeto pode ser visto em:

https://github.com/Thiagoow/NuxtJs-IbookProject-ScalingVue

E a API com os dados em:

https://github.com/Thiagoow/API-JsonServer-iBook-ThiagoSilvaLopes

# Rodando o Projeto

Instale globalmente o json-server e execute-o na raiz do projeto:

```s
json-server --watch books.json --port 3333
```

Veja que a porta 3333 está definida no `nuxt.config.js`

Abra um novo terminal e instale os pacotes e rode a aplicação:

```s
npm install
npm run dev
```

Acesse: localhost:3000 - abra o console neste ponto, deixei
a impressão dos ebooks para você verificar que estamos
preenchendo o vuex do lado do servidor.

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

## Backend

Instale https://www.fabricadecodigo.com/json-server/

```s
npm install -g json-server
```

Execute:

```
json-server --watch books.json
```

Acesse:

```s
http://localhost:3000/books
```

## Rotas

Request	URL	Detalhes
GET	/books	Busca todos os books
GET	/books/1	Busca um book
POST	/books	Salva um book
PUT	/books/1	Atualiza dos os dados do book
PATCH	/books/1	Atualiza parte dos dados do book
DELETE	/books/1	Remove um book
