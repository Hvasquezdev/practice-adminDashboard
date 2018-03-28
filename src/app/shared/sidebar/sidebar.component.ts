import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isActive: boolean;
  menu: any;

  constructor(public _sidebarService: SidebarService) {
    this.isActive = false;
    this.menu = _sidebarService.menu;
  }

  ngOnInit() {
  }

}
