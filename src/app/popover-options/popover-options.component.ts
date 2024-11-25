import { IonicModule, PopoverController } from '@ionic/angular';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popover-options',
  templateUrl: './popover-options.component.html',
  styleUrls: ['./popover-options.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class PopoverOptionsComponent {

  constructor(private popoverController: PopoverController) { }

  onOptionClick(option: string) {
    console.log(`Opción seleccionada: ${option}`);
  }

  selectOption(option: string) {
    // Pasar la opción seleccionada al componente padre y cerrar el popover
    this.popoverController.dismiss(option);  // Aquí se pasa el dato seleccionado
  }

}
