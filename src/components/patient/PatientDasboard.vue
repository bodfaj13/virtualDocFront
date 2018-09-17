<template>
  <div class="content" id="page-top">
      <PatientNav></PatientNav>
      <div class="content-wrapper">
      <div class="container-fluid">
        <!-- Breadcrumbs-->
        <ol class="breadcrumb animated slideInLeft">
          <li class="breadcrumb-item">
            <a href="#" style="text-decoration: none" @click="doNothing">Dashboard</a>
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
                  <i class="fa fa-fw fa-phone"></i>
                </div>
                <div class="mr-5"><b>{{totalCalls}} Total Call(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewCall">
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
                  <i class="fa fa-fw fa-list"></i>
                </div>
                <div class="mr-5"><b>{{totalCases}}  Total Case(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewCase">
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
                  <i class="fa fa-fw fa-ambulance"></i>
                </div>
                <div class="mr-5"><b>{{availableAmb}} Available Ambulance(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewAmbulance">
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
                  <i class="fa fa-fw fa-briefcase"></i>
                </div>
                <div class="mr-5"><b>{{totaldrivers}} Available <br>Driver(s)</b></div>
              </div>
              <a class="card-footer text-white clearfix small z-1 view" @click="goToViewDriver">
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
      <!-- <router-view class="container-fluid" id="cview" @reRunNumbers="reRun"></router-view>
      <br>
      <br> -->

      <!-- Footer -->
      <PatientFooter></PatientFooter>
    </div>

  </div>
</template>

<script>
import PatientNav from './PatientNav'
import PatientFooter from './PatientFooter'

export default {
  name: 'PatientDasboard',
  data: () => ({
    msg: 'Welcome to PatientDasboard Component!'
  }),
  components: {
    PatientNav,
    PatientFooter
  },
  methods: {
    getUser () {
      var user = JSON.parse(localStorage.getItem('setPatient'))
      this.username = user.fullName
    }
  },
  mounted () {
    this.getUser()
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
