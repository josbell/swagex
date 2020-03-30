import { Injectable } from '@angular/core';
import { IconFiles, MenuItem, FrameworkConfigSettings } from './model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  title: string;
  socialIcons: IconFiles[];
  menuItems: MenuItem[];

  constructor() {}

  configure(settings: FrameworkConfigSettings) {
    Object.assign(this, settings);
  }
}
