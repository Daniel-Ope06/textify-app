import { Injectable } from '@angular/core';

// Alphabets
import { A } from './alphabet/a.alphabet'; import { B } from './alphabet/b.alphabet';
import { C } from './alphabet/c.alphabet'; import { D } from './alphabet/d.alphabet';
import { E } from './alphabet/e.alphabet'; import { F } from './alphabet/f.alphabet';
import { G } from './alphabet/g.alphabet';


import { M } from './alphabet/m.alphabet';

@Injectable({
  providedIn: 'root'
})
export class WordArtService {
  characterSet: string[] = ["A", "B", "C", "D", "E",    "M"];

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
          // Alphabets
          case "A": line += A.getLine(lineNumber, symbol); break; case "B": line += B.getLine(lineNumber, symbol); break;
          case "C": line += C.getLine(lineNumber, symbol); break; case "D": line += D.getLine(lineNumber, symbol); break;
          case "E": line += E.getLine(lineNumber, symbol); break; case "F": line += F.getLine(lineNumber, symbol); break;
          case "G": line += G.getLine(lineNumber, symbol); break;



          case "M": line += M.getLine(lineNumber, symbol); break;
        }
    }

    return line;
  }

}