import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importar módulos de Ionic
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngFor
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,        // <-- esto es importante
  imports: [IonicModule, CommonModule], // <-- importa Ionic y CommonModule
})
export class HomePage {
  constructor(public photoService: PhotoService) {}
}