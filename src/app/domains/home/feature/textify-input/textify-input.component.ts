import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordArtService } from '../../../shared/service/word-art/word-art.service';

@Component({
  selector: 'textify-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textify-input.component.html',
  styleUrl: './textify-input.component.scss'
})
export class TextifyInputComponent implements OnInit {
  @Output() createArtEvent = new EventEmitter<string>();
  artService: WordArtService = inject(WordArtService);

  input: { text: string, symbol: string } = { text: '', symbol: '' };
  placeholder: { text: string, symbol: string } = { text: 'A', symbol: '*::*' };
  invalidChar: string = '';
  previousValidText: string = '';

  ngOnInit(): void {
    let wordArt: string = this.artService.convertToWordArt(this.placeholder.text, this.placeholder.symbol);
    this.createArtEvent.emit(wordArt);
  }

  onSubmit() {
    let text: string = '';
    let symbol: string = '';
    let wordArt: string = '';

    if (this.input.text.length === 0) {
      text = this.placeholder.text;
    } else {
      text = this.input.text;
    }

    if (this.input.symbol.length === 0) {
      symbol = this.placeholder.symbol;
    } else {
      symbol = this.input.symbol;
    }

    wordArt = this.artService.convertToWordArt(text, symbol);
    this.createArtEvent.emit(wordArt);
  }

  validateInput(event: any) {
    let inputChar: string = event.data; // most recent character entered

    if (inputChar && !this.isCharacterValid(inputChar)) {
      event.target.value = this.previousValidText;
      this.input.text = this.previousValidText;
      this.invalidChar = inputChar;
      // show error message for 5 seconds
      setTimeout(() =>{
        this.invalidChar = '';
      }, 5000);
    } else {
      this.invalidChar = '';
      this.previousValidText = this.input.text;
    }
  }

  isCharacterValid(char: string): boolean {
    if (this.artService.characterSet.includes(char.toUpperCase())) {
      return true;
    }
    return false;
  }
}
