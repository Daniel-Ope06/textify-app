import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textify-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textify-input.component.html',
  styleUrl: './textify-input.component.scss'
})
export class TextifyInputComponent {
  input: { text: string, symbol: string } = { text: '', symbol: '' };
  placeholder: { text: string, symbol: string } = { text: 'Textify', symbol: '*::*' };

  onSubmit() {}
}
