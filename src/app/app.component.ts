import { FirestoreService } from './common/services/firestore.service';
import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { MenuController, IonicModule, ModalController } from '@ionic/angular';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { AuthService } from './common/services/auth.service';
import { CommonModule } from '@angular/common';

//import {  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterModule, CommonModule,],
})

export class AppComponent {
  isMenuOpen: boolean = false;

  login: boolean = false;

  constructor(private menu: MenuController, private router:Router,
              private modalController: ModalController, private auth: AuthService,
              private fireStore: FirestoreService) {
                this.auth.stateUser().subscribe( res => {
                  if(res){
                    this.login = true;
                    res.uid
                  } else {
                    console.log('no está logeado')
                    this.login = false;
                  }
                })
              }

  closeMenu(){
    this.menu.close('main');
    this.isMenuOpen = false;
  }

  // Function to toggle between hamburger and close icon
  toggleMenuIcon() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuButton = document.getElementById('hamburgerButton');
    if (this.isMenuOpen) {
      menuButton?.setAttribute('icon', 'close-outline');
    } else {
      menuButton?.setAttribute('icon', 'menu');
    }
  }

  logut(){
    this.auth.logut();
    this.router.navigate(['/login']);
  }

}
