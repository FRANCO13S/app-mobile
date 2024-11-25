/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-curso1',
  templateUrl: './curso1.page.html',
  styleUrls: ['./curso1.page.scss'],
  standalone: true,
  imports: [IonButtons, RouterLink , IonButton, IonIcon, IonContent,
            IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Curso1Page implements OnInit {
  rating: number = 0; // Calificación inicial

  constructor(private navCtrl: NavController) {
    addIcons({ starOutline: icons['starOutline']});
  }

  // Función para actualizar la calificación
  rateCourse(stars: number) {
    this.rating = stars;
  }

  // Función para redirigir a la página de suscripción
  goToSubscription() {
    this.navCtrl.navigateForward('/planes');
  }

  ngOnInit() {
  }

}
