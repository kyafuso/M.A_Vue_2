import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender : '',
    year : '1990',
    month : '1',
    day : '1',
    insurance : '',
    hospitalization : '',
    history : '',
    consultation : ''
  },
  getters: {
    gender: state => state.gender,
    year: state => state.year,
    month: state => state.month,
    day: state => state.day,
    insurance: state => state.insurance,
    hospitalization: state => state.hospitalization,
    history: state => state.history,
    consultation: state => state.consultation
  },
  mutations: {
    setGender (state, gender) {
      state.gender = gender;
    },
    setYear (state, year) {
      state.year = year
    },
    setMonth (state, month) {
      state.month = month
    },
    setDay (state, day) {
      state.day = day
    },
    setInsurance (state, insurance) {
      state.insurance = insurance
    },
    setHospitalization (state, hospitalization) {
      state.hospitalization = hospitalization
    },
    setHistory (state, history) {
      state.history = history
    },
    setConsultation (state, consultation) {
      state.consultation = consultation
    }
  },
  actions: {
  },
  modules: {
  }
})
