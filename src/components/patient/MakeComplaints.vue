<template>
  <div>
    <div class="row">
      <div class="col-md-12">
          <h3>Report Complaint</h3>
      </div>
    </div>
    <hr>
    <div class="alert alert-success animated slideInDown" v-if="createSuccess">
        <strong>Creation Successful</strong>
        <br>
        Complaint was created successfully!
      </div>
    <form>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-12">
              <label for="title">Title  Name</label>
              <input class="form-control" id="title" type="text" aria-describedby="" placeholder="" v-model="title">
              <small id="titleeError" class="form-text text-danger animated slideInUp" v-if="titleError">{{titleError}}</small>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
              <div class="col-md-6">
                <label for="level">Medical Issue Level</label>
                <select class="form-control" id="level" v-model="level">
                  <option value=""></option>
                  <option value="Critical">Critical</option>
                  <option value="Very Critical">Very Critical</option>
                </select>
                <small id="levelError" class="form-text text-danger animated slideInUp" v-if="levelError">{{levelError}}</small>
              </div>
              <div class="col-md-6">
                <label for="startDate">Issue Started On</label>
                <input class="form-control" id="startDate" type="date" aria-describedby="" placeholder="" v-model="startDate">
                <small id="startDateError" class="form-text text-danger animated slideInUp" v-if="startDateError">{{startDateError}}</small>
              </div>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" rows="5" id="description" v-model="description" placeholder="Description..."></textarea>
          <small id="descriptionError" class="form-text text-danger animated slideInUp" v-if="descriptionError">{{descriptionError}}</small>
        </div>
        <div class="row form-submit">
          <div class="col-md-12">
             <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="makeReport" :class="{disabled: btnDisabled}">
              <div class="loader" v-if="loaderSwitch"></div>
              <span v-else>Make Complaint
                <i class="fa fa-fw fa-volume-up"></i>
              </span>
            </button>
          </div>
          <div class="col-md-12">
            <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="cancel" v-if="!btnDisabled">
              Cancel
            </button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import {LoaderMixin} from '../../mixins/LoaderMixin'
import Functions from '../../services/Functions'

export default {
  name: 'MakeComplaints',
  mixins: [LoaderMixin],
  data: () => ({
    msg: 'Welcome to MakeComplaints Component!',
    createSuccess: '',
    error: '',
    title: '',
    titleError: '',
    level: '',
    levelError: '',
    description: '',
    descriptionError: '',
    startDate: '',
    startDateError: ''
  }),
  methods: {
    cancel (e) {
      e.preventDefault()
      this.clearInputs()
      this.createSuccess = ''
    },
    async makeReport (e) {
      e.preventDefault()
      this.btnDisabled = true
      this.loaderSwitch = true
      var go = true
      this.titleError = ''
      this.levelError = ''
      this.descriptionError = ''
      this.startDateError = ''
      if (this.title.length === 0) {
        this.titleError = 'Invalid Title supplied'
        go = false
      }
      if (this.level.length === 0) {
        this.levelError = 'Invalid Level supplied'
        go = false
      }
      if (this.description.length === 0) {
        this.descriptionError = 'Invalid Level supplied'
        go = false
      }
      if (this.startDate.length === 0) {
        this.startDateError = 'Invalid Start Date supplied'
        go = false
      }
      if (go) {
        try {
          var response = await Functions.makeComplaint({
            title: this.title,
            level: this.level,
            description: this.description,
            startDate: this.startDate,
            patientId: JSON.parse(localStorage.getItem('setPatient'))._id
          })
          console.log(response)
          this.createSuccess = response.data.success
          this.timeOut()
          this.$emit('reRunNumbers', true)
          this.clearInputs()
        } catch (error) {
          this.error = error.response.data.error
          this.timeOut()
        }
      } else {
        this.timeOut()
      }
    },
    clearInputs () {
      this.title = ''
      this.titleError = ''
      this.level = ''
      this.levelError = ''
      this.description = ''
      this.descriptionError = ''
      this.startDate = ''
      this.startDateError = ''
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
