<script setup>
  import { ref } from 'vue';

  const tableData = ref([
    {
      id: 1
      , title: 'title:1'
    }
    ,{
      id: 2
      , title: 'title:2'
    }
  ]);

  const push = () => {
    tableData.value.push({
      id: tableData.value.at(-1).id + 1
      , title: 'pushed!'
    });
  }
  const change = () => {
    tableData.value[1].title = 'change!'
  }
</script>

<template>
  <p>hei</p>
  <div v-for="node in tableData" :key="node.id">
    {{ node.title }}
    <button @click="push">click!</button>
  </div>
  <button @click="push">click!</button>
  <button @click="change">change!</button>
</template>
