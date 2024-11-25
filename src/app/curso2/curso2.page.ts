/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.page.html',
  styleUrls: ['./curso2.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, RouterLink, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Curso2Page implements OnInit {
  rating: number = 0; // Calificación inicial

  constructor(private navCtrl: NavController) { }

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
