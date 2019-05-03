import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ag-grid-demo';

  /* 定义列: 每一个条目定义头标签及 data field */
  columnDefs = [
    {headername: 'Make', field: 'make', sortable: true, filter: true},
    {headername: 'Model', field: 'model', sortable: true, filter: true},
    {headername: 'Price', field: 'price', sortable: true, filter: true}
  ];

  /* 定义单排数据: 根据对应的 data field 填充数据 */
  rowData = [
    {make: 'Honda', model: 'Civic', price: 35000},
    {make: 'Benz', model: 'GLE450', price: 32000},
    {make: 'Mazda', model: 'Mazda3', price: 72000}
  ];

  /* remote data fetch demo */
  /* rowData: any; 只有绑定到 rowData property 上才生效 */

  /* 使用 Http 服务 */
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    /* 通过 web api 及 Http GET 方法得到终端数据并将 remoteData 转化为 Observable */
    /* this.rowData = this.http.get('https://api.myjson.com/bins/15psn9'); */
  }
}
