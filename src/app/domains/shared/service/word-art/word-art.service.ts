import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Characters } from './characters/characters';

@Injectable({
  providedIn: 'root'
})
export class WordArtService {
  convertToWordArt(text: string, symbol: string): string {
    let wordArt: string = "";

    for (let i = 0; i < 10; i++){
      wordArt += Characters.getLine(i, text, symbol) + "\n";
    }

    return wordArt;
  }
}