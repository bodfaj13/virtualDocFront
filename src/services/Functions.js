import Api from './Api'

export default {
  makeComplaint (credentials) {
    return Api().post('makecomplaint', credentials)
  },
  answerComplaint (credentials) {
    return Api().post('answercomplaint', credentials)
  },
  acceptTreatment (credentials) {
    return Api().post('accepttreatment', credentials)
  }
}
