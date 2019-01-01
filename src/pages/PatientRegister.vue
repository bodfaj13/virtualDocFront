<template>
  <div class="container animated bounceIn">
    <!-- login form -->
    <!-- top alert -->
    <div class="alert alert-success animated slideInUp" v-if="registerSuccess">
      <strong>Registration Successful</strong>
      <br>
      Navigating to login page...
    </div>

    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Patient Registeration </div>
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
            <div class="form-row">
              <div class="col-md-6">
                <label for="contactNo">Contact Numeber</label>
                <input class="form-control" id="contactNo" type="number" aria-describedby="" placeholder="" v-model="contactNo">
                <small id="contactNoError" class="form-text text-danger animated slideInUp" v-if="contactNoError">{{contactNoError}}</small>
              </div>
              <div class="col-md-6">
                <label for="password">Password</label>
                <input class="form-control" id="password" type="password" placeholder="" v-model="password">
                <small id="passwordError" class="form-text text-danger animated slideInUp" v-if="passwordError">{{passwordError}}</small>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="gender">Gender</label>
                <select class="form-control" id="gender" v-model="gender">
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <small id="genderError" class="form-text text-danger animated slideInUp" v-if="genderError">{{genderError}}</small>
              </div>
              <div class="col-md-6">
                <label for="ageGroup">Age Group</label>
                <select class="form-control" id="ageGroup" v-model="ageGroup">
                  <option value=""></option>
                  <option value="Infant">Infant</option>
                  <option value="Child">Child</option>
                  <option value="Adolescent">Adolescent</option>
                  <option value="Adult">Adult</option>
                </select>
                <small id="ageGroupError" class="form-text text-danger animated slideInUp" v-if="ageGroupError">{{ageGroupError}}</small>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="description">Home Address</label>
            <textarea class="form-control" rows="1" id="description" v-model="homeAddress" placeholder="Home Address..."></textarea>
            <small id="descriptionError" class="form-text text-danger animated slideInUp" v-if="homeAddressError">{{homeAddressError}}</small>
          </div>
          <div class="row form-submit">
            <div class="col-md-12">
                <button type="button" class="btn btn-info btn-block text-white btn-md" @click="createPatient" :class="{disabled: btnDisabled}">
                <div class="loader" v-if="loaderSwitch"></div>
                <span v-else>Create Profile
                </span>
              </button>
            </div>
            <br><br>
            <div class="col-md-12">
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
import AuthService from '../services/AuthService'
import {LoaderMixin} from '../mixins/LoaderMixin'

export default {
  name: 'PatientRegister',
  mixins: [LoaderMixin],
  data: () => ({
    msg: 'Welcome to PatientRegister Page!',
    error: '',
    firstName: '',
    lastName: '',
    email: '',
    homeAddress: '',
    contactNo: '',
    password: '',
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    homeAddressError: '',
    contactNoError: '',
    passwordError: '',
    registerSuccess: '',
    gender: '',
    genderError: '',
    ageGroup: '',
    ageGroupError: ''
  }),
  methods: {
    goHome (e) {
      e.preventDefault()
      this.$router.push({name: 'HomePage'})
    },
    patientLogin (e) {
      e.preventDefault()
      this.$router.push({name: 'PatientLogin'})
    },
    async createPatient (e) {
      e.preventDefault()
      this.btnDisabled = true
      this.loaderSwitch = true
      var go = true
      this.firstNameError = ''
      this.lastNameError = ''
      this.emailError = ''
      this.contactNoError = ''
      this.homeAddressError = ''
      this.passwordError = ''
      this.ageGroupError = ''
      this.genderError = ''
      if (this.firstName.length === 0) {
        this.firstNameError = 'Invalid First Name supplied'
        go = false
      }
      if (this.lastName.length === 0) {
        this.lastNameError = 'Invalid Last Name supplied'
        go = false
      }
      if (this.email.length === 0) {
        this.emailError = 'Invalid Email supplied'
        go = false
      }
      if (this.homeAddress.length === 0) {
        this.homeAddressError = 'Invalid Home Address supplied'
        go = false
      }
      if (this.password.length === 0) {
        this.passwordError = 'Invalid Password supplied'
        go = false
      }
      if (this.contactNo.length === 0) {
        this.contactNoError = 'Invalid Contact Number supplied'
        go = false
      }
      if (this.gender.length === 0) {
        this.genderError = 'Invalid Gender supplied'
        go = false
      }
      if (this.ageGroup.length === 0) {
        this.ageGroupError = 'Invalid Age Group supplied'
        go = false
      }
      if (go) {
        try {
          var response = await AuthService.registerPatient({
            fullName: this.firstName + ' ' + this.lastName,
            email: this.email,
            homeAddress: this.homeAddress,
            password: this.password,
            contactNo: this.contactNo,
            gender: this.gender,
            ageGroup: this.ageGroup
          })
          console.log(response)
          this.registerSuccess = response.data.success
          this.timeOut()
          this.clearInputs()
          setTimeout(() => {
            this.$router.push({name: 'PatientLogin'})
          }, 4000)
        } catch (error) {
          this.error = error.response.data.error
          this.emailError = error.response.data.error_Email
          this.contactNoError = error.response.data.error_Contact
          this.timeOut()
        }
      } else {
        this.timeOut()
      }
    },
    clearInputs () {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.homeAddress = ''
      this.contactNo = ''
      this.password = ''
      this.firstNameError = ''
      this.lastNameError = ''
      this.emailError = ''
      this.homeAddressError = ''
      this.contactNoError = ''
      this.passwordError = ''
    },
    cancel (e) {
      e.preventDefault()
      this.clearInputs()
    }
  }
}
</script>

<style scoped>
  .alert {
    width: 690px;
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
