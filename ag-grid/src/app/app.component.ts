import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-demo';

  /* 定义列: 每一个条目定义头标签及 data field */
  columnDefs = [
    {headername: 'Make', field: 'make', sortable: true, filter: true},
    {headername: 'Model', field: 'model', sortable: true, filter: true},
    {headername: 'Price', field: 'price', sortable: true, filter: true}
  ];

  /* 定义单排数据: 根据对应的 data field 填充数据 */
  rowData = [
    {make: 'Toyota', model: 'Camery', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Cayen', price: 72000}
  ];
}
