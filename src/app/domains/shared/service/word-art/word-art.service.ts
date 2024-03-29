import { Injectable } from '@angular/core';

// Alphabets
import { A } from './alphabet/a.alphabet'; import { B } from './alphabet/b.alphabet';
import { C } from './alphabet/c.alphabet'; import { D } from './alphabet/d.alphabet';
import { E } from './alphabet/e.alphabet'; import { F } from './alphabet/f.alphabet';
import { G } from './alphabet/g.alphabet'; import { H } from './alphabet/h.alphabet';
import { I } from './alphabet/i.alphabet'; import { J } from './alphabet/j.alphabet';
import { K } from './alphabet/k.alphabet'; import { L } from './alphabet/l.alphabet';
import { M } from './alphabet/m.alphabet'; import { N } from './alphabet/n.alphabet';
import { O } from './alphabet/o.alphabet'; import { P } from './alphabet/p.alphabet';
import { Q } from './alphabet/q.alphabet'; import { R } from './alphabet/r.alphabet';
import { S } from './alphabet/s.alphabet'; import { T } from './alphabet/t.alphabet';
import { U } from './alphabet/u.alphabet'; import { V } from './alphabet/v.alphabet';
import { W } from './alphabet/w.alphabet'; import { X } from './alphabet/x.alphabet';
import { Y } from './alphabet/y.alphabet'; import { Z } from './alphabet/z.alphabet';

// Numbers
import { Zero } from './number/0.number';
import { One } from './number/1.number';
import { Two } from './number/2.number';
import { Three } from './number/3.number';
import { Four } from './number/4.number';
import { Five } from './number/5.number';
import { Six } from './number/6.number';
import { Seven } from './number/7.number';
import { Eight } from './number/8.number';
import { Nine } from './number/9.number';

// Special
import { Addition } from './special/addition.special';
import { Colon } from './special/colon.special';
import { Equality } from './special/equality.special';
import { Exclamation } from './special/exclamation.special';
import { Hashtag } from './special/hashtag.special';
import { Question } from './special/question.special';
import { Space } from './special/space.special';
import { Subtraction } from './special/subtraction.special';

@Injectable({
  providedIn: 'root'
})
export class WordArtService {
  characterSet: string[] = [
    // Alphabets
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    // Numbers
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    // Specials
    "+", ":", "=", "!", "#", "?", " ", "-",
  ];

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
          case "G": line += G.getLine(lineNumber, symbol); break; case "H": line += H.getLine(lineNumber, symbol); break;
          case "I": line += I.getLine(lineNumber, symbol); break; case "J": line += J.getLine(lineNumber, symbol); break;
          case "K": line += K.getLine(lineNumber, symbol); break; case "L": line += L.getLine(lineNumber, symbol); break;
          case "M": line += M.getLine(lineNumber, symbol); break; case "N": line += N.getLine(lineNumber, symbol); break;
          case "O": line += O.getLine(lineNumber, symbol); break; case "P": line += P.getLine(lineNumber, symbol); break;
          case "Q": line += Q.getLine(lineNumber, symbol); break; case "R": line += R.getLine(lineNumber, symbol); break;
          case "S": line += S.getLine(lineNumber, symbol); break; case "T": line += T.getLine(lineNumber, symbol); break;
          case "U": line += U.getLine(lineNumber, symbol); break; case "V": line += V.getLine(lineNumber, symbol); break;
          case "W": line += W.getLine(lineNumber, symbol); break; case "X": line += X.getLine(lineNumber, symbol); break;
          case "Y": line += Y.getLine(lineNumber, symbol); break; case "Z": line += Z.getLine(lineNumber, symbol); break;

          // Numbers
          case "0": line += Zero.getLine(lineNumber, symbol); break;
          case "1": line += One.getLine(lineNumber, symbol); break;
          case "2": line += Two.getLine(lineNumber, symbol); break;
          case "3": line += Three.getLine(lineNumber, symbol); break;
          case "4": line += Four.getLine(lineNumber, symbol); break;
          case "5": line += Five.getLine(lineNumber, symbol); break;
          case "6": line += Six.getLine(lineNumber, symbol); break;
          case "7": line += Seven.getLine(lineNumber, symbol); break;
          case "8": line += Eight.getLine(lineNumber, symbol); break;
          case "9": line += Nine.getLine(lineNumber, symbol); break;

          // Specials
          case "+": line += Addition.getLine(lineNumber, symbol); break;
          case ":": line += Colon.getLine(lineNumber, symbol); break;
          case "=": line += Equality.getLine(lineNumber, symbol); break;
          case "!": line += Exclamation.getLine(lineNumber, symbol); break;
          case "#": line += Hashtag.getLine(lineNumber, symbol); break;
          case "?": line += Question.getLine(lineNumber, symbol); break;
          case " ": line += Space.getLine(lineNumber, symbol); break;
          case "-": line += Subtraction.getLine(lineNumber, symbol); break;
        }
    }

    return line;
  }

}