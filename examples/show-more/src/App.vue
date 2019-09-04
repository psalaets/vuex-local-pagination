<template>
  <div id="app">
    <h1>Show More Example</h1>
    <ul>
      <li v-for="record in records" :key="record.id">
        {{record.label}}
      </li>
    </ul>

    <button v-if="hasMore" @click="handleShowMore">
      Show More
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    hasMore() {
      return this.$store.getters.hasMoreToShow;
    },
    records() {
      return this.$store.getters.visibleRecords;
    }
  },
  methods: {
    handleShowMore() {
      this.$store.dispatch('showMore');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
