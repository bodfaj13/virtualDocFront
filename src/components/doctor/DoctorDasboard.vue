<template>
  <div class="content bg-dark" id="page-top">
    <DoctorNav></DoctorNav>
    <div class="content-wrapper">
      <div class="container-fluid bg-light">
        <!-- Breadcrumbs-->
        <ol class="breadcrumb firstBread animated slideInLeft">
          <li class="breadcrumb-item">
            <a href="" style="text-decoration: none" @click="doNothing">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">{{username | toUppercase}}</li>
        </ol>
        <ol class="breadcrumb animated slideInLeft">
          <li class="breadcrumb-item">
            <a href="" style="text-decoration: none" @click="doNothing">Current Status</a>
          </li>
          <li class="breadcrumb-item active">
            <span v-if="currentStatus" class="badge badge-primary"><b>You are currently avaliable at the Hospital</b></span>
            <span v-else class="badge badge-danger"><b>You are currently not avaliable at the Hospital</b></span>
            <br>
          </li>

          <button type="button" class="btn btn-block text-white btn-md" @click="changeStatus" style="margin-top: 4px" :class="{'btn-primary': !currentStatus, 'btn-info': currentStatus}">
              <span v-if="currentStatus">Out of the Hospital</span>
              <span v-else>Back at the Hospital</span>
          </button>
        </ol>

        <hr>

        <!-- Icon Cards-->
        <div class="row">
          <div class="col-xl-4 col-sm-6 mb-4 animated bounceIn">
            <div class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-volume-up"></i>
                </div>
                <div class="mr-5"><b>{{totalComplaintsNo}} Total Session(s) Handled</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllComplaint">
                <span class="float-left">View Details</span>
                <span class="float-right">
                  <i class="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-4 animated bounceIn">
            <div class="card text-white bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-heartbeat"></i>
                </div>
                <div class="mr-5"><b>{{totalActiveComplaintsNo}}  Active Session(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllAciveComplaint">
                <span class="float-left">View Details</span>
                <span class="float-right">
                  <i class="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-4 animated bounceIn">
            <div class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-stethoscope"></i>
                </div>
                <div class="mr-5"><b>{{totalResolvedComplaintsNo}} Resolved Session(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllReolvedComplaint">
                <span class="float-left">View Details</span>
                <span class="float-right">
                  <i class="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- component view -->
      <router-view class="container-fluid" id="cview" @reRunNumbers="reRun"></router-view>
      <br>
      <br>

      <!-- Footer -->
      <DoctorFooter></DoctorFooter>
    </div>

  </div>
</template>

<script>
import DoctorNav from './DoctorNav'
import DoctorFooter from './DoctorFooter'
import DataFunctions from '../../services/DataFunctions'
import Functions from '../../services/Functions'

export default {
  name: 'DoctorDasboard',
  data: () => ({
    msg: 'Welcome to DoctorDasboard Component!',
    username: '',
    totalComplaintsNo: '',
    totalActiveComplaintsNo: '',
    patientId: '',
    totalResolvedComplaintsNo: '',
    currentStatus: '',
    contactNo: ''
  }),
  components: {
    DoctorNav,
    DoctorFooter
  },
  methods: {
    getUser () {
      var user = JSON.parse(localStorage.getItem('setDoctor'))
      this.username = user.fullName
      this.doctorId = user._id
      this.currentStatus = user.inHospital
      this.contactNo = user.contactNo
      console.log(this.username)
      console.log(this.doctorId)
      console.log(this.contactNo)
    },
    doNothing (e) {
      e.preventDefault()
    },
    reRun () {
      this.getTotalComplaintNo()
      this.getTotalActiveComplaintNo()
      this.getPatientResolvedComplaint()
    },
    async getTotalComplaintNo () {
      try {
        const response = await DataFunctions.getDoctorComplaints({
          doctorId: this.doctorId
        })
        console.log(response)
        this.totalComplaintsNo = response.data.data.length
        console.log(this.totalComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async getTotalActiveComplaintNo () {
      try {
        const response = await DataFunctions.getDoctorActiveComplaints({
          doctorId: this.doctorId
        })
        console.log(response)
        this.totalActiveComplaintsNo = response.data.data.length
        console.log(this.totalActiveComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async getPatientResolvedComplaint () {
      try {
        const response = await DataFunctions.getDoctorResolvedComplaint({
          doctorId: this.doctorId
        })
        console.log(response)
        this.totalResolvedComplaintsNo = response.data.data.length
        console.log(this.totalResolvedComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async changeStatus (e) {
      e.preventDefault()
      this.currentStatus = !this.currentStatus
      try {
        const response = await Functions.changeStatus({
          doctorId: this.doctorId,
          inHospital: this.currentStatus
        })
        console.log(response)
        this.currentStatus = response.data.data.inHospital
        console.log(this.totalResolvedComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    goToViewAllComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'DoctorViewComplaints'})
    },
    goToViewAllAciveComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'DoctorAcitveComplaints'})
    },
    goToViewAllReolvedComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'DoctorResolvedComplaints'})
    }
  },
  mounted () {
    this.getUser()
    this.reRun()
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .firstBread {
    margin-top: 50px;
  }
  #cview {
    margin-bottom: 20px;
  }
  .view {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {

  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {

  }
  @media only screen and (min-width: 993px) {

  }
</style>
