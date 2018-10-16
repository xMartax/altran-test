import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { Section1Component } from './section1/section1.component';
import { routing } from './pages.routing';
import { ComponentsModule } from '@app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    ComponentsModule,
    routing
  ],
  declarations: [
    HomeComponent,
    Section1Component,
  ],
 
})
export class PagesModule { }
