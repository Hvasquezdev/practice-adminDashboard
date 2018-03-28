import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotFound404Component } from './not-found404/not-found404.component';

// Services
import { SidebarService } from '../services/service.index';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotFound404Component
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    SidebarService
  ]
})
export class SharedModule { }
