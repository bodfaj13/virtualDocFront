import Vue from 'vue'
import Router from 'vue-router'
import DoctorLogin from '@/pages/DoctorLogin'
import PatientLogin from '@/pages/PatientLogin'
// import Dashboard from '@/pages/Dashboard'
// import store from '@/store/store'
import HomePage from '@/pages/HomePage'
import PatientRegister from '@/pages/PatientRegister'
import PatientDasboard from '@/components/patient/PatientDasboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/doctorlogin',
      name: 'DoctorLogin',
      component: DoctorLogin
    },
    {
      path: '/patientlogin',
      name: 'PatientLogin',
      component: PatientLogin
    },
    {
      path: '/patientregister',
      name: 'PatientRegister',
      component: PatientRegister
    },
    {
      path: '/patient/dashboard',
      name: 'PatientDasboard',
      component: PatientDasboard
    }
  ]
})
