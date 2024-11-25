import { ToastController, LoadingController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonInputPasswordToggle, IonTitle, IonToolbar, IonLabel, IonInput, IonList, IonItem, IonButtons, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, RouterLink, IonButtons, IonInputPasswordToggle, IonItem, IonList, IonInput, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class LoginPage implements OnInit {

  credenciales = {
    correo : '',
    contra : ''
  }

  constructor(private auth: AuthService,
              private Router:Router,
              private tc: ToastController,
              private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  async login(){
    let loader = await this.loadingCtrl.create({
      message: "Iniciando sesión..."
    });
    await loader.present();
    console.log('credenciales ->', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.contra).catch(error => {
      console.log('error');
    })
    if(res) {
      console.log('res ->' , res);
      this.showToast('Hola Mundo!. Has iniciado sesión');
      this.Router.navigate(['/main'])
    }
    await loader.dismiss();
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.credenciales = {
      correo: '',
      contra: '',
    };
  }

  async showToast(message: string) {
    const toast = await this.tc.create({
      message: message,
      duration: 5000,  // Duración en milisegundos
      position: 'top',  // Puedes cambiar la posición: 'top', 'bottom', 'middle'
      cssClass: 'toast',
      color: 'success',  // Puedes cambiar el color (success, warning, danger)
      mode: 'ios'
    });
    toast.present();
  }

}
