import { Component } from '@angular/core';
import { CreatorInfoComponent } from './feature/creator-info/creator-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreatorInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
