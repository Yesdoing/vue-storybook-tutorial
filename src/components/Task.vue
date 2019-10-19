<template>
  <div class="list-item">
    <input type="text" :readonly="true" :value="this.task.value"/>
  </div>
</template>

<script>
export default {
  name: 'task',
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
};
</script>