<template>
  <div class="content bg-dark" id="page-top">
    <DashboardNav></DashboardNav>
    <div class="content-wrapper">
      <div class="container-fluid bg-light">
        <!-- Breadcrumbs-->
        <ol class="breadcrumb animated slideInLeft">
          <li class="breadcrumb-item">
            <a href="" style="text-decoration: none" @click="doNothing">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">{{username | toUppercase}}</li>
        </ol>
        <hr>

        <!-- Icon Cards-->
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-3 animated bounceIn">
            <div class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-volume-up"></i>
                </div>
                <div class="mr-5"><b>{{totalComplaintsNo}} Total Complaint(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllComplaint">
                <span class="float-left">View Details</span>
                <span class="float-right">
                  <i class="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3 animated bounceIn">
            <div class="card text-white bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-heartbeat"></i>
                </div>
                <div class="mr-5"><b>{{totalActiveComplaintsNo}}  Active Complaint(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllAciveComplaint">
                <span class="float-left">View Details</span>
                <span class="float-right">
                  <i class="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3 animated bounceIn">
            <div class="card text-white bg-success o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-user-md"></i>
                </div>
                <div class="mr-5"><b>{{getDoctorsAvailableNo}} Doctors On Premesis </b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllActiveDoctor">
                <span class="float-left">View Details</span>
                <span class="float-right">
                  <i class="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3 animated bounceIn">
            <div class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon animated pulse infinite">
                  <i class="fa fa-fw fa-stethoscope"></i>
                </div>
                <div class="mr-5"><b>{{totalResolvedComplaintsNo}} Resolved Complaint(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAllReolved">
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
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
import DashboardNav from './DashboardNav'
import Footer from './Footer'
import DataFunctions from '../services/DataFunctions'

export default {
  name: 'Dashboard',
  data: () => ({
    msg: 'Welcome to Dashboard Component!',
    username: '',
    totalComplaintsNo: '',
    totalActiveComplaintsNo: '',
    patientId: '',
    totalResolvedComplaintsNo: '',
    getDoctorsAvailableNo: ''
  }),
  components: {
    DashboardNav,
    Footer
  },
  methods: {
    getUser () {
      var user = JSON.parse(localStorage.getItem('setAdmin'))
      this.username = user.fullName
      this.patientId = user._id
      console.log(this.username)
      console.log(this.patientId)
    },
    doNothing (e) {
      e.preventDefault()
    },
    reRun () {
      this.getTotalComplaintNo()
      this.getTotalActiveComplaintNo()
      this.getPatientResolvedComplaint()
      this.getDoctorsAvailable()
    },
    async getTotalComplaintNo () {
      try {
        const response = await DataFunctions.getComplaint()
        console.log(response)
        this.totalComplaintsNo = response.data.data.length
        console.log(this.totalComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async getTotalActiveComplaintNo () {
      try {
        const response = await DataFunctions.getActiveComplaint()
        console.log(response)
        this.totalActiveComplaintsNo = response.data.data.length
        console.log(this.totalActiveComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async getPatientResolvedComplaint () {
      try {
        const response = await DataFunctions.getAnsweredComplaint()
        console.log(response)
        this.totalResolvedComplaintsNo = response.data.data.length
        console.log(this.totalResolvedComplaintsNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async getDoctorsAvailable () {
      try {
        const response = await DataFunctions.getDoctorsAvailable()
        console.log(response)
        this.getDoctorsAvailableNo = response.data.data.length
        console.log(this.getDoctorsAvailableNo)
      } catch (error) {
        console.log(error.response.data)
      }
    },

    goToViewAllComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'AllComplaint'})
    },
    goToViewAllAciveComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'ActiveComplaint'})
    },
    goToViewAllReolved (e) {
      e.preventDefault()
      this.$router.push({name: 'ResolvedComplaint'})
    },
    goToViewAllActiveDoctor (e) {
      e.preventDefault()
      this.$router.push({name: 'ActiveDoctor'})
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
  .breadcrumb {
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
