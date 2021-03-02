<template>
  <div class="todo-item" :class="{done: todo.completed}">
          <label>
            <input type="checkbox" :checked="todo.completed" @click="$emit('change-state', $event)" />
            {{todo.content}}
            <span class="check-button"></span>
          </label>
        </div>
</template>

<script>
export default {
  name: 'Todoitem',
  props: ["todo"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}
.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}
.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
}
.todo-item label span.check-button {
  position: absolute;
  top: 0;
}
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}
.todo-item label span.check-button::after {
  transition: .4s;
  background: #b382f9;
  transform: translate(1px,1px) scale(.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
</style>
