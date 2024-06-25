import { Component } from '@angular/core';
import { NgStyle } from '@angular/common'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [NgStyle, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonLabel],
})
export class Tab3Page {
  fontSize: number = 1;
  textColor: string = 'black';
  backgroundColor: string = 'white';
  
  constructor() {}

  setSize(size: number) {
    this.fontSize = size;
  }

  setTextColor(color: string) {
    this.textColor = color;
  }

  setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }
}
