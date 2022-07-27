import { createStore } from 'vuex'
import stayStore from './modules/stay-store'
import userStore from './modules/user-store'
import reviewStore from './modules/review-store'
import orderStore from './modules/order-store'

const store = createStore({
   strict: true,
   state: {},
   getters: {},
   mutations: {},
   actions: {},
   modules: {
     stayStore,
     userStore,
     reviewStore,
     orderStore
   },
 })
 
 export default store


 