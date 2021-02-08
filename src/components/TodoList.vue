/**
* Created by Linfeng Li on 02/01/21
* University of Illinois at Chicago
*/

<template>
  <div>
    <h3>
      My Todo List
    </h3>
    <div class="input-bar">

      <b-form-input placeholder="Enter your new todo" v-model="input" class="input-text" @keyup.enter="addItemLocal(input)"></b-form-input>
      <b-button pill variant="outline-primary" v-on:click="addItemLocal(input)">add</b-button>

    </div>

    <ol class="list" type="1">
      <div class="list-block">
        <li v-for="(item, index) in this.getTodos" v-bind:key="index" class="list-item">
          {{ item.item }}
          <b-button pill variant="outline-primary" @click="deleteItem(index)">
            delete
          </b-button>
        </li>
      </div>
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
.input-bar {
  display: flex;
  margin: 0 auto;
  width: 500px;

}

.input-text {
  margin-right: 15px;
}

.list {
  display: flex;
  margin: 0 auto;
  width: 500px;
  padding-top: 10px;
}

.list-block {
  margin: 0 auto;
  border-bottom: 15px;
}

.list-item{
  margin: 10px;
}
</style>