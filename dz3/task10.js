
const prompt = require('prompt-sync')();

function fibonacciMemoization(n, memo = {}) {
    if (n <= 0) return 0; // Если n не положительное
    if (n === 1 || n === 2) return 1; // Первые два числа Фибоначчи равны 1
    if (memo[n]) return memo[n]; // Проверяем, есть ли уже вычисленное значение

    memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
    return memo[n];
}

const n = parseInt(prompt("Введите порядковый номер числа Фибоначчи: "), 10);

if (isNaN(n) || n <= 0) {
    console.log("Пожалуйста, введите положительное целое число.");
} else {
    console.log(`Число Фибоначчи под номером ${n} равно ${fibonacciMemoization(n)}`);
}
