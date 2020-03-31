import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LatinSwagStudioWebHomeModule } from '@swagex/latin-swag-studio-web/home';
import { CommonUiMaterialLayoutWebModule } from '@swagex/common-ui/material-layout-web';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonUiMaterialLayoutWebModule,
    LatinSwagStudioWebHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
