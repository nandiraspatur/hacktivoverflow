<template>
  <div class="ui container segment">
    <div class="ui header">
      <h2>Your Questions List</h2>
    </div>
    <div class="row">
      <table class="ui celled padded table">
        <thead>
          <th>Title</th>
          <th>Votes</th>
          <th>Description</th>
          <th>Options</th>
        </tr></thead>
        <tbody>
          <tr v-for="question in myQuestions" :key="question._id">
            <td class="single line">
              {{question.title}}
            </td>
            <td class="two wide">
              <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
            </td>
            <td>{{question.question.substring(0, 100)}}</td>
            <td class="three wide center aligned">
              <button class="ui positive button" @click="modalEdit(question._id)">Edit</button>
              <button class="ui negative button" @click="deleteQuestions(question._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="padding: 30px !important;" class="ui small modal edit">
      <i class="close icon"></i>
      <div class="ui container">
        <EditQuestion :questionId="idQuestionTemp" @questionEdited="questionEdited"/>
      </div>
    </div>
  </div>
</template>

<script>
import EditQuestion from '@/components/EditQuestion'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    EditQuestion
  },
  data () {
    return {
      questions: [],
      idQuestionTemp: ''
    }
  },
  computed: {
    ...mapGetters([
      'myQuestions'
    ])
  },
  methods: {
    ...mapActions([
      'getMyQuestions',
      'deleteQuestions'
    ]),
    modalEdit (id) {
      /* eslint-disable */
      this.idQuestionTemp = id
      $('.small.modal.edit')
        .modal('show')
      ;
    }
  },
  created () {
    this.getMyQuestions()
  }

}
</script>

<style>

</style>
