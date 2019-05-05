import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /* parent component AppComponent accesses public field of its chld component marked as #agGrid  */
  @ViewChild('agGrid') agGrid: AgGridNg2;
  title = 'ag-grid-demo';

  /* 定义列: 每一个条目定义头标签及 data field */
  columnDefs = [ /* grid groups data by 'make' field while listing model field value when expanded */
    {headerName: 'Make', field: 'make', rowGroup: true, sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  /* 定义单排数据: 根据对应的 data field 填充数据 */
  /* rowData = [
    {make: 'Honda', model: 'Civic', price: 35000},
    {make: 'Benz', model: 'GLE450', price: 32000},
    {make: 'Mazda', model: 'Mazda3', price: 72000}
  ]; */

  /* 定义 rowData 属性, 类型为任意 */
  rowData: any;

  /* remote data fetch demo */
  /* rowData: any; 只有绑定到 rowData property 上才生效 */

  /* 使用 Http 服务 */
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    /* 通过 web api 及 Http GET 方法得到终端数据并将 remoteData 转化为 Observable */
    /* this.rowData = this.http.get('https://api.myjson.com/bins/15psn9'); */
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }

  getSelectedRows() {
    console.log('Enter button click');
    /* api.getSelectedNodes(): 返回被选中节点的数组 */
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    /* node: RowNode 每一个 RowNode 都会有 data 属性 */
    const selectedData = selectedNodes.map(node => node.data);
    /* 每一个 data 即是一个用户定义的 Object */
    const selectedDataStringPresentation = selectedData.map(data => data.make + ' ' + data.model).join(', ');
    alert(`Selected data: ${selectedDataStringPresentation}`);
    console.log(`Selected data: ${selectedDataStringPresentation}`);
  }
}
