// Alphabets
import { A } from './alphabet/english/a.alphabet';


export class Characters {
    static characterSet: string[] = ["A"];

    static getLine(lineNumber: number, text: string, symbol: string): string {
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