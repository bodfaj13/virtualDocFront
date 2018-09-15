<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">VirtualDoctor</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="" @click="goHome">Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="" @click="patientLogin">Patient Login</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="" @click="doctorLogin">Doctor Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    msg: 'Welcome to Nav Component!'
  }),
  methods: {
    goHome (e) {
      e.preventDefault()
      this.$router.push({name: 'HomePage'})
    },
    doctorLogin (e) {
      e.preventDefault()
      this.$router.push({name: 'DoctorLogin'})
    },
    patientLogin (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientLogin'})
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
