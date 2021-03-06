import Vue from "vue";
import Vuex from "vuex";

import createPagination from "../../../index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records: records(25)
  },
  getters: {
    pageCount(state, getters) {
      return getters['pagination/pageCount'](getters.totalRecordCount);
    },
    currentPage(state, getters) {
      return getters['pagination/currentPage'];
    },
    hasNextPage(state, getters) {
      return getters.currentPage < getters.pageCount;
    },
    hasPrevPage(state, getters) {
      return getters.currentPage > 1;
    },
    visibleRecords(state, getters) {
      return getters['pagination/slice'](state.records);
    },
    totalRecordCount(state, getters) {
      return state.records.length;
    }
  },
  mutations: {},
  actions: {
    goToNextPage(context) {
      const currentPage = context.getters['pagination/currentPage'];

      context.dispatch('pagination/goToPage', {
        page: currentPage + 1
      });
    },
    goToPrevPage(context) {
      const currentPage = context.getters['pagination/currentPage'];

      context.dispatch('pagination/goToPage', {
        page: currentPage - 1
      });
    },
    goToPage(context, payload) {
      context.dispatch('pagination/goToPage', {
        page: payload.page
      });
    }
  },
  modules: {
    pagination: createPagination({ pageSize: 5 })
  }
});

function records(count) {
  return [...new Array(count)]
    .map((r, i) => {
      return {
        id: i,
        label: `Record ${i}`
      };
    });
}
