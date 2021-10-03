<template>
  <div id="app">
    <person-list-one v-bind:persons="persons"/>
    <person-list-two v-bind:persons="persons"/>
    <input type="text" v-model="name">
    <input type="text" v-model="city">
    <button v-on:click="add()">Add Person</button>
  </div>
</template>

<script>
import PersonListOne from "./components/PersonListOne.vue";
import PersonListTwo from "./components/PersonListTwo.vue";
// import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    "person-list-one":PersonListOne,
    "person-list-two":PersonListTwo,
  },
  data(){
    return {
      name:"",
      city:""
    }
  },
  computed:{
      // ...mapGetters([
      //   'persons'
      // ])
    persons(){
      return this.$store.getters.persons
    }
  },
  methods:{
    add(){
      var payload = {name:this.name, city:this.city}
      // this.$store.commit('addPersons', payload)
      this.$store.dispatch('addPersons',payload)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
