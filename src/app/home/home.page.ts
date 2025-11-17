import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonList, IonItem, IonLabel, IonButtons, IonMenuButton, IonSearchbar, IonGrid, IonRow, IonCol, IonChip, IonAvatar, IonImg, IonButton, IonIcon, IonModal } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { notificationsOutline, addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonModal, IonIcon, IonButton, IonImg, IonAvatar, IonChip, IonCol, IonRow, IonGrid, RouterLink, IonButtons, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonSearchbar],
})
export class HomePage {
  constructor() {

    addIcons ({ notificationsOutline, addOutline });

  }
  async canDismiss(data?: undefined, role?: string) {
      return role !== 'gesture';
    }
}
