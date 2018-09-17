<template>
  <div class="container animated bounceIn">
    <!-- login form -->
    <!-- top alert -->
    <div class="alert alert-success animated slideInUp"  v-if="registerSuccess">
      <strong>Creation Successful</strong>
      <br>
      Navigating to login page...
    </div>

    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Register an Account</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="firstName">First name</label>
                <input class="form-control" id="firstName" type="text" aria-describedby="" placeholder="" v-model="firstName">
                <small id="firstNameError" class="form-text text-danger animated slideInUp" v-if="firstNameError">{{firstNameError}}</small>
              </div>
              <div class="col-md-6">
                <label for="lastName">Last name</label>
                <input class="form-control" id="lastName" type="text" aria-describedby="" placeholder="" v-model="lastName">
                <small id="lastNameError" class="form-text text-danger animated slideInUp" v-if="lastNameError">{{lastNameError}}</small>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input class="form-control" id="email" type="email" aria-describedby="" placeholder="" v-model="email">
            <small id="emailError" class="form-text text-danger animated slideInUp" v-if="emailError">{{emailError}}</small>
          </div>
          <div class="form-group">
            <label for="contactNo">Contact Numeber</label>
            <input class="form-control" id="email" type="number" aria-describedby="" placeholder="" v-model="contactNo">
            <small id="contactNoError" class="form-text text-danger animated slideInUp" v-if="contactNoError">{{contactNoError}}</small>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="password">Password</label>
                <input class="form-control" id="password" type="password" placeholder="">
                <small id="passwordError" class="form-text text-danger animated slideInUp" v-if="passwordError">{{passwordError}}</small>
              </div>
              <div class="col-md-6">
                <label for="confirmPassword">Confirm Password</label>
                <input class="form-control" id="confirmPassword" type="password" placeholder="">
                <small id="confirmPasswordError" class="form-text text-danger animated slideInUp" v-if="confirmPasswordError">{{confirmPasswordError}}</small>
              </div>
            </div>
          </div>
          <div class="row form-submit">
            <div class="col-md-6">
                <button type="button" class="btn btn-info btn-block text-white btn-md" @click="createPatient" :class="{disabled: btnDisabled}">
                <div class="loader" v-if="loaderSwitch"></div>
                <span v-else>Create Driver
                </span>
              </button>
            </div>
            <div class="col-md-6">
              <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="cancel" v-if="!btnDisabled">
                Clear
              </button>
            </div>
          </div>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="" @click="patientLogin">Already have and account? Login</a>
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
    },
    patientLogin (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientLogin'})
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
