<template>
  <main>
    <Item
      v-for="(item, index) in state"
      :key="index"
      :index="index"
      :tag="item.tag"
      :content="item.content"
      :updateState="updateState"
    />
  </main>
</template>

<script>
import Item from '../Item/Item.vue'
export default {
  name: 'Main',
  props: [
    'state',
    'setState'
  ],
  components: {
    Item
  },
  methods: {
    updateState (e, index) {
      const data = this.state
      data[index].content = e.target.textContent
      this._props.setState(data)
    }
  }
}
</script>

<style>
@import url("../../styles/main.css");
</style>
