export const getters = {
  start(state) {
    return state.start;
  },
  pageSize(state) {
    return state.pageSize;
  },
  pageCount(state, getters) {
    return totalRecords => {
      if (totalRecords < 1) return 0;
      return Math.ceil(totalRecords / getters.pageSize);
    }
  },
  currentPage(state, getters) {
    return Math.floor(getters.start / getters.pageSize) + 1;
  },
  slice(state, getters) {
    return records => records.slice(getters.start, getters.start + getters.pageSize);
  },
  pages(state, getters) {
    return totalRecords => {
      const pages = [];

      let page = 1;
      while (page <= getters.pageCount(totalRecords)) {
        pages.push(page);
        page += 1;
      }

      return pages;
    };
  }
};

export const mutations = {
  CHANGE_PAGE(state, payload) {
    const {page} = payload;

    if (page < 1) {
      throw new Error('page must be > 0');
    }

    state.start = (page - 1) * state.pageSize;
  },
  CHANGE_PAGE_SIZE(state, payload) {
    const {pageSize} = payload;

    if (pageSize < 1) {
      throw new Error('pageSize must be > 0');
    }

    state.pageSize = pageSize;
  }
};

export const actions = {
  goToPage(context, payload) {
    context.commit('CHANGE_PAGE', {
      page: payload.page
    });
  },
  changePageSize(context, payload) {
    context.commit('CHANGE_PAGE_SIZE', {
      pageSize: payload.pageSize
    });
  }
};

export default function createModule(settings = {}) {
  if (settings.pageSize == null) {
    throw new Error('settings.pageSize is required');
  }

  const pageSize = settings.pageSize;

  if (pageSize < 1) {
    throw new Error('settings.pageSize must be > 0');
  }

  return {
    namespaced: true,
    state: {
      start: 0,
      pageSize
    },
    getters,
    mutations,
    actions
  };
}
