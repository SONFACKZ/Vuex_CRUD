// // import { createStore } from 'vuex'

// // export default createStore({
// //   state: {
// //     books: []
// //   },

// //   mutations: {
// //     addBook(state, payload){
// //       state.books.push(payload)
// //     },
// //     deleteBook(state, payload){
// //       state.books = state.books.filter(book => book.id != payload.id)
// //     },
// //     upateBook(state, payload){
// //       let b = state.books.findIndex(book => book.id == payload.id)
// //       state.books.splice(b, 1, payload)
// //     }
// //   },

// //   actions: {
// //     addBook({commit}, book){
// //       commit('addBook', book)
// //     },
// //     deleteBook({commit}, book){
// //       commit('deleteBook', book)
// //     },
// //     updateBook({commit}, book){
// //       commit('updateBook', book)
// //     }
// //   },

// //   getters:{
// //     getAllBooks(state){
// //       return state.books
// //     }
// //   },

// //   modules: {
// //   }
// // })






import { createStore } from 'vuex'
import todos from './modules/todos'

// // Load vuex
// createApp.use(Vuex)

// Create store
const store = createStore({
    modules: {
    todos,
    },
  });
  export default store;


