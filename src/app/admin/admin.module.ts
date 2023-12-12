import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';


@NgModule({
  declarations: [
    AdminDetailsComponent,
    AdminSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
