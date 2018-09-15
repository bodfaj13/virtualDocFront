<template>
  <div class="container animated bounceIn">
    <!-- login form -->
    <!-- top alert -->
    <div class="alert alert-success animated slideInUp"  v-if="loginSuccess">
      <strong>Registration Successful</strong>
      <br>
      Dashboard is being prepared...
    </div>

    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Register an Account</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputName">First name</label>
                <input class="form-control" id="exampleInputName" type="text" aria-describedby="nameHelp" placeholder="Enter first name">
              </div>
              <div class="col-md-6">
                <label for="exampleInputLastName">Last name</label>
                <input class="form-control" id="exampleInputLastName" type="text" aria-describedby="nameHelp" placeholder="Enter last name">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Password</label>
                <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Password">
              </div>
              <div class="col-md-6">
                <label for="exampleConfirmPassword">Confirm password</label>
                <input class="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password">
              </div>
            </div>
          </div>
          <a class="btn btn-info btn-block" href="login.html">Register</a>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="login.html">Already have and account? Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AuthService from '../services/AuthService'
import {LoaderMixin} from '../mixins/LoaderMixin'

export default {
  name: 'PatientRegister',
  mixins: [LoaderMixin],
  data: () => ({
    msg: 'Welcome to PatientRegister Page!',
    error: ''
  }),
  methods: {
    goHome (e) {
      e.preventDefault()
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>

<style scoped>
  .alert {
    width: 428px;
    margin: 0px auto;
    margin-top: 10px;
  }
  #logoImg {
    width: 300px;
    height: 200px;
    border-radius: 90%;
    margin-left: 395px;
    padding-top: 15px;

  }
  @media only screen and (max-width: 600px) {
    .alert {
      width: 380px;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 992px) {
  }
  @media only screen and (min-width: 993px) {

  }

  /* smaller screen */
  @media only screen and (max-width: 400px) {
    .alert {
      width: 325px;
    }
  }

  a:hover {
    text-decoration: none;
  }
</style>
