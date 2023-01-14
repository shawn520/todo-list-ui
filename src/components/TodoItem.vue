<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todoItem.done" @change="handleCheck(todoItem.id)" />
        <span v-show="!todoItem.isEdit">{{todoItem.title}}</span>
        <input 
          type="text"
          v-show="todoItem.isEdit" 
          :value="todoItem.title" 
          @blur="handleBlur(todoItem, $event)"
          ref="inputTitle"
          />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todoItem.id)"> 删除</button>
      <button class="btn btn-edit" @click="handleEdit(todoItem)"> 编辑</button>
    </li>
  </div>
  
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todoItem'],
  methods: {
    //处理勾选or取消勾选事项
    handleCheck(id) {
      this.$bus.$emit('checkTodo', id)
    },
    //删除一个事项
    handleDelete(id) {
      if(confirm('确定删除吗?')) {
        this.$bus.$emit('deleteTodo', id)
      }
    },
    // 编辑
    handleEdit(todo) {
      if(todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      //点编辑的时候,获取焦点,nextTick会在下一次dom更新之后执行
      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调,真正执行修改逻辑
    handleBlur(todo,e) {
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

.del_line::after {
	content: no-open-quote;
	position: absolute;
	top: 51%;
	left: 0;
	width: 100%;
	border-bottom: 1px solid #000;
}
</style>