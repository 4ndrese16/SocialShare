import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socialId: '',
    social: '',
  },
  mutations: {
    updateId(state, payload) {
      state.socialId = payload
    },
    getSocial(state, payload) {
      state.social = payload
      
    }
  },
  actions: {
    createSocial({commit, state}, payload){
      console.log("oki");
      Vue.http.post(`social.json`, payload)
      .then(response => response.json())
      .then(response => {
        
        commit('updateId', response.name)
        console.log(state.socialId)
        router.push(`/social/${ state.socialId }`)

      })
    },
    getSocial({commit, state}, payload){
      Vue.http.get(`social.json?orderBy="$key"`)
      .then(response => response.json())
      .then(response => {
        let social = {}
        for(let key in response){
        
          social = {
            ...response[key],
            id: key
          }
        }
        commit('getSocial', social)
        

      })

    }
  },
  modules: {
  }
})
