import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router"; 
import { Title } from '@angular/platform-browser';

import { AppSettings } from '@app/app.settings';
import { Settings } from '@app/app.settings.model';

@Component({
    selector: 'app-breadcrumbs',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {
 
}



