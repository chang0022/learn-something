<template>
  <div>
    <div class="form-group">
      <label class="col-sm-2 control-label">爱好</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="inputText">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
        <table class="table table-bordered" v-if="showTable()">
          <thead>
          <tr>
            <th>类别1</th>
            <th>类别2</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="fav in getFavs">
            <td>{{fav.class1}}</td>
            <td>{{fav.class2}}</td>
          </tr>
          </tbody>
        </table>
      </div>
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
        return (this.inputText !== '');
      }
    },
    computed: {
      getFavs() {
        return this.favs.filter(function (value) {
          return (value.class2.indexOf(this.inputText) >= 0);
        }.bind(this));
      }
    }
  }
</script>
