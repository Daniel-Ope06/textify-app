import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordArtService } from '../../../shared/service/word-art/word-art.service';

@Component({
  selector: 'textify-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textify-input.component.html',
  styleUrl: './textify-input.component.scss'
})
export class TextifyInputComponent {
  @Output() createArtEvent = new EventEmitter<string>();
  artService: WordArtService = inject(WordArtService);

  input: { text: string, symbol: string } = { text: '', symbol: '' };
  placeholder: { text: string, symbol: string } = { text: 'Textify', symbol: '*::*' };

  onSubmit() {
    let wordArt: string = this.artService.convertToWordArt(this.input.text, this.input.symbol);
    this.createArtEvent.emit(wordArt);
  }
}
