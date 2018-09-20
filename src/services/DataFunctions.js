import Api from './Api'

export default {
  getPatientComplaints (credentials) {
    return Api().post('getpatientcomplaints', credentials)
  },
  getPatientActiveComplaints (credentials) {
    return Api().post('getpatientactivecomplaints', credentials)
  },
  getPatientResolvedComplaint (credentials) {
    return Api().post('getpatientresolvedcomplaints', credentials)
  },
  getDoctorComplaints (credentials) {
    return Api().post('getdoctorcomplaints', credentials)
  },
  getDoctorActiveComplaints (credentials) {
    return Api().post('getdoctoractivecomplaints', credentials)
  },
  getDoctorResolvedComplaint (credentials) {
    return Api().post('getdoctorresolvedcomplaints', credentials)
  },
  getDoctor () {
    return Api().get('getdoctor')
  },
  getPatient () {
    return Api().get('getpatient')
  },
  getComplaint () {
    return Api().get('getcomplaint')
  },
  getDoctorsAvailable () {
    return Api().get('getdocvtorsavailable')
  },
  getActiveComplaint () {
    return Api().get('getactivecomplaint')
  },
  getAnsweredComplaint () {
    return Api().get('getansweredcomplaint')
  }
}
