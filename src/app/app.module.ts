import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';

import { ComponentsModule } from '@app/components/components.module';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { NotfoundComponent } from './pages/errors/notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot([]),
    routing,
  ],
  providers: [ AppSettings ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
