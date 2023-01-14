<template>
  <div class="todo-header">
    <input type="text" placeholder="添加任务，按回车键确认" v-model="title" @keyup.enter="addTodoThings"/>
    <!-- <el-input placeholder="添加任务，按回车键确认" 
      v-model="title" 
      
      @change="addTodoItem"
      autofocus
      clearable/> -->
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'TodoHeader',
  data() {
    return {
      title: ''
    }
  },
  // props: ['addTodoItem'],
  methods: {
    //添加待办事项
    addTodoThings(e) {
      //将用户的输入包装成一个todo对象
      const todoObj = {id: nanoid(), title: this.title, done: false}
      // 校验数据
      if(!this.title.trim()) return alert('输入不能为空')
      // 通知app组件添加数据
      // this.addTodoItem(todoObj)
      this.$emit('addTodoItem', todoObj)
      // 清空数据
      this.title = ''
    },

  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>