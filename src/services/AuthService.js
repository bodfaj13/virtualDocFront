import Api from './Api'

export default {
  adminLogin (credentials) {
    return Api().post('adminlogin', credentials)
  },
  doctorLogin (credentials) {
    return Api().post('doctorlogin', credentials)
  },
  patientLogin (credentials) {
    return Api().post('patientlogin', credentials)
  },
  registerAdmin (credentials) {
    return Api().post('registeradmin', credentials)
  },
  registerDoctor (credentials) {
    return Api().post('registerdoctor', credentials)
  },
  registerPatient (credentials) {
    return Api().post('registerpatient', credentials)
  },
  adminPassUpdate (credentials) {
    return Api().post('adminupdatepass', credentials)
  },
  patientPassUpdate (credentials) {
    return Api().post('patientupdatepass', credentials)
  },
  doctorPassUpdate (credentials) {
    return Api().post('doctorupdatepass', credentials)
  }
}
