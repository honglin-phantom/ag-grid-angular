import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* 加载 AgGrid 模块儿 */
import { AgGridModule } from 'ag-grid-angular';
/* fetch remote data */
import { HttpClientModule } from '@angular/common/http';
/* 导入 ag-grid 的企业版 */
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ /* withComponents() 使得格子系统可以将 Angular 元件当作单元格 / 头来使用 */
    BrowserModule, HttpClientModule, AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
