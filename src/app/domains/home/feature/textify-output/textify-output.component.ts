import { Component, Input } from '@angular/core';
import { WordArtService } from '../../../shared/service/word-art/word-art.service';

@Component({
  selector: 'textify-output',
  standalone: true,
  imports: [],
  templateUrl: './textify-output.component.html',
  styleUrl: './textify-output.component.scss'
})
export class TextifyOutputComponent {
  @Input({required: true}) wordArt: string = '';
}
