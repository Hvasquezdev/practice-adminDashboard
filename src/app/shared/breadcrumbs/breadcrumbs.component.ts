import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  routeName: string;

  constructor(private router: Router,
              public title: Title,
              public meta: Meta) {

    this.getDataRoutes()
        .subscribe((data) => {
          this.routeName = data.title;
          this.title.setTitle(this.routeName);
          let metaTag: MetaDefinition = {
            name: 'Description',
            content: this.routeName
          };
          this.meta.updateTag(metaTag);
        });

  }

  ngOnInit() {
  }

  getDataRoutes() {
    return this.router.events
          .filter((data: any) => data instanceof ActivationEnd)
          .filter((data: ActivationEnd) => data.snapshot.firstChild === null)
          .map((data) => data.snapshot.data);
  }

}
