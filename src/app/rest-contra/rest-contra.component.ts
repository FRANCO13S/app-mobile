/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rest-contra',
  templateUrl: './rest-contra.component.html',
  styleUrls: ['./rest-contra.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class RestContraComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  dismiss(){
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
