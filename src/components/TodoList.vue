/**
* Created by Linfeng Li on 02/01/21
* University of Illinois at Chicago
*/

<template>
  <div>
    <h3>
      add new todo...
    </h3>
    <div>
      <form>
        <input type="text" name="input" placeholder="type here..." v-model="input">

      </form>
      <button v-on:click="addItemLocal(input)">add</button> <br>
    </div>

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
  data() {
    return {
      input: "",
    }
  },
  methods: {
    ...mapActions([
      'addItem',
      'deleteItem'
    ]),
    addItemLocal() {
      this.addItem(this.input);
      this.input = "";
    }
  },

  computed: {
    ...mapGetters(['getTodos']),
  }
}
</script>

<style scoped>

</style>