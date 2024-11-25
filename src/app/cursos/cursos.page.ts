import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IonicModule, ToastController, LoadingController, NavController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FirestoreService } from '../common/services/firestore.service';
import { Curso } from '../common/models/car.models';
import { Observable } from 'rxjs';
import { CarritoService } from '../common/services/carrito.service';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})

export class CursosPage implements OnInit {

  cursos$: Observable<Curso[]>;

  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private firestoreService: FirestoreService,
              private carritoService: CarritoService) { }

  ionViewWillEnter(){
    this.getCursos();
    
    addIcons({ cartOutline: icons['cartOutline']});
  }
  

  ngOnInit() {
  }

  async getCursos() {
    let loader = await this.loadingCtrl.create({
      message: 'Cargando cursos...'
    });
    await loader.present();

    try {
      // Obtiene los datos de la colección "Cursos" con FirestoreService
      this.cursos$ = this.firestoreService.getCollectionChanges('Cursos');
      await loader.dismiss();
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
      this.showToast('Error al cargar los cursos.');
      await loader.dismiss();
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 5000
    }).then(toastData => toastData.present());
  }

  carrito(cursos$: Curso) {
    this.carritoService.agregarCurso(cursos$); // Agrega el curso al carrito
    this.showToast(`${cursos$.nombre} se añadió al carrito.`);
  }

}
