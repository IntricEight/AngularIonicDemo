import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reformat-name',
  templateUrl: './reformat-name.component.html',
  styleUrls: ['./reformat-name.component.scss'],
  standalone: true,
  imports: [IonText],
})

export class ReformatNameComponent {
  @Input() fullName?: string;
  formattedName: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fullName']) {
      this.reformatNameAnnouncement();
    }
  }

  reformatNameAnnouncement(): void {
    if (this.fullName && this.fullName.trim().length > 0) {
      let nameParts = this.fullName.split(' ');

      if (nameParts.length >= 2) {
        let firstName = nameParts.slice(0, -1).join(' ');
        let lastName = nameParts[nameParts.length - 1];

        this.formattedName = `Announcing ${lastName}, ${firstName}`;

      } else {
        this.formattedName = 'Please enter both first and last name';
      }

    } else {
      this.formattedName = ``;
    }
  }
}