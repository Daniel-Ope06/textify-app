export class Four {
    static getLine(lineNumber: number, symbol: string): string{
        let ____ = ' '.repeat(symbol.length);
        let llll = symbol;
        let line: string = "";

        switch(lineNumber){
            case 0: line = llll+____+llll+____; break;
            case 1: line = llll+____+llll+____; break;
            case 2: line = llll+____+llll+____; break;
            case 3: line = llll+____+llll+____; break;
            case 4: line = llll+llll+llll+____; break;
            case 5: line = llll+llll+llll+____; break;
            case 6: line = ____+____+llll+____; break;
            case 7: line = ____+____+llll+____; break;
            case 8: line = ____+____+llll+____; break;
            case 9: line = ____+____+llll+____; break;
        }
        return line;
    }
}