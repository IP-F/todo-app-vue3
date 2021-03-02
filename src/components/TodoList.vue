<template>
  <div class="todo-list">
    <Todoitem v-for="item in todos" :key="item.id" :todo="item" @change-state="item.completed = $event.target.checked" />
  </div>
</template>

<script>
import Todoitem from './Todoitem'

export default {
  name: 'TodoList',
  components:{
    Todoitem
  },
  props: ["todos"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list{
  display: grid;
  row-gap: 14px;
}

</style>
