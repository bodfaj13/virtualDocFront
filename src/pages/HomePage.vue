<template>
  <div class="bg-light">
    <Nav></Nav>

    <!-- Page Content -->
    <div class="container homeBody">

      <!-- Portfolio Item Heading -->
      <h1 class="my-4">
        Welcome to VirtualDoctor
      </h1>

      <!-- Portfolio Item Row -->
      <div class="row">

        <div class="col-md-8">
          <img class="img-fluid card" src="../assets/photo-1520931737576-7d1628862026.jpg" alt="" style="height: 400px; width: 100%">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">VirtualDoctor Mission</h3>
          <p>The mission of VirtualDoctor is to promote, preserve, and restore individual and family health by providing expert medical and surgical care within an innovative and dignified environment.</p>
          <h3 class="my-3">Useful Link</h3>
          <p>As a patient seeking treatment, click on the button below to create an account
          <button type="button" class="btn btn-info btn-block text-white btn-md" @click="goToPatientRegister">
            Create Account
          </button>
          </p>
        </div>

      </div>
      <!-- /.row -->

      <!-- Related Projects Row -->
      <h3 class="my-4">Virtual Doctor Gallery</h3>

      <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/choose-doctor.png" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/photo-1522920395281-1162f0a570b7.jpg" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/photo-1532938911079-1b06ac7ceec7.jpg" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/photo-1535360868041-7fb2b7534f6a.jpg" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <FooterHome></FooterHome>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import FooterHome from '../components/FooterHome'

export default {
  name: 'HomePage',
  data: () => ({
    msg: 'Welcome to HomePage Component!'
  }),
  components: {
    Nav,
    FooterHome
  },
  methods: {
    goToPatientRegister (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientRegister'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homeBody {
    padding-top: 54px;
  }
  @media only screen and (max-width: 600px) {

  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {

  }
  @media only screen and (min-width: 993px) {
      .homeBody {
        padding-top: 56px;
      }
  }

</style>
