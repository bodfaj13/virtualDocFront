<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="" @click="goToReportComplaint"><i class="fa fa-fw fa-dashboard"></i> Patient Dashboard</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-dark" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="dashbboardAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Report Complaint">
          <a class="nav-link" href="" @click="goToReportComplaint">
            <i class="fa fa-fw fa-volume-up"></i>
            <span class="nav-link-text">Report Complaint</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="View All Complaint">
          <a class="nav-link" href="" @click="goToViewAllComplaint">
            <i class="fa fa-fw fa-list"></i>
            <span class="nav-link-text">All Complaint</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
          <a class="nav-link" href="" @click="goToSettings">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">Settings</span>
          </a>
        </li>

      </ul>
      <!-- <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul> -->
      <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
          <a class="nav-link" @click="goBack">
            <i class="fa fa-fw fa-arrow-left"></i>Go Back</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goFront">
            <i class="fa fa-fw fa-arrow-right"></i>Go Forward</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#logoutModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PatientNav',
  data: () => ({
    msg: 'Welcome to PatientNav Component!'
  }),
  methods: {
    goToSettings (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientSettings'})
    },
    goBack (e) {
      e.preventDefault()
      this.$router.go(-1)
    },
    goFront (e) {
      e.preventDefault()
      this.$router.go(+1)
    },
    goToViewAllComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientViewComplaints'})
    },
    goToReportComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'MakeComplaints'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media only screen and (max-width: 600px) {

  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {

  }
  @media only screen and (min-width: 993px) {

  }
</style>
