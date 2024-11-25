import { FirestoreService } from './../common/services/firestore.service';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonInputPasswordToggle , IonHeader, IonTitle,
          IonToolbar, IonInput, IonItem, IonList,
          IonButtons, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { UserI } from '../common/models/users.models';
import { IoniconsModule } from '../common/modules/ionicons.module';
import { AuthService } from '../common/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  standalone: true,
  imports: [IonSpinner, IoniconsModule , IonButton, FormsModule, RouterLink, IonButtons, IonList, IonItem,
    IonInputPasswordToggle, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistrarsePage implements OnInit {

  users: UserI[] = [];

  newUser: UserI;
  cargando: boolean = false;

  datos: UserI = {
    nombres: null,
      apellidos:null,
      correo: null,
      contra: null,
      fena: null,
      idUser: this.FirestoreService.createIdDoc(),
      telefono: null,
      direccion: null,
      perfil: 'clientes'
  }

  message: string = '';

  constructor(private FirestoreService: FirestoreService,
              private auth: AuthService,
              private router: Router,
              private tc: ToastController,
              private loadingCtrl: LoadingController,
  ) {

  this.loadusers();
}

  loadusers(){
    this.FirestoreService.getCollectionChanges<UserI>('Usuarios').subscribe(data => {
      if(data) {
        this.users = data
      }
    })
  }


  async registrar(){
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    });
    await loader.present();
    const res = await this.auth.registrarUser(this.datos).catch(error => {
      console.log('error');
    })
    if (res) {
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.idUser = id;
      this.datos.contra = null
      await this.FirestoreService.createDocumentID(this.datos, path, id)
      const nm = this.datos.nombres;
      const mens = `Te has registrado correctamente.\n
                    Bienvenido, ${nm}\n
                    Ahora puedes iniciar sesión\n
                    ingresando con tu cuenta nueva.`;
      this.showToast(mens);
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 4000);
    }
    await loader.dismiss();
    this.limpiarFormulario();
    this.auth.logut();
  }

  limpiarFormulario() {
    this.datos = {
      nombres: '',
      apellidos: '',
      correo: '',
      contra: '',
      fena: '',
      idUser: null,
      telefono:'',
      direccion:'',
      perfil: 'clientes',
    };
  }

  async showToast(message: string) {
    const toast = await this.tc.create({
      message: message,
      duration: 5000,  // Duración en milisegundos
      position: 'middle',  // Puedes cambiar la posición: 'top', 'bottom', 'middle'
      cssClass: 'toast',
      color: 'success',  // Puedes cambiar el color (success, warning, danger)
      mode: 'ios'
    });
    toast.present();
  }

//  async save() {
  //  this.cargando = true;
    //await this.FirestoreService.createDocumentID(this.newUser, 'Usuarios', this.newUser.idUser)
    //this.cargando = false;
  //}

  edit(user: UserI) {
    this.newUser = user;
  }

  async delete(user:UserI) {
  this.cargando = true;
  await this.FirestoreService.deleteDocumentID('Usuarios', user.idUser);
  this.cargando = false;
  }


  ngOnInit() {
  }

}
