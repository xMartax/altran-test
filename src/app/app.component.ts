import { Component } from '@angular/core';
import { Settings } from './app.settings.model';
import { AppSettings } from './app.settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'altran-test';
  public settings: Settings;
  constructor(public appSettings:AppSettings, private router:Router){
      this.settings = this.appSettings.settings;  
  }    
}
