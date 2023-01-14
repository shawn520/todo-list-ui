<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <h1 >待办事项</h1>
    <!-- <h2 >{{sign}}</h2> -->
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <todo-header @addTodoItem="addTodoItem" /> -->
        <todo-header @addTodoItem="addTodoItem" />
        <todo-list :todos="todos"  />
        <todo-footer 
          :todos="todos" 
          @checkAllTodo="checkAllTodo"
          :clearAllDoneThings="clearAllDoneThings" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: { TodoHeader, TodoList, TodoFooter },
  data() {
    return {
      // todos:[
      //   {id: '001', title: '吃饭', done: true},
      // ],
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      sign:'有志者，事竟成!'
    }
  },
  methods: {
    //添加一个待办事项
    addTodoItem(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个待办事项
    checkTodo(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) todo.done = !todo.done
      })
    },
    //删除一个todo事项
    deleteTodo(id){
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    // 清楚所有已完成的事项
    clearAllDoneThings() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    //更新一个todo事项
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.title = title
      })
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
    this.$bus.$off('updateTodo')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  /* display: inline-block; */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(75, 116, 132);
  margin-right: 5px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
