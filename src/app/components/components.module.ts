import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, TabsComponent, SearchComponent, BreadcrumbsComponent, CarouselComponent],
  exports: [NavbarComponent, TabsComponent, SearchComponent, BreadcrumbsComponent, CarouselComponent]
})
export class ComponentsModule { }
