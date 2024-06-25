import { Component } from '@angular/core';
import { NgFor } from '@angular/common'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [NgFor, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonText]
})
export class Tab2Page {

  // Hardcoded JSON data to use in the table display
  data = [
    { name: 'Alice', time: '12:30', id: 1 },
    { name: 'Charlie', time: '11:45', id: 3 },
    { name: 'Eve', time: '10:30', id: 5 },
    { name: 'Hank', time: '08:30', id: 8 },
    { name: 'Frank', time: '09:00', id: 6 },
    { name: 'Bob', time: '14:00', id: 2 },
    { name: 'David', time: '13:15', id: 4 },
    { name: 'Jack', time: '12:00', id: 10 },
    { name: 'Grace', time: '15:45', id: 7 },
    { name: 'Ivy', time: '14:30', id: 9 },
  ];

  //Store the sorted data
  sortedData = [...this.data];

  //Sort the data using one of the three buttons
  sortBy(key: string) {
    this.sortedData = [...this.data].sort((a, b) => {
      if (key === 'name') {
        return a.name.localeCompare(b.name);

      } else if (key === 'time') {
        return a.time.localeCompare(b.time);
      
      } else {
        return a.id - b.id;
      }
    });
  }

  constructor() {}
}