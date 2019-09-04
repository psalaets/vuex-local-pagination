<template>
  <div id="app">
    <h1>Pagination Example</h1>
    <ul>
      <li v-for="record in records" :key="record.id">
        {{record.label}}
      </li>
    </ul>

    <div>Viewing page {{currentPage}} of {{pageCount}}</div>

    <button :disabled="!hasPrevPage" @click="goToPrevPage">
      Go to prev page
    </button>

    <button :disabled="!hasNextPage" @click="goToNextPage">
      Go to next page
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentPage() {
      return this.$store.getters.currentPage;
    },
    pageCount() {
      return this.$store.getters.pageCount;
    },
    hasNextPage() {
      return this.$store.getters.hasNextPage;
    },
    hasPrevPage() {
      return this.$store.getters.hasPrevPage;
    },
    records() {
      return this.$store.getters.visibleRecords;
    }
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('goToNextPage');
    },
    goToPrevPage() {
      this.$store.dispatch('goToPrevPage');
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
