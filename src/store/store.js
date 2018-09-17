import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    isAdminLoggedIn: false,
    adminDetails: {},
    isPatientLoginIn: false,
    patientDetails: {},
    isDoctorLogin: false,
    doctorDetails: {}
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isAdminLoggedIn = true
      } else {
        state.isAdminLoggedIn = false
        state.adminDetails = {}
      }
    },
    setTokenDoctor (state, token) {
      state.token = token
      if (token) {
        state.isDoctorLogin = true
      } else {
        state.isDoctorLogin = false
        state.doctorDetails = {}
      }
    },
    setTokenPatient (state, token) {
      state.token = token
      if (token) {
        state.isPatientLoginIn = true
      } else {
        state.isPatientLoginIn = false
        state.patientDetails = {}
      }
    },
    setAdmin (state, adminDetails) {
      state.adminDetails = adminDetails
    },
    setDoctor (state, doctorDetails) {
      state.doctorDetails = doctorDetails
    },
    setPatient (state, patientDetails) {
      state.patientDetails = patientDetails
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setTokenDoctor ({commit}, token) {
      commit('setTokenDoctor', token)
    },
    setTokenPatient ({commit}, token) {
      commit('setTokenPatient', token)
    },
    setAdmin ({commit}, adminDetails) {
      commit('setAdmin', adminDetails)
    },
    setDoctor ({commit}, doctorDetails) {
      commit('setDoctor', doctorDetails)
    },
    setPatient ({commit}, patientDetails) {
      commit('setPatient', patientDetails)
    }
  }
})
