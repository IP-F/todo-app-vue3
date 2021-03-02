<template>
  <div class="filters">
        <div v-for="item in filters" :key="item.value" :class="item.value === selected ? 'filter active' : 'filter'" @click="$emit('change-state',item.value)">{{item.label}}</div>
      </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  props: ["selected"],
  setup(){
    const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
      ]
      return {
        filters
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}
.filters .filter {
  margin-right: 14px;
  transition: .8s;
  cursor: pointer;
}
.filters .filter.active{
  color: #6b729c;
  transform: scale(1.2);
}
</style>
