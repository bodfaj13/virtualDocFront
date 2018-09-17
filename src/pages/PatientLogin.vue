<template>
  <div class="container animated bounceIn">
    <!-- login form -->
    <!-- top alert -->
    <div class="alert alert-success animated slideInUp"  v-if="loginSuccess">
      <strong>Authenication Successful</strong>
      <br>
      Dashboard is being prepared...
    </div>

    <div class="card card-login mx-auto mt-5">
      <div class="card-header bg-light"><h6 class="">Patient's Login</h6></div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="loginEmail">Email address</label>
            <input class="form-control" id="loginEmail" type="text" v-model="loginEmail" aria-describedby="loginEmailError">
            <small id="loginEmailError" class="form-text text-danger animated slideInUp" v-if="loginEmailError">{{loginEmailError}}</small>
          </div>
          <div class="form-group">
            <label for="loginPass">Password</label>
            <input class="form-control" id="loginPass" type="password" v-model="loginPass" aria-describedby="loginPassError">
            <small id="loginPassError" class="form-text text-danger animated slideInUp" v-if="loginPassError">{{loginPassError}}</small>
          </div>
          <button type="button" class="btn btn-info btn-block text-white btn-md" @click="sendLogin" :class="{disabled: btnDisabled}">
            <div class="loader" v-if="loaderSwitch"></div>
            <span v-else>Login</span>
          </button>
          <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="goHome">
            <i class="fa fa-arrow-left"></i> Back Home
          </button>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="" @click="goToPatientRegister">Register an Account</a>
          <!-- <a class="d-block small" href="" @click="goToForgotPassword">Forgot Password?</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
import {LoaderMixin} from '../mixins/LoaderMixin'

export default {
  name: 'PatientLogin',
  mixins: [LoaderMixin],
  data: () => ({
    msg: 'Welcome to PatientLogin Page!',
    loginEmail: '',
    loginPass: '',
    loginEmailError: '',
    loginPassError: '',
    loginSuccess: '',
    error: ''
  }),
  methods: {
    async sendLogin (e) {
      e.preventDefault()
      this.btnDisabled = true
      this.loaderSwitch = true
      var go = true
      this.loginEmailError = ''
      this.loginPassError = ''
      if (this.loginEmail.length === 0) {
        this.loginEmailError = 'Invalid Email Address supplied'
        go = false
      }
      if (this.loginPass.length === 0) {
        this.loginPassError = 'Invalid Password supplied'
        go = false
      }
      if (go) {
        try {
          const response = await AuthService.patientLogin({
            email: this.loginEmail,
            password: this.loginPass
          })
          console.log(response)
          this.loginSuccess = response.data.success
          this.$store.dispatch('setTokenPatient', response.data.token)
          this.$store.dispatch('setPatient', response.data.patientDetails)
          localStorage.setItem('setPatient', JSON.stringify(response.data.patientDetails))
          this.timeOut()
          setTimeout(() => {
            this.$router.push({name: 'PatientDasboard'})
          }, 2000)
        } catch (error) {
          this.error = error.response.data.error
          this.loginEmailError = error.response.data.error_Email
          this.loginPassError = error.response.data.error_Password
          this.loginPass = ''
          this.timeOut()
        }
      } else {
        this.timeOut()
      }
    },
    goHome (e) {
      e.preventDefault()
      this.$router.push({name: 'HomePage'})
    },
    goToPatientRegister (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientRegister'})
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
