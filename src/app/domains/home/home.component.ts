import { Component } from '@angular/core';
import { CreatorInfoComponent } from './feature/creator-info/creator-info.component';
import { FaqComponent } from './feature/faq/faq.component';
import { HowItWorksComponent } from './feature/how-it-works/how-it-works.component';
import { PromoBannerComponent } from './feature/promo-banner/promo-banner.component';
import { TextifyInputComponent } from './feature/textify-input/textify-input.component';
import { TextifyOutputComponent } from './feature/textify-output/textify-output.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreatorInfoComponent, FaqComponent, HowItWorksComponent, PromoBannerComponent, TextifyInputComponent, TextifyOutputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  wordArt: string = '';

  receiveArt(art: string) {
    this.wordArt = art;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
