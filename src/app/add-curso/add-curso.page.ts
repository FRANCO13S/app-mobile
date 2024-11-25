import { ToastController, IonicModule, LoadingController, NavController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso } from '../common/models/car.models';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../common/services/firestore.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.page.html',
  styleUrls: ['./add-curso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AddCursoPage implements OnInit {

  curs = {} as Curso;

  constructor(private toastCtrl: ToastController,
    private firestoreService: FirestoreService) { }

  ngOnInit() {
  }

  async createCurso(curso: any) {
    try {
      const id = this.firestoreService.createIdDoc(); // Generar ID único
      await this.firestoreService.createDocumentID(curso, 'Cursos', id); // Crear documento
      this.showToast('Curso agregado correctamente.');
    } catch (error) {
      console.error('Error al agregar curso:', error);
      this.showToast('Error al agregar curso.');
    }
  }

  formValidation(){
    if(!this.curs.nombre){
      this.showToast("Ingrese un curso");
      return false;
    }
    if(!this.curs.precio){
      this.showToast("Ingrese el precio");
      return false;
    }
    return true;
  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 5000
    }).then(toastData => toastData.present());
  }

  async updateCurso(curso: Curso, id: string) {
    try {
      await this.firestoreService.updateDocumentID(curso, 'Cursos', id);
      this.showToast('Curso actualizado correctamente.');
    } catch (error) {
      console.error('Error al actualizar curso:', error);
      this.showToast('Error al actualizar curso.');
    }
  }
}
