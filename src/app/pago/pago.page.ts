import { addIcons } from 'ionicons';
import { IonicModule } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink , CommonModule, FormsModule]
})
export class PagoPage implements OnInit {
  selectedMethod: string = 'tarjeta'; // Opción de pago por defecto
  precio: number = 35.00; // Precio inicial, ajustable según la selección del usuario

  selectMethod(method: string) {
    this.selectedMethod = method;
  }

  actualizarPrecio(nuevoPrecio: number) {
    this.precio = nuevoPrecio;
  }


  constructor() {
    addIcons({ wifioutline: icons['wifiOutline']});
    addIcons({ create: icons['create']});
  }

  ngOnInit() {
  }

}
