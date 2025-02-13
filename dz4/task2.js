
const prompt = require('prompt-sync');

class Fraction {
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Знаменатель не может быть равен нулю.");
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this.simplify();
    }

    simplify() {
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const commonDivisor = gcd(this.numerator, this.denominator);
        this.numerator /= commonDivisor;
        this.denominator /= commonDivisor;
    }

    add(other) {
        const newNumerator = (this.numerator * other.denominator) + (other.numerator * this.denominator);
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }

    subtract(other) {
        const newNumerator = (this.numerator * other.denominator) - (other.numerator * this.denominator);
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }

    multiply(other) {
        const newNumerator = this.numerator * other.numerator;
        const newDenominator = this.denominator * other.denominator;
        return new Fraction(newNumerator, newDenominator);
    }

    divide(other) {
        if (other.numerator === 0) {
            throw new Error("Деление на ноль.");
        }
        const newNumerator = this.numerator * other.denominator;
        const newDenominator = this.denominator * other.numerator;
        return new Fraction(newNumerator, newDenominator);
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}


const fraction1 = new Fraction(1, 2);
const fraction2 = new Fraction(1, 3);

console.log("Сложение:", fraction1.add(fraction2).toString());  
console.log("Вычитание:", fraction1.subtract(fraction2).toString());  
console.log("Умножение:", fraction1.multiply(fraction2).toString());  
console.log("Деление:", fraction1.divide(fraction2).toString());  
