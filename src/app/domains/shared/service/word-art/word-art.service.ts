import { Injectable } from '@angular/core';

// Alphabets
import { A } from './characters/alphabet/english/a.alphabet';

@Injectable({
  providedIn: 'root'
})
export class WordArtService {
  characterSet: string[] = ["A"];

  convertToWordArt(text: string, symbol: string): string {
    let wordArt: string = "";

    for (let i = 0; i < 10; i++){
      wordArt += this.getLine(i, text, symbol) + "\n";
    }

    return wordArt;
  }


  private getLine(lineNumber: number, text: string, symbol: string): string {
    let line: string = "";
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
        let character = text.charAt(i);
        switch (character) {
            case "A": line += A.getLine(lineNumber, symbol); break;
        }
    }

    return line;
  }

}