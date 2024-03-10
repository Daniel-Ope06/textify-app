import { Injectable } from '@angular/core';

// Alphabets
import { A } from './alphabet/a.alphabet'; import { B } from './alphabet/b.alphabet'; import { C } from './alphabet/c.alphabet';
import { D } from './alphabet/d.alphabet';



import { M } from './alphabet/m.alphabet';

@Injectable({
  providedIn: 'root'
})
export class WordArtService {
  characterSet: string[] = ["A", "B", "C", "D",    "M"];

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
          case "B": line += B.getLine(lineNumber, symbol); break;
          case "C": line += C.getLine(lineNumber, symbol); break;
          case "D": line += D.getLine(lineNumber, symbol); break;




          case "M": line += M.getLine(lineNumber, symbol); break;
        }
    }

    return line;
  }

}