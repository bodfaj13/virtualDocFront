import Vue from 'vue'
import Router from 'vue-router'
import DoctorLogin from '@/pages/DoctorLogin'
import PatientLogin from '@/pages/PatientLogin'
// import Dashboard from '@/pages/Dashboard'
// import store from '@/store/store'
import HomePage from '@/pages/HomePage'
import PatientRegister from '@/pages/PatientRegister'
import PatientDasboard from '@/components/patient/PatientDasboard'
import PatientSettings from '@/components/patient/PatientSettings'
import MakeComplaints from '@/components/patient/MakeComplaints'
import PatientViewComplaints from '@/components/patient/PatientViewComplaints'
import PatientActiveComplaint from '@/components/patient/PatientActiveComplaint'
import PatientResolvedComplaint from '@/components/patient/PatientResolvedComplaint'
import DoctorDasboard from '@/components/doctor/DoctorDasboard'
import DoctorSettings from '@/components/doctor/DoctorSettings'
import AnswerComplaints from '@/components/doctor/AnswerComplaints'
import DoctorViewComplaints from '@/components/doctor/DoctorViewComplaints'

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
      path: '/dashboard/patient',
      // name: 'PatientDasboard',
      component: PatientDasboard,
      children: [
        {
          path: '',
          name: 'MakeComplaints',
          component: MakeComplaints
        },
        {
          path: '/dashboard/patient/settings',
          name: 'PatientSettings',
          component: PatientSettings
        }
      ]
    },
    {
      path: '/dashboard/patient/view-complaints',
      name: 'PatientViewComplaints',
      component: PatientViewComplaints
    },
    {
      path: '/dashboard/patient/view-active-complaints',
      name: 'PatientActiveComplaint',
      component: PatientActiveComplaint
    },
    {
      path: '/dashboard/patient/view-resolved-complaints',
      name: 'PatientResolvedComplaint',
      component: PatientResolvedComplaint
    },
    {
      path: '/dashboard/doctor',
      // name: 'DoctorDasboard',
      component: DoctorDasboard,
      children: [
        {
          path: '',
          name: 'AnswerComplaints',
          component: AnswerComplaints
        },
        {
          path: '/dashboard/doctor/settings',
          name: 'DoctorSettings',
          component: DoctorSettings
        }
      ]
    },
    {
      path: '/dashboard/doctor/view-complaints',
      name: 'DoctorViewComplaints',
      component: DoctorViewComplaints
    }
  ]
})
