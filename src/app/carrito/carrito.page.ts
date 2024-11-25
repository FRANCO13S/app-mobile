import { Curso } from './../common/models/car.models';
import { IonicModule } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../common/services/carrito.service';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class CarritoPage implements OnInit {
  cursos: Curso[]; // Cursos en el carrito

  constructor(private carritoService: CarritoService) { 
  addIcons({ trash: icons['trash']});
}

  ionViewWillEnter() {
    this.cursos = this.carritoService.obtenerCursos(); // Obtén los cursos del carrito
  }

  eliminarCurso(curso: Curso) {
    this.carritoService.eliminarCurso(curso);
    this.cursos = this.carritoService.obtenerCursos(); // Actualiza la lista
  }

  get total(): number {
    return this.cursos?.reduce((sum, curso) => sum + Number(curso.precio || 0), 0) || 0; // Asegura la suma numérica
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.cursos = [];
  }

  ngOnInit() {
  }

}
