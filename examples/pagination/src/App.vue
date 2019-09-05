<template>
  <div id="app">
    <h1>Pagination Example</h1>
    <ul>
      <li v-for="record in visibleRecords" :key="record.id">
        {{record.label}}
      </li>
    </ul>

    <div>Viewing page {{currentPage}} of {{pageCount}}</div>

    <button :disabled="!hasPrevPage" @click="goToPrevPage">
      Prev page
    </button>

    <button
      v-for="page in pages"
      :key="page"
      @click="handleGoToPage(page)"
    >
      {{page}}
    </button>

    <button :disabled="!hasNextPage" @click="goToNextPage">
      Next page
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'currentPage',
      'pageCount',
      'hasNextPage',
      'hasPrevPage',
      'visibleRecords',
      'totalRecordCount'
    ]),
    pages() {
      return this.$store.getters['pagination/pages'](this.totalRecordCount);
    }
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('goToNextPage');
    },
    goToPrevPage() {
      this.$store.dispatch('goToPrevPage');
    },
    handleGoToPage(page) {
      this.$store.dispatch('goToPage', {page});
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
