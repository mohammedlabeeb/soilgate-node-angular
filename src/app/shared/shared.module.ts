import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MajordomoInterceptorService } from './services/majordomo-interceptor.service';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { DataTableModule } from './libs/data-table/index';
import { AuthGuard } from './guards/auth.guard';

const interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: MajordomoInterceptorService,
  multi: true
};
@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: [
    HttpClient,
    HttpService,
    DataService,
    AuthGuard,
    interceptor
  ]
})
export class SharedModule { }
