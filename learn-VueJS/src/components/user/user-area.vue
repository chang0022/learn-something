<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">地区</label>
    <div class="col-sm-10">
      <select v-model="selectedIndex" class="form-control" @change="selectedChange">
        <option v-for="area in areas" :value="area.id">{{area.text}}</option>
      </select>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectedIndex: 0,
        areas: [
          {'id': 0, 'text': '- 请选择 -'},
          {'id': 1, 'text': '北京'},
          {'id': 2, 'text': '上海'}
        ]
      }
    },
    methods: {
      selectedChange() {
        this.$emit('childChang', 'userarea', this.selectedIndex);
      }
    }
  }
</script>
