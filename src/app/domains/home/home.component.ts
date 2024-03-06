import { Component } from '@angular/core';
import { CreatorInfoComponent } from './feature/creator-info/creator-info.component';
import { PromoBannerComponent } from './feature/promo-banner/promo-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreatorInfoComponent, PromoBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
