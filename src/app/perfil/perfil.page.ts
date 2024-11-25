import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink,  } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import { FirestoreService } from '../common/services/firestore.service';
import { UserI } from '../common/models/users.models';
import { NavController, IonicModule, PopoverController } from '@ionic/angular';
import { settingsOutline } from 'ionicons/icons';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PopoverOptionsComponent } from '../popover-options/popover-options.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink,
            CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  uid : string;
  info: UserI = null;

  email:string = ''; // Variable para almacenar el correo
  isEditing: boolean = false; // Controla si se está editando
  enlace: string = 'Usuarios';

  popoverEvent: any;
  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private route:Router,
              private navCtrl: NavController,
              private popoverController: PopoverController) {
                addIcons({setting:settingsOutline, create:icons.createOutline, checkmark:icons.checkmark});
              }

  async ngOnInit() {
    this.auth.stateUser().subscribe(async res => {
      console.log('en perfil - estado autenticación', res);
      await this.getUid();
    });
  }

  obtenerCorreo() {
    this.firestore.getDocumentChanges<any>(`${this.enlace}/${this.info.idUser}`)
      .subscribe(data => {
        if (data && data.correo) {
          this.email = data.correo;
        } else {
          console.log('El documento no tiene el campo "correo" o es null.');
          this.email = ''; // Puedes definir un valor predeterminado
        }
      });
  }

  async getUid() {
    const uid = await this.auth.getUid();
    if (uid) {
      this.uid = uid;
      this.getInfoUser();
    } else {
      console.log('No existe uid, redirigiendo a la página de login');
      this.route.navigate(['/login']);
    }
  }

  async getInfoUser() {
    const path = 'Usuarios';
    const id = this.uid;

    try {
      const userInfo = await this.firestore.getDoc<UserI>(path, id);
      if (userInfo) {
        this.info = userInfo; // Guarda la información del usuario.
        console.log('Datos del usuario:', userInfo);
      } else {
        console.log('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  }
  
  async goToSettings(event: any) {
    event.preventDefault(); // Prevenir cualquier acción predeterminada del evento

    this.popoverEvent = event;

    // Crear el popover
    const popover = await this.popoverController.create({
      component: PopoverOptionsComponent,  // Usamos el componente de opciones
      event: event,                      // Posicionamos el popover según el evento de clic
      translucent: true                  // Hace el popover translúcido
    });

    await popover.present();  // Mostrar el popover    
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    // Al iniciar la edición, carga el correo actual en el input
    if (this.isEditing && this.info) {
      this.email = this.info.correo;
    }
  }

  // Guardar el correo al hacer blur o al guardar
  async saveEmail() {
    if (this.email && this.info) {
      this.info.correo = this.email; // Actualiza el correo localmente
      this.isEditing = false; 
      try {
        await this.firestore.updateDocumentID(
          { correo: this.email },
          this.enlace,
          this.info.idUser
        );
        console.log('Correo actualizado');
      } catch (error) {
        console.error('Error al actualizar el correo:', error);
      }
      this.isEditing = false; // Salir del modo de edición
    }
  }
}
