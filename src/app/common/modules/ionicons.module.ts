import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as icons from '@angular/common'
import { addIcons } from 'ionicons';
import { closeOutline, addOutline, wifiOutline, } from 'ionicons/icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class IoniconsModule {

  constructor() {
    this.init();
  }

  init() {
    // Mapeo de íconos específicos que quieres agregar
    const icons = {
      'close-outline': closeOutline,
      'add-outline': addOutline,
      'logo-visa': 'logo-visa',
      wifiOutline: wifiOutline,
    };
  }

}
