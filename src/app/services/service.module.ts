import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import {
  SidebarService,
  SharedService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SidebarService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
