<template>
  <div class="bg-light">
    <Nav></Nav>

    <!-- Page Content -->
    <div class="container homeBody">

      <!-- Portfolio Item Heading -->
      <h1 class="my-4">
        Page Heading
      </h1>

      <!-- Portfolio Item Row -->
      <div class="row">

        <div class="col-md-8">
          <img class="img-fluid card" src="../assets/Most Wanted Backgrounds Downloadha (339).jpg" alt="" style="height: 400px; width: 100%">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Project Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <h3 class="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>

      </div>
      <!-- /.row -->

      <!-- Related Projects Row -->
      <h3 class="my-4">Related Projects</h3>

      <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/Most Wanted Backgrounds Downloadha (339).jpg" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/Most Wanted Backgrounds Downloadha (339).jpg" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/Most Wanted Backgrounds Downloadha (339).jpg" alt="" style="height: 200px; width: 100%">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid card" src="../assets/Most Wanted Backgrounds Downloadha (339).jpg" alt="" style="height: 200px; width: 100%">
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
