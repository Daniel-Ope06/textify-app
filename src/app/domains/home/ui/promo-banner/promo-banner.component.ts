import { Component } from '@angular/core';
import { CallToActionComponent } from '../../feature/call-to-action/call-to-action.component';

@Component({
  selector: 'promo-banner',
  standalone: true,
  imports: [CallToActionComponent],
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.scss',
})
export class PromoBannerComponent {}
