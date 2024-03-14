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
  placeholder: { text: string, symbol: string } = { text: '#1', symbol: ':*:' };
  isTextValid: boolean = true;
  previousValidSymbol: string = '';

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
    // if backspace occurs do not validate
    if (event.inputType === 'deleteContentBackward') { return; }

    // if length > 10, only take first 10 characters
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
      this.input.text = event.target.value;
    }

    // validate each character
    let validText = '';
    for (let char of event.target.value) {
      if (this.isCharacterValid(char)) {
        validText += char;
      } else {
        // show error message for 5 seconds
        this.isTextValid = false;
        setTimeout(() =>{
          this.isTextValid = true;
        }, 5000);
      }
    }
    event.target.value = validText;
    this.input.text = validText;
  }

  isCharacterValid(char: string): boolean {
    return this.artService.characterSet.includes(char.toUpperCase())
  }

  validateSymbol(event: any) {
    if (event.target.value.length > 4) {
      event.target.value = event.target.value.slice(0, 4);
      this.input.symbol = event.target.value;
    }
  }
}
