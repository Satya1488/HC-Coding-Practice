
class Name {

    constructor(str) {
        this.string = str;
    }

    firstChar() {
        return this.string[0]
    }

    lastChar() {
        return this.string[this.string.length-1];
    }

    middleCount() {
        return this.string.length-2
    }

    name1(num) {

        if (this.middleCount() > num) {
            return this.firstChar().toLowerCase() + this.middleCount() + this.lastChar();
        }
        else {
            return this.firstChar().toLowerCase() + (this.middleCount() - num) + this.lastChar();
        }

    }
}


let str = 'India';
let num = 1;

let numeroName = new Name(str)

console.log(numeroName.name1(num));
