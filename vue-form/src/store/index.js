import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form : {
      gender : '',
      year : '1990',
      month : '1',
      day : '1',
      insurance : '',
      hospitalization : '',
      history : '',
      consultation : ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
