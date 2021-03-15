import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socialId: '',
  },
  mutations: {
    updateId(state, payload) {
      state.socialId = payload
    }
  },
  actions: {
    createSocial({commit, state}, payload){
      Vue.http.post(`social.json`, payload)
      .then(response => response.json())
      .then(response => {
        
        commit('updateId', response.name)
        console.log(state.socialId)

      })
    },
    getSocial({state}, payload){
      Vue.http.get(`social.json?orderBy="$key"`)
      .then(response => response.json())
      .then(response => {
        const socials = []
        for(let key in response){
          socials.push({
            ...response[key],
            id:key
          })
        }
        console.log(socials)
      })

    }
  },
  modules: {
  }
})
