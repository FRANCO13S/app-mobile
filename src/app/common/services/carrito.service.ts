import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cursos: any[] = []; // Arreglo para almacenar los cursos

  constructor() {}

  // Obtener todos los cursos en el carrito
  obtenerCursos() {
    return this.cursos;
  }

  // Añadir un curso al carrito
  agregarCurso(curso: any) {
    this.cursos.push(curso);
  }

  // Eliminar un curso del carrito
  eliminarCurso(curso: any) {
    // Encuentra el índice del curso a eliminar
    const index = this.cursos.findIndex(
      (item) => item.nombre === curso.nombre && item.precio === curso.precio
    );
    if (index > -1) {
      this.cursos.splice(index, 1); // Elimina el curso del arreglo
    }
  }

  // Vaciar todo el carrito
  vaciarCarrito() {
    this.cursos = [];
  }
}
