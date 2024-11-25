import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/angular/standalone';
import { AlertController, NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonContent, RouterLink, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlanesPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  // Función para manejar la selección de un plan
  async selectPlan(plan: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que deseas elegir el plan ${plan}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Redirigir al usuario a la página de confirmación o pago
            this.navCtrl.navigateForward(`/confirmar-plan/${plan}`);
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
