import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
// Importando a entidade Book:
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

// Interface da action show:
interface Show {
  /* Repassa o id da entidade Book:
   deixando ele menos propício a bugs. Já
   que pega o Id diretamente da API. */
   // Se no futuro id deixar de ser number
   // aqui já é alterado naturalmente
  id: Book['id']
}

// A partir daqui temos o Vuex, que altera o estado do app:
@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  /* São os estados/states, e mutations da nossa aplicação "private". Ou seja =
  Alterados apenas pela nossa própria classe de módulo. Não pelos componentes 😎😉 */

  // Obs: um Arrray pode ser vazio, um Objeto não, declarando com `as Book`
  // evita de termos que declarar todos os campos do singleBook.
  // Estado a partir da interface para receber todos os livros da API:
  private books = [] as Book[]
  // Estado a partir de um objeto para receber da API os dados de um livro em específico:
  private singleBook = {} as Book

  // Getter de listagem de todos os livros:
  public get $all() {
    return this.books
  }

  // Getter de listagem de um livro específico:
  public get $single() {
    return this.singleBook
  }

  /* Mutation que altera o estado de todos os livros: */
  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  /* Mutation que altera o estado de um livro específico: */
  @Mutation
  private SET_SINGLE(book: Book) {
    this.singleBook = book
  }

  // Action que chama a mutation de alteração de estado de todos os livros:
  @Action
  public async index() {
    /* Faz a requisição de listagem na baseURL definida no "nuxt.config.ts"
    a partir da rota nos parênteses: */
    // NuxtAxios é diferente o Axios - nele temos o método $get
    // que retornará direto desestruturado as informações
    const books = await $axios.$get('/books')

    console.log(books)
    /* Vendo se a listagem de livros da API deu certo:
      console.log(books)
    */

    /* Dispara a partir do contexto commit para
    executar a mutation de nome '' no estado X: */
    this.context.commit('SET_ALL', books)
  }

  // Action que chama a mutation de alteração de estado de um livro:
  // Para deixar mais Legível fazemos uma interface para cada método
  // Desestrurando {id}
  @Action
  public async show({ id }: Show) {
    /* Altera um livro em específico a partir do seu ID:
    (definido lá em cima na interface Show) */
    // NuxtAxios é diferente o Axios - nele temos o método $get
    // que retornará direto desestruturado as informações
    const singleBook = await $axios.$get(`/books/${id}`)
    this.context.commit('SET_SINGLE', singleBook)
  }

  /* Não precisamos desestruturar os dados requisitados na API com o Nuxt graças ao
  método "$get". Que já retorna desestruturada automaticamente nossa info requisitada. */
}
