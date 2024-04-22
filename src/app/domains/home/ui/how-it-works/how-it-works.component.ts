import { Component } from '@angular/core';
import { CallToActionComponent } from '../../feature/call-to-action/call-to-action.component';

@Component({
  selector: 'how-it-works',
  standalone: true,
  imports: [CallToActionComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {}
