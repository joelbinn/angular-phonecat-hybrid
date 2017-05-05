import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
