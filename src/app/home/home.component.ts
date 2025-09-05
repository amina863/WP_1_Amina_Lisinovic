import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Dobrodošli na našu stranicu!';
  introText = 'Ovdje možete pronaći sve informacije o našim proizvodima, timu i uslugama. Pridružite nam se!';
}
