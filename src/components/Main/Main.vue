<template>
  <main>
  <Item
    v-for="(item, index) in state"
    :key="index"
    :index="index"
    :tag="item.tag"
    :content="item.content"
    :currentWidth="currentWidth"
    :currentHeight="currentHeight"
    :nodeType="nodeType"
  /></main>
</template>

<script>
import Item from '../Item/Item.vue'
export default {
  name: 'Main',
  props: ['state', 'setState', 'currentHeight', 'currentWidth', 'nodeType'],
  components: {
    Item
  },

  created () {
    console.log(this)
  }}
</script>

<style>
@import url("../../styles/main.css");
</style>
