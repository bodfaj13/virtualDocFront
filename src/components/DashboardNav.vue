<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="" @click="gotoCreateDoctor"><i class="fa fa-fw fa-dashboard"></i> Admin Dashboard</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="dashbboardAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Record Call">
          <a class="nav-link" href="" @click="gotoCreateDoctor">
            <i class="fa fa-fw fa-user-md"></i>
            <span class="nav-link-text">Create Doctor</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="All Complaint">
          <a class="nav-link" href="" @click="gotoAllComplaint">
            <i class="fa fa-fw fa-briefcase"></i>
            <span class="nav-link-text">All Complaint</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="All Patients">
          <a class="nav-link" href="" @click="gotoAllPatient">
            <i class="fa fa-fw fa-briefcase"></i>
            <span class="nav-link-text">All Patients</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="All Doctor">
          <a class="nav-link" href="" @click="gotoAllDoctor">
            <i class="fa fa-fw fa-briefcase"></i>
            <span class="nav-link-text">All Doctor</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
          <a class="nav-link" href="" @click="gotoSettings">
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
  name: 'DashboardNav',
  data: () => ({
    msg: 'Welcome to DashboardNav Component!'
  }),
  methods: {
    gotoCreateDoctor (e) {
      e.preventDefault()
      this.$router.push({name: 'CreateDoctor'})
    },
    gotoAllComplaint (e) {
      e.preventDefault()
      this.$router.push({name: 'AllComplaint'})
    },
    gotoAllPatient (e) {
      e.preventDefault()
      this.$router.push({name: 'AllPatient'})
    },
    gotoSettings (e) {
      e.preventDefault()
      this.$router.push({name: 'Settings'})
    },
    gotoAllDoctor (e) {
      e.preventDefault()
      this.$router.push({name: 'AllDoctor'})
    },
    goBack (e) {
      e.preventDefault()
      this.$router.go(-1)
    },
    goFront (e) {
      e.preventDefault()
      this.$router.go(+1)
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
