<template>   
    <div>
        <h3>Todos</h3>
    <div class="todos">
        <div v-for="todo in allTodos" :key="todo.key" class="todo">
        {{todo.title}}
       <div class="row">
        <i @click="updateTodo(todo.id)" class="bi bi-pencil text-primary"></i>
        <i @click="deleteTodo(todo.id)" class="bi bi-trash text-danger"></i>
        </div>
        </div>
    </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:"Todos",
    methods:{
        ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"])
    },
    computed: mapGetters(["allTodos"]),
    created() {
        this.fetchTodos();
    }
    // computed: mapGetters(['allTodos'])
};
</script>

<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo{
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>