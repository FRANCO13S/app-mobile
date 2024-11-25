import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonButtons } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirma-plan',
  templateUrl: './confirma-plan.page.html',
  styleUrls: ['./confirma-plan.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonLabel, RouterLink, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,]
})
export class ConfirmaPlanPage implements OnInit {
  plan: string = ''; // Almacena el plan seleccionado
  fullName: string = ''; // Almacena el nombre completo
  email: string = ''; // Almacena el correo electrónico

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.plan = this.route.snapshot.paramMap.get('plan') || 'Sin plan seleccionado';
  }

  submitForm() {
    if (this.fullName && this.email) {
      console.log(`Plan: ${this.plan}, Nombre: ${this.fullName}, Correo: ${this.email}`);
      this.navCtrl.navigateForward('/pago-confirmacion'); // Redirige a la página de pago o confirmación
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
