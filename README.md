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

const store = new Vuex.Store({
  // ...
  modules: {
    pagination: createPagination({ pageSize: 15 })
  }
});
```

### Getters

#### start

Index of the first record in the pagination window. Defaults to 0.

Returns: Zero-based number

#### pageSize

Size of the pagination window. Initial value is passed in during module creation.

Returns: number

#### pageCount(totalRecordCount)

Number of pages given the number of records.

Returns: number

#### currentPage

Current page number.

Returns: One-based number

#### slice(records)

The slice of your records that fall within the pagination window.

Returns: Array of records

#### pages(totalRecordCount)

Array of page numbers given the number of records.

Returns: Array of one-based numbers

### Actions

#### goToPage

Move pagination window to a specific page.

Required payload:

```js
{
  page: <number>
}
```

#### changePageSize

Change number of records in a page.

Required payload:

```js
{
  pageSize: <number>
}
```

## License

MIT
