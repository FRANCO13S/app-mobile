/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FirestoreService } from '../common/services/firestore.service';
import { AuthService } from '../common/services/auth.service';
import { UserI } from '../common/models/users.models';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.page.html',
  styleUrls: ['./editperfil.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class EditperfilPage implements OnInit {
  uid : string;
  info: UserI = null;

  email:string = ''; // Variable para almacenar el correo
  tele:string = ''; // Variable para almacenar el telefono
  dic:string = ''; // Variable para almacenar el direccion
  nac:string = ''; // Variable para almacenar el fecha de nacimiento
  isEditing: boolean = false; // Controla si se está editando
  isEditing1: boolean = false; // Controla si se está editando
  isEditing2: boolean = false; // Controla si se está editando
  isEditing3: boolean = false; // Controla si se está editando
  enlace: string = 'Usuarios';

  popoverEvent: any;
  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private route:Router,) {
                addIcons({ create:icons.createOutline, checkmark:icons.checkmark});
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

  obtenerTelefono() {
    this.firestore.getDocumentChanges<any>(`${this.enlace}/${this.info.idUser}`)
      .subscribe(data => {
        if (data && data.telefono) {
          this.tele = data.telefono;
        } else {
          console.log('El documento no tiene el campo "telefono" o es null.');
          this.tele = ''; // Puedes definir un valor predeterminado
        }
      });
  }

  obtenerDireccion() {
    this.firestore.getDocumentChanges<any>(`${this.enlace}/${this.info.idUser}`)
      .subscribe(data => {
        if (data && data.direccion) {
          this.dic = data.direccion;
        } else {
          console.log('El documento no tiene el campo "direccion" o es null.');
          this.dic = ''; // Puedes definir un valor predeterminado
        }
      });
  }

  obtenerNa() {
    this.firestore.getDocumentChanges<any>(`${this.enlace}/${this.info.idUser}`)
      .subscribe(data => {
        if (data && data.fena) {
          this.nac = data.fena;
        } else {
          console.log('El documento no tiene el campo "direccion" o es null.');
          this.nac = ''; // Puedes definir un valor predeterminado
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

  toggleEdit() {
    this.isEditing = !this.isEditing;
    // Al iniciar la edición, carga el correo actual en el input
    if (this.isEditing && this.info) {
      this.email = this.info.correo;
    }
  }

  toggleEdit1() {
    this.isEditing1 = !this.isEditing1;
    // Al iniciar la edición, carga el correo actual en el input
    if (this.isEditing1 && this.info) {
      this.tele = this.info.telefono;
    }
  }
  toggleEdit2() {
    this.isEditing2 = !this.isEditing2;
    // Al iniciar la edición, carga el correo actual en el input
    if (this.isEditing2 && this.info) {
      this.dic = this.info.direccion;
    }
  }
  toggleEdit3() {
    this.isEditing3 = !this.isEditing3;
    // Al iniciar la edición, carga el correo actual en el input
    if (this.isEditing3 && this.info) {
      this.nac = this.info.fena;
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
  async saveTele() {
    if (this.tele && this.info) {
      this.info.telefono = this.tele; // Actualiza el correo localmente
      this.isEditing = false; 
      try {
        await this.firestore.updateDocumentID(
          { telefono: this.tele },
          this.enlace,
          this.info.idUser
        );
        console.log('Correo actualizado');
      } catch (error) {
        console.error('Error al actualizar el correo:', error);
      }
      this.isEditing1 = false; // Salir del modo de edición
    }
  }
  async saveDic() {
    if (this.dic && this.info) {
      this.info.direccion = this.dic; // Actualiza el correo localmente
      this.isEditing = false; 
      try {
        await this.firestore.updateDocumentID(
          { direccion: this.dic },
          this.enlace,
          this.info.idUser
        );
        console.log('Correo actualizado');
      } catch (error) {
        console.error('Error al actualizar el correo:', error);
      }
      this.isEditing2 = false; // Salir del modo de edición
    }
  }
  async saveNa() {
    if (this.nac && this.info) {
      this.info.fena = this.nac; // Actualiza el correo localmente
      this.isEditing3 = false; 
      try {
        await this.firestore.updateDocumentID(
          { fena: this.nac },
          this.enlace,
          this.info.idUser
        );
        console.log('Correo actualizado');
      } catch (error) {
        console.error('Error al actualizar el correo:', error);
      }
      this.isEditing3 = false; // Salir del modo de edición
    }
  }
}
