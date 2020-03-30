import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { UiWebLayoutMaterialModule } from '@swagex/ui/web-layout-material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiWebLayoutMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
