import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
  },
  actions: {
    createSocial({commit, state}, payload){
      Vue.http.post(`social.json`, payload)
    }
  },
  modules: {
  }
})
