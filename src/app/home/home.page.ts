import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonList, IonItem, IonLabel, IonButtons, IonMenuButton, IonSearchbar, IonChip, IonAvatar, IonImg, IonButton, IonIcon, IonModal, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonBadge } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { notificationsOutline, addOutline, playCircleOutline, ellipsisHorizontal } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonModal, IonIcon, IonButton, IonImg, IonAvatar, IonChip, RouterLink, IonButtons, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonBadge],
})
export class HomePage {
  constructor() {

    addIcons ({ notificationsOutline, addOutline, playCircleOutline, ellipsisHorizontal });

  }
  async canDismiss(data?: undefined, role?: string) {
      return role !== 'gesture';
    }
}
