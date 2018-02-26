import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutesModule } from './/dashboard-routes.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { DashboardSharedModule } from './dashboard-shared/dashboard-shared.module';
import { UsersComponent } from './users/users.component';
import { PropertiesComponent } from './properties/properties.component';
import { DataTableModule } from '../shared/libs/data-table';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutesModule,
    DashboardSharedModule,
    DataTableModule
  ],
  declarations: [DashboardComponent, OverviewComponent, UsersComponent, PropertiesComponent],
  exports: [DashboardComponent, OverviewComponent, UsersComponent, PropertiesComponent]
})
export class DashboardModule { }
