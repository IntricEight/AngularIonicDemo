import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/angular/standalone';
import { ReformatNameComponent } from '../reformat-name/reformat-name.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, ReformatNameComponent, FormsModule],
})
export class Tab1Page {
  fullName?: string;
  
  constructor() {}
}
