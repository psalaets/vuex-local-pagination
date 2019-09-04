import Vue from "vue";
import Vuex from "vuex";

import createPagination from "../../../index";

Vue.use(Vuex);

let pageSizeStep = 5;

export default new Vuex.Store({
  state: {
    records: records(25)
  },
  getters: {
    pageCount(state, getters) {
      return getters['pagination/pageCount'](state.records.length);
    },
    hasMoreToShow(state, getters) {
      return getters['pagination/currentPage'] < getters.pageCount;
    },
    visibleRecords(state, getters) {
      return getters['pagination/slice'](state.records);
    }
  },
  mutations: {},
  actions: {
    showMore(context) {
      const newPageSize = context.getters['pagination/pageSize'];

      context.dispatch('pagination/changePageSize', {
        pageSize: newPageSize + pageSizeStep
      });
    }
  },
  modules: {
    pagination: createPagination({pageSize: 5})
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
