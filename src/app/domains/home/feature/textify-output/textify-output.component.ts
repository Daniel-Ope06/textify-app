import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'textify-output',
  standalone: true,
  imports: [],
  templateUrl: './textify-output.component.html',
  styleUrl: './textify-output.component.scss'
})
export class TextifyOutputComponent implements OnChanges {
  @Input({required: true}) wordArt: string = '';

  fontSizeValue: number = 30; // measured in px
  fontSize: string = `${this.fontSizeValue}px`;
  screenWidth: number = window.innerWidth; // measured in px

  ngOnChanges(changes: SimpleChanges) {
    if (changes['wordArt'] || changes['screenWidth']) {
      this.setFontSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.setFontSize();
  }

  setFontSize() {
    let charCountPerLine: number = this.wordArt.indexOf('\n') - 4;

    if (this.screenWidth >= 1370) {
      if (charCountPerLine <= 140) { this.fontSizeValue = 14; }
      else if (charCountPerLine <= 236) { this.fontSizeValue = 8; }
      else { this.fontSizeValue = 4; }
    }
    else if (this.screenWidth >= 1024) {
      if (charCountPerLine <= 92) { this.fontSizeValue = 14; }
      else if (charCountPerLine <= 172) { this.fontSizeValue = 8; }
      else { this.fontSizeValue = 6; }
    }
    else if (this.screenWidth >= 390) {
      if (charCountPerLine <= 60) { this.fontSizeValue = 8; }
      else if (charCountPerLine <= 120) { this.fontSizeValue = 4; }
      else if (charCountPerLine <= 156) { this.fontSizeValue = 3; }
      else { this.fontSizeValue = 2; }
    }

    this.fontSize = `${this.fontSizeValue}px`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.wordArt);
  }
}
