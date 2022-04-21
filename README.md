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

## Iniciando com o Bootcamp

Depois de copiar a pasta `.vscode`, `assets`, favicon.ico na pasta static e
o arquivo `.prettier` vamos começar a seguir os passos das aulas.

- Instalando o pacote normalise.css

Lembrando que utilizaremos o `scss` que permite aninhar seletor dentro de seletor.
Ou seja, não presisamos ficar criando separado a estilização de cada componente
ex: h1 {} h1 span {} - basta colocar span dentro de h1 em scss.

- Copie a pasta `layouts` pois teremos o layout padrão (vazio) e o layout
que usaremos para a página do site `ibook.vue`
- O Layout da página de error 404 está em `layouts\error.vue`

- Defina as regras em eslint:
```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off'
  }
}
```
- Copie em componente as pastas 1) bosons e 2) atomos 3) organisms e 4) templates
- Instale `npm install sass -D`

Ajuste o arquivo `nuxt.config.js` que pode ser renomeado para `.ts`:

```js
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@assets/scss/base.scss'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{path: '@/components', pathPrefix: false}],
```

O arquivo .editorconfig:

```yml
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2

[*.yml]
indent_size = 2

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
