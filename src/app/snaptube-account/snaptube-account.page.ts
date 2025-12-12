import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-snaptube-account',
  templateUrl: './snaptube-account.page.html',
  styleUrls: ['./snaptube-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SnaptubeAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
