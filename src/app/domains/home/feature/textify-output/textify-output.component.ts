import { Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'textify-output',
  standalone: true,
  imports: [],
  templateUrl: './textify-output.component.html',
  styleUrl: './textify-output.component.scss'
})
export class TextifyOutputComponent implements OnChanges {
  @Input({required: true}) wordArt: string = '';

  @ViewChild('art') art!: ElementRef<HTMLParagraphElement>;

  fontSizeValue: number = 14; // measured in px
  fontSize: string = `${this.fontSizeValue}px`;
  screenWidth: number = window.innerWidth; // measured in px
  showCopyMessage: boolean = false;
  showDownloadMessage: boolean = false;

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
    let padding: number = 0;

    // set padding based on screen width (referenced from the css file)
    if (this.screenWidth > 1024) {
      padding = 160;
    } else if (this.screenWidth > 480) {
      padding = 96;
    } else {
      padding = 64;
    }

    this.fontSizeValue = 14; // max font-size

    while ((charCountPerLine * this.fontSizeValue) > (this.screenWidth - padding)) {
      if ((this.screenWidth > 780) && (this.fontSizeValue < 5)) { break; } // min font-size is 4px at above 780px screen width
      else { if (this.fontSizeValue < 3) { break; } } // min font-size is 2px at below 780px screen width
      this.fontSizeValue -= 1;
    }

    this.fontSize = `${this.fontSizeValue}px`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.wordArt);
    // show copy message for 5 seconds
    this.showDownloadMessage = false;
    this.showCopyMessage = true;
    setTimeout(() =>{
      this.showCopyMessage = false;
    }, 5000);
  }

  downloadArt() {
    // show download message for 5 seconds
    this.showCopyMessage = false;
    this.showDownloadMessage = true;
    setTimeout(() =>{
      this.showDownloadMessage = false;
    }, 5000);

    const elementToDownload = this.art.nativeElement;

    html2canvas(elementToDownload)
      .then(canvas => {
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'textify-art.png';
        link.click();
      });
  }
}
