import { Module, VuexModule } from 'vuex-module-decorators'

@Module({name: 'books', stateFactory: true, namespaced: true})
export default class Books extends VuexModule {
  books = ['livro1', 'livro2']

}
