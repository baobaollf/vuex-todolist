/**
* Created by Linfeng Li on 02/01/21
* University of Illinois at Chicago
*/

<template>
  <div>
    <ol>
      <p v-for="(item, index) in this.getTodos" v-bind:key="index">
        {{ item.item }}
        <button @click="deleteItem(index);">delete</button>

      </p>
    </ol>

  </div>

</template>

<script>

import {mapGetters, mapActions} from 'vuex';


export default {
  name: "TodoList",
  methods: {
    ...mapActions([
      'addItem',
      'deleteItem'
    ]),
  },

  computed: {
    ...mapGetters(['getTodos']),
  }
}
</script>

<style scoped>

</style>