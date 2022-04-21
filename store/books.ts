import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({name: 'books', stateFactory: true, namespaced: true})
export default class Books extends VuexModule {
  books = ['livro1', 'livro2']
  // state, mutations,

  // estado - componentes não tem acesso direto
  private count = 0

  // Definição vamos usar $cound para o getter
  // indicando para o Time que esta informação não pode ser alterada diretamente

  public get $count() {
    return this.count
  }

  // Ao clicar no botão vamos disparar uma Action que chama uma Mutation
  // Convenção usar letra MAIÚSCULA
  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  // Criando a Action que o Botão dispara
  @Action
  increment(incremento: number){
    this.context.commit('INCREMENT', incremento)
  }




}
