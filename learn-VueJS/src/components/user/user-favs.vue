<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">爱好</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="inputText">
    </div>
    <div class="col-sm-10 col-sm-offset-2">
      <table class="table table-bordered" v-if="showTable()">
        <thead>
        <th>类别1</th>
        <th>类别2</th>
        </thead>
        <tbody>
        <tr v-for="fav in favs">
          <td>{{fav.class1}}</td>
          <td>{{fav.class2}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputText: '',
        favs: [
          {'class1': '前端开发', 'class2': 'js'},
          {'class1': '后端开发', 'class2': 'java'}
        ]
      }
    },
    methods: {
      showTable() {
        return (this.inputText === '');
      }
    }
  }
</script>
