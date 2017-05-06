import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { PhonecatAppComponent } from './phonecat-app.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations:[
    PhonecatAppComponent
  ],
  bootstrap:[
    PhonecatAppComponent
  ]
})
export class AppModule {
}
