<template>
  <div class="aggrid-container">
    <ag-grid-vue
      :grid-options="gridOptions"
      :row-data="tableData.rowData"
      :column-defs="tableData.columnDefs"
      :framework-components="tableData.frameworkComponents"
      :is-full-width-cell="isFullWidthCell"
      :full-width-cell-renderer="'FullWidthCellRenderer'"
      style="height: 100%"
      class="ag-theme-alpine"
      @grid-ready="onGridReady"
    />
  </div>
</template>

<script>
import FullWidthCellRenderer from "./FullWidthCellRenderer.vue";
import MockData from '../data/data.json'
export default {
  name: "HelloWorld",
  data() {
    return {
      gridOptions: {
        domLayout: "print",
        defaultColDef: {
          autoHeight: true,
          cellClass: "cell-wrap-text",
        },
      },
      gridApi: null,
      columnApi: null,
      tableData: {
        rowData: [],
        columnDefs: [],
        frameworkComponents: { FullWidthCellRenderer },
      },
    };
  },
  beforeMount() {
    this.tableData.columnDefs = [
      {
        field: "athlete",
        width: 200,
      },
      { field: "age", width: 100 },
      { field: "country" },
      {
        field: "date",
        // colSpan: (params) => (params.data.year <= 2004 ? 2 : 1),
      },
      { field: "year", width: 100 },
      { field: "sport" },
      // { field: "gold" },
      // { field: "silver" },
      // { field: "bronze" },
      // { field: "total" },
    ];
  },
  methods: {
    isFullWidthCell(params) {
      return !params.rowIndex % 10;
    },
    onGridReady(grid) {
      this.gridApi = grid.api;
      this.columnApi = grid.columnApi;
      this.tableData.rowData = MockData;
    },
  },
};
</script>

<style lang="scss">
@import "~ag-grid-community/src/styles/ag-grid.scss";
@import "~ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss";
.aggrid-container {
  width: calc(100vw - 80px);
  height: calc(100vh - 90px);
  padding: 40px 45px;
}

.cell-wrap-text {
  white-space: normal !important;
  word-break: break-word;
}
</style>
