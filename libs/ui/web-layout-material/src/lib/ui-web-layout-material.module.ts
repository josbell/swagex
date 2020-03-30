import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    SideNavItemComponent,
    ContentComponent,
    FooterComponent,
    SocialMediaBarComponent
  ],
  imports: [RouterModule, CommonModule, RouterModule, MaterialModule],
  exports: []
})
export class UiWebLayoutMaterialModule {}
