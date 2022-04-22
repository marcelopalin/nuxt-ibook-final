/* É aqui que iremos consumir nossa API. Ou seja os dados dos livros,
que serão injetados na nossa aplicação via SSR 😉 */

//  Como apenas a Entidade Book irá utilizar
// Vamos definir a Entidade Category aqui.
interface Category {
  id: number
  name: string
}

// *¹
interface Page {
  id: number
  text: string
  pageNumber: number
}

// Vamos querer ter o autocomplete no TS
// vamos tipar a Entidade Book
export interface Book {
  id: number
  author: string
  releaseDate: string
  title: string
  description: string
  cover: string
  categories: Category[] // definida acima
  pages: Page[]
}
