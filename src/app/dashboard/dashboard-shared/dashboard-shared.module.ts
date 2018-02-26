import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

import { OverviewService } from './services/overview.service';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [NavigationComponent, HeaderComponent, CardComponent],
  providers: [OverviewService],
  exports: [NavigationComponent, HeaderComponent, CardComponent]
})
export class DashboardSharedModule { }
