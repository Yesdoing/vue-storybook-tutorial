<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import store from './store.js';
import TaskList from './components/TaskList.vue';
import './style/index.css';

export default {
  name: "app",
  store,
  components: {
    TaskList
  }
};
</script>

<style>
  @import url("./style/index.css");
</style>
