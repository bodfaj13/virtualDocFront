<template>
  <div>
    <div class="row">
      <div class="col-md-12">
          <h3>Create Doctor</h3>
      </div>
    </div>
    <hr>
    <div class="alert alert-success animated slideInDown" v-if="resgisterSuccess">
      <strong>Registration Successful</strong>
      <br>
      Doctor was created successfully!
    </div>
    <form>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for="fullName">Full Name</label>
            <input class="form-control" id="fullName" type="text" aria-describedby="" placeholder="" v-model="fullName">
            <small id="fullNameError" class="form-text text-danger animated slideInUp" v-if="fullNameError">{{fullNameError}}</small>
          </div>
          <div class="col-md-6">
            <label for="email">Email Address</label>
            <input class="form-control" id="email" type="text" aria-describedby="" placeholder="" v-model="email">
            <small id="callerContactError" class="form-text text-danger animated slideInUp" v-if="emailError">{{emailError}}</small>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for="homeAddress">Home Address</label>
            <input class="form-control" id="homeAddress" type="text" aria-describedby="" placeholder="" v-model="homeAddress">
            <small id="addressError" class="form-text text-danger animated slideInUp" v-if="homeAddressError">{{homeAddressError}}</small>
          </div>
          <div class="col-md-6">
            <label for="inHospital">On Premises?</label>
            <select class="form-control" id="inHospital" v-model="inHospital">
              <option value=""></option>
              <option :value="true">True</option>
              <option :value="false">False</option>
            </select>
            <small id="inHospitalError" class="form-text text-danger animated slideInUp" v-if="inHospitalError">{{inHospitalError}}</small>
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
            <label for="specialization">Specialization</label>
            <select class="form-control" id="specialization" v-model="specialization">
              <option value=""></option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Hermatologist">Hermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Opthamologists">Opthamologists</option>
              <option value="Pathologist">Pathologist</option>
              <option value="Prediatricains">Prediatricains</option>
            </select>
            <small id="specializationError" class="form-text text-danger animated slideInUp" v-if="specializationError">{{specializationError}}</small>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-6">
            <label for="email">Password</label>
            <div class="input-group">
              <input v-bind:type="passType" class="form-control" id="password" aria-describedby="" placeholder=""  v-model="password">
              <div class="input-group-addon pass-addon" style="
              padding-left: 5px;">
                <button class="btn btn-primary btn-block" @click="togglePassword">
                  <i class="fa fa-fw fa-eye" v-if="hideText"></i>
                  <i class="fa fa-fw fa-eye-slash" v-else></i>
                </button>
              </div>
            </div>
            <small id="callerContactError" class="form-text text-danger animated slideInUp" v-if="passwordError">{{passwordError}}</small>
          </div>
          <div class="col-md-6">
            <label for="contactNo">Contact</label>
            <input class="form-control" id="contactNo" type="number" aria-describedby="" placeholder="" v-model="contactNo">
            <small id="callerContactError" class="form-text text-danger animated slideInUp" v-if="contactNoError">{{contactNoError}}</small>
          </div>
        </div>
      </div>
      <div class="row form-submit">
        <div class="col-md-12">
            <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="createDoctor" :class="{disabled: btnDisabled}">
            <div class="loader" v-if="loaderSwitch"></div>
            <span v-else>Create Doctor
              <i class="fa fa-fw fa-long-arrow-right"></i>
            </span>
          </button>
        </div>
        <div class="col-md-12">
          <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="cancel" v-if="!btnDisabled">
            Clear
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
import {LoaderMixin} from '../mixins/LoaderMixin'

export default {
  name: 'CreateDriver',
  mixins: [LoaderMixin],
  data: () => ({
    msg: 'Welcome to Create Driver Component!',
    fullName: '',
    email: '',
    homeAddress: '',
    gender: '',
    password: '',
    contactNo: '',
    fullNameError: '',
    emailError: '',
    homeAddressError: '',
    genderError: '',
    passwordError: '',
    contactNoError: '',
    passType: 'password',
    hideText: false,
    error: '',
    resgisterSuccess: '',
    specialization: '',
    specializationError: '',
    inHospitalError: '',
    inHospital: ''
  }),
  methods: {
    cancel (e) {
      e.preventDefault()
      this.clearInputs()
      this.resgisterSuccess = ''
    },
    async createDoctor (e) {
      e.preventDefault()
      this.btnDisabled = true
      this.loaderSwitch = true
      var go = true
      this.fullNameError = ''
      this.emailError = ''
      this.homeAddressError = ''
      this.passwordError = ''
      this.contactNoError = ''
      this.genderError = ''
      this.specializationError = ''
      this.inHospitalError = ''
      this.resgisterSuccess = ''
      if (this.fullName.length === 0) {
        this.fullNameError = 'Invalid Driver Name supplied'
        go = false
      }
      if (this.email.length === 0) {
        this.emailError = 'Invalid Email Address supplied'
        go = false
      }
      if (this.gender.length === 0) {
        this.genderError = 'Invalid Gender supplied'
        go = false
      }
      if (this.homeAddress.length === 0) {
        this.homeAddressError = 'Invalid Home Address supplied'
        go = false
      }
      if (this.inHospital.length === 0) {
        this.inHospitalError = 'Invalid On Premesis supplied'
        go = false
      }
      if (this.specialization.length === 0) {
        this.specializationError = 'Invalid Specialization supplied'
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
      if (go) {
        try {
          const response = await AuthService.registerDoctor({
            fullName: this.fullName,
            password: this.password,
            email: this.email,
            homeAddress: this.homeAddress,
            contactNo: this.contactNo,
            gender: this.gender,
            specialization: this.specialization,
            inHospital: this.inHospital
          })
          console.log(response)
          this.resgisterSuccess = response.data.success
          this.clearInputs()
          this.timeOut()
          this.$emit('reRunNumbers', true)
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
    togglePassword (e) {
      e.preventDefault()
      this.hideText = !this.hideText
      if (this.hideText) {
        this.passType = 'text'
      }
      if (!this.hideText) {
        this.passType = 'password'
      }
    },
    clearInputs () {
      this.fullName = ''
      this.email = ''
      this.homeAddress = ''
      this.gender = ''
      this.password = ''
      this.contactNo = ''
      this.specialization = ''
      this.inHospital = ''
      this.fullNameError = ''
      this.emailError = ''
      this.homeAddressError = ''
      this.passwordError = ''
      this.contactNoError = ''
      this.genderError = ''
      this.specializationError = ''
      this.inHospitalError = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-submit button:nth-child(1){
    margin-top: 5px;
  }
  @media only screen and (max-width: 600px) {

  }
  @media only screen and (min-width: 600px) and (max-width: 992px) {

  }
  @media only screen and (min-width: 993px) {

  }
</style>
