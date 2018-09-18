<template>
  <div>


        <div class="row">
          <div class="col-md-12">
            <h3>Active Complaints</h3>
          </div>
        </div>
        <hr>

        <!-- <code>query: {{ query }}</code> -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-table"></i> Complaints
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="viewSelect">Select views from <span class="badge badge-primary">{{totalLength}}</span> entries</label>
                  <select class="form-control" id="viewSelect" v-model="viewSelect">
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="search">Search by Title</label>
                  <input type="email" class="form-control" id="search" aria-describedby="search" placeholder="" v-model="inputSearch">

                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered" id="" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Patient ID</th>

                    <th>Description</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Patient ID</th>

                    <th>Description</th>

                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody v-if="totalLength > 0">
                  <template v-for="(complaint, index) in filteredComplaint">
                    <tr :key="index">
                      <th scope="row">{{index + 1}}</th>
                      <td>{{complaint._id}}</td>
                      <td>{{complaint.title}}</td>

                      <td>{{complaint.patientId}}</td>
                      <td>{{complaint.description}}</td>

                      <td>{{complaint.createdAt}}</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="releaseCaseTrigger(index)" data-toggle="modal" data-target="#releaseModal">
                          Accept Treatment
                        </button>

                      </td>
                    </tr>
                  </template>
                </tbody>
                <tbody v-else>
                  <tr class="table-secondary">
                    <td colspan="7">
                      <p class="text-center">There is no data</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <!-- <li class="page-item"><a class="page-link" @click="doNothing" :class="{disabled: prevBtn}">Previous</a></li> -->
                <template  v-for="(pages, key) in noPages">
                  <li class="page-item" :key="key"><a class="page-link" @click="getCurrentView(pages)">{{pages}}</a></li>

                </template>
                <!-- <li class="page-item"><a class="page-link" @click="doNothing">Next</a></li> -->
              </ul>
            </nav>
          </div>
        <div class="card-footer small text-muted">Updated</div>
      </div>




      <div class="modal fade" id="releaseModal" tabindex="-1" role="dialog" aria-labelledby="releaseModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="releaseModalLabel">Take Up Complaint</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-12">
                      <label for="medicalRemark">Medical Prescription</label>
                      <textarea class="form-control" rows="5" id="medicalRemark" v-model="medicalPrescrption" placeholder="Medical Prescription..."></textarea>
                      <small id="medicalPrescrptionError" class="form-text text-danger animated slideInUp" v-if="medicalPrescrptionError">{{medicalPrescrptionError}}</small>
                    </div>
                    <br>
                    <br>
                    <div class="col-md-12">
                      <label for="medicalRemark">Medical Remark</label>
                      <textarea class="form-control" rows="5" id="medicalRemark" v-model="medicalRemark" placeholder="Medical Remark..."></textarea>
                      <small id="medicalRemarkError" class="form-text text-danger animated slideInUp" v-if="medicalRemarkError">{{medicalRemarkError}}</small>
                    </div>
                  </div>
                </div>
                <div class="row form-submit">
                  <div class="col-md-12">
                    <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="answerIssue" :class="{disabled: btnDisabled}">
                      <div class="loader" v-if="loaderSwitch"></div>
                      <span v-else>Attend To Issue
                        <i class="fa fa-fw fa-volume-up"></i>
                      </span>
                    </button>
                  </div>
                  <br>
                  <br>
                  <div class="col-md-12">
                    <button type="button" class="btn btn-primary btn-block text-white btn-md" @click="cancel" v-if="!btnDisabled">
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-danger" type="button" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>

<script>
import DataFunctions from '../../services/DataFunctions'
import Functions from '../../services/Functions'
import {LoaderMixin} from '../../mixins/LoaderMixin'

export default {
  name: 'AnswerComplaints',
  mixins: [LoaderMixin],
  data: () => ({
    msg: 'Welcome to AnswerComplaints Component!',
    totalComplaints: [],
    totalLength: '',
    currentView: [],
    noPages: '',
    viewSelect: 10,
    inputSearch: '',
    prevBtn: true,
    doctorId: '',
    releaseComplaintNo: '',
    getComplaintItem: {},
    releaseSuccess: '',
    answerSuccess: '',
    medicalPrescrption: '',
    medicalPrescrptionError: '',
    medicalRemark: '',
    medicalRemarkError: '',
    error: ''
  }),
  methods: {
    async getActiveComplaint () {
      try {
        const response = await DataFunctions.getActiveComplaint()
        console.log(response)
        this.totalComplaints = response.data.data
        this.totalLength = this.totalComplaints.length
        for (var i = 0; i < this.totalLength; i++) {
          this.currentView.push(this.totalComplaints[i])
        }
      } catch (error) {
        console.log(error.response.data)
      }
    },
    calPag () {
      var total = this.totalLength
      var div = this.viewSelect
      var noPages = Math.ceil(total / div)
      this.noPages = noPages
      console.log(noPages)
    },
    getCurrentView (no) {
      var toSee = no * this.viewSelect
      var toSeeing = toSee - this.viewSelect
      console.log('to seeing ' + toSeeing)
      console.log('to see ' + toSee)
      this.currentView = []
      if (toSeeing === 0) {
        for (var i = 0; i < this.viewSelect; i++) {
          this.currentView.push(this.totalComplaints[i])
        }
      } else {
        if (toSee > this.totalLength) {
          console.log('but now to see ' + this.totalLength)
          for (var y = toSeeing; y < this.totalLength; y++) {
            this.currentView.push(this.totalComplaints[y])
          }
        } else {
          for (var x = toSeeing; x < toSee; x++) {
            this.currentView.push(this.totalComplaints[x])
          }
        }
      }
    },
    doNothing (e) {
      e.preventDefault()
    },
    getUser () {
      var doctor = JSON.parse(localStorage.getItem('setDoctor'))
      this.doctorId = doctor._id
      console.log(this.doctorId)
    },
    releaseCaseTrigger (no) {
      this.releaseComplaintNo = no
      this.getComplaintItem = this.totalComplaints[no]
      console.log(no)
      console.log(this.getComplaintItem)
    },
    async answerIssue (e) {
      e.preventDefault()
      this.btnDisabled = true
      this.loaderSwitch = true
      var go = true
      this.medicalPrescrptionError = ''
      this.medicalRemarkError = ''
      if (this.medicalPrescrption.length === 0) {
        this.medicalPrescrptionError = 'Invalid Medical Prescription supplied'
        go = false
      }
      if (this.medicalRemark.length === 0) {
        this.medicalRemarkError = 'Invalid Medical Remark supplied'
        go = false
      }
      if (go) {
        try {
          const response = await Functions.answerComplaint({
            complaintId: this.getComplaintItem._id,
            doctorId: this.doctorId,
            medicalPrescrption: this.medicalPrescrption,
            medicalRemark: this.medicalRemark
          })
          console.log(response)
          this.answerSuccess = response.data.success
          this.getActiveComplaint()
          this.$emit('reRunNumbers', true)
          this.timeOut()
          this.clearInputs()
        } catch (error) {
          this.error = error.response.data.error
          console.log(this.error)
        }
      } else {
        this.timeOut()
      }
    },
    clearInputs () {
      this.medicalPrescrption = ''
      this.medicalRemark = ''
      this.medicalPrescrptionError = ''
      this.medicalRemarkError = ''
    },
    cancel (e) {
      e.preventDefault()
      this.clearInputs()
    }
  },
  mounted () {
    this.getUser()
    this.getActiveComplaint()
    // this.calPag()
  },
  updated () {
    this.calPag()
  },
  watch: {
    currentView (val) {
      this.currentView = val
      console.log(this.currentView)
    },
    viewSelect (val) {
      this.viewSelect = val
      console.log(this.viewSelect)
      this.currentView = []
      for (var i = 0; i < this.viewSelect; i++) {
        this.currentView.push(this.totalComplaints[i])
      }
    }
  },
  computed: {
    filteredComplaint: function () {
      return this.currentView.filter((complaints) => {
        return complaints.title.match(this.inputSearch)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-wrapper {
    margin-top: 50px;
  }
  .container-fluid {
    margin-bottom: 100px;
  }
  label {
      display: inline-block;
      margin-bottom: .5rem;
  }
  @media only screen and (max-width: 600px) {

  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {

  }
  @media only screen and (min-width: 993px) {

  }
</style>
