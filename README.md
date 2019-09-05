# vuex-local-pagination

Paginate an array in your Vuex state

## Install

`npm install vuex-local-pagination`

## Usage

See `examples` directory for usage examples.

### Create instance of this module

The default export is a factory function for creating instances of this module.

```js
import createPagination from 'vuex-local-pagination';

export default new Vuex.Store({
  // ...
  modules: {
    pagination: createPagination({ pageSize: 15 })
  }
});
```

### Getters



### Actions

## License

MIT
