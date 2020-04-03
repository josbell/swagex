import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonUiMaterialModule } from '@swagex/common-ui/material';
import { MaterialCardComponent } from './material-card/material-card.component';

export const latinSwagStudioWebHomeRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, CommonUiMaterialModule],
  declarations: [HomeComponent, MaterialCardComponent],
  exports: [HomeComponent]
})
export class LatinSwagStudioWebHomeModule {}
