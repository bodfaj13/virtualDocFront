<template>
  <div class="content">
    <DoctorNav></DoctorNav>
    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h3>View Handled Issues</h3>
          </div>
        </div>
        <hr>

        <!-- <code>query: {{ query }}</code> -->
        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-table"></i> Issues
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
                    <th>Desc</th>
                    <th>Level</th>
                    <th>StillActive</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Level</th>
                    <th>StillActive</th>
                    <th>Created At</th>
                  </tr>
                </tfoot>
                <tbody v-if="totalLength > 0">
                  <template v-for="(complaint, index) in filteredComplaint">
                    <tr :key="index">
                      <th scope="row">{{index + 1}}</th>
                      <td>{{complaint._id}}</td>
                      <td>{{complaint.title}}</td>
                      <td>{{complaint.description}}</td>
                      <td>{{complaint.level}}</td>
                      <td>{{complaint.stillActive}}</td>
                      <td>{{complaint.createdAt}}</td>
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

      </div>
    </div>
    <DoctorFooter></DoctorFooter>
  </div>
</template>

<script>
import DoctorNav from './DoctorNav'
import DoctorFooter from './DoctorFooter'
import DataFunctions from '../../services/DataFunctions'

export default {
  name: 'DoctorViewComplaints',
  data: () => ({
    msg: 'Welcome to PatientViewComplaints Component!',
    totalComplaints: [],
    totalLength: '',
    currentView: [],
    noPages: '',
    viewSelect: 10,
    inputSearch: '',
    prevBtn: true,
    doctorId: ''
  }),
  methods: {
    async getTotalComplaint () {
      try {
        const response = await DataFunctions.getDoctorComplaints({
          doctorId: this.doctorId
        })
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
    }
  },
  components: {
    DoctorNav,
    DoctorFooter
  },
  mounted () {
    this.getUser()
    this.getTotalComplaint()
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
