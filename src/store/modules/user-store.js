import { userService } from '../../services/user-service'
import { utilService } from '../../services/util-service'

export default {
  state: {
    loggedinUser: utilService.loadFromSessionStorage('user') || null,
  },
  getters: {
    user(state) {
      return state.loggedinUser;
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedinUser = user
    },
    updateOrder(state, { order }) {
      const idx = state.user.orders.findIndex(currOrder => currOrder._id === order._id)
      state.user.orders.splice(idx, 1, order)
    },
    addOrder(state, { order }) {
      state.user.orders.unshift(order)
    },
  },
  actions: {
    async loadUser({ commit, state }) {
      try {
       const user = userService.query(state.filterBy)
       commit({ type: 'setUser', user })
      } catch (err) {
        console.log(err)
      }
    },
    async login({ commit }, { cred }) {
      try {
        const user = await userService.login(cred)
        console.log('loggedin (store)...', user);
        commit({ type: 'setUser', user })
        utilService.saveToSessionStorage('user', user)
      } catch (err) {
        console.log(err)
      }
    },
    async signup({ commit }, { cred }) {
      try {
        const user = await userService.signup(cred)
        console.log('signed up (store)...', user);
        commit({ type: 'setUser', user })
        utilService.saveToSessionStorage('user', user)
      } catch (err) {
        console.log(err)
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: 'setUser', user: null })
        sessionStorage.removeItem('user')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
