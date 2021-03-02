<template>
  <main>
    <div class="container">
      <h1>todolist</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo" />
      <TodoFilter :selected="filter" @change-state="filter = $event" />
      <TodoList :todos="filterTodoList" />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import useTodos from "./composables/useTodos";
import useFilters from "./composables/useFilters";

export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup(){
    const { todos, addTodo} = useTodos()
    const { filter, filterTodoList } = useFilters(todos)
    
    return {
      todos,
      addTodo,
      filter,
      filterTodoList
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgb(203,210,240);
}
.container{
  width: 60%;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, .15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245,246,252);
}
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
